import { generateText } from 'ai';
import { google } from '@ai-sdk/google';
import { openai } from '@ai-sdk/openai';
import { KnowledgeItem } from './db';

const getAIModel = () => {
    if (process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
        return google('gemini-1.5-flash');
    } else if (process.env.OPENAI_API_KEY) {
        return openai('gpt-4o-mini');
    }
    throw new Error('No AI API key configured. Please set GOOGLE_GENERATIVE_AI_API_KEY or OPENAI_API_KEY');
};

export async function answerQuery(
    query: string,
    knowledgeItems: KnowledgeItem[]
): Promise<{ answer: string; citations: string[] }> {
    try {
        console.log('[Query AI] Processing query:', query);
        console.log('[Query AI] Knowledge items found:', knowledgeItems.length);

        // If no items found, return a helpful message
        if (knowledgeItems.length === 0) {
            return {
                answer: "I couldn't find any relevant information in your knowledge base for this query. Try adding more notes or rephrasing your question.",
                citations: [],
            };
        }

        // Limit to top 10 most relevant items to avoid token limits
        const relevantItems = knowledgeItems.slice(0, 10);

        // Build context from knowledge items
        const context = relevantItems
            .map((item, index) => {
                return `[${index + 1}] Title: ${item.title}
Summary: ${item.summary}
Content: ${item.content.substring(0, 500)}${item.content.length > 500 ? '...' : ''}
Tags: ${item.tags.join(', ')}
---`;
            })
            .join('\n\n');

        const prompt = `You are an intelligent assistant helping a user query their personal knowledge base (Second Brain).

USER QUERY: "${query}"

RELEVANT KNOWLEDGE FROM USER'S NOTES:
${context}

TASK:
1. Analyze the user's query and the relevant knowledge items
2. Synthesize a comprehensive, intelligent answer that directly addresses the query
3. Use specific information from the knowledge items
4. Reference sources using [1], [2], etc. when citing specific items
5. If the information doesn't fully answer the query, acknowledge what's available and what's missing

REQUIREMENTS:
- Be conversational and helpful
- Use **bold** for key terms and concepts
- Provide specific details from the notes, not generic information
- Keep the answer focused and relevant
- If multiple sources provide different perspectives, synthesize them

ANSWER:`;

        console.log('[Query AI] Sending prompt to AI...');

        const { text } = await generateText({
            model: getAIModel(),
            prompt: prompt,
            temperature: 0.7,
           maxOutputTokens: 1000,
        });

        console.log('[Query AI] AI response received:', text.substring(0, 100) + '...');

        // Extract citations (titles of items that were used)
        const citations = relevantItems.map(item => item.title);

        return {
            answer: text.trim(),
            citations: citations,
        };
    } catch (error) {
        console.error('[Query AI] Error processing query:', error);

        // Fallback: return a basic summary of found items
        if (knowledgeItems.length > 0) {
            const fallbackAnswer = `I found ${knowledgeItems.length} relevant item(s) in your knowledge base:\n\n` +
                knowledgeItems.slice(0, 3).map((item, i) =>
                    `**${i + 1}. ${item.title}**\n${item.summary}`
                ).join('\n\n');

            return {
                answer: fallbackAnswer,
                citations: knowledgeItems.slice(0, 3).map(item => item.title),
            };
        }

        throw new Error(`Failed to process query: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
}
