import { generateText } from 'ai';
import { google } from '@ai-sdk/google';
import { openai } from '@ai-sdk/openai';

const getAIModel = () => {
    if (process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
        return google('gemini-2.5-flash');
    } else if (process.env.OPENAI_API_KEY) {
        return openai('gpt-4o-mini');
    }
    throw new Error('No AI API key configured. Please set GOOGLE_GENERATIVE_AI_API_KEY or OPENAI_API_KEY');
};

export async function generateSummary(content: string): Promise<string> {
    try {
        console.log('[AI] Generating summary...');
        console.log('[AI] API Key exists:', !!process.env.GOOGLE_GENERATIVE_AI_API_KEY);

        const { text } = await generateText({
            model: getAIModel(),
            prompt: `You are an elite knowledge synthesis AI. Your purpose is to transform raw information into actionable intelligence.

🎯 YOUR MISSION:
Analyze the content below and create a summary that:
- Reveals the CORE INSIGHT (not just what it says, but what it MEANS)
- Explains WHY this matters to the user's goals
- Suggests WHAT ACTION or focus this enables
- Connects to BROADER CONTEXT when relevant

⚠️ CRITICAL RULES:
1. For SHORT content (1-2 sentences): EXPAND with context, implications, or strategic value
2. For LONG content: DISTILL to the essential insight and actionable takeaway
3. NEVER use third-person phrases like "The user...", "This text...", "The individual..."
4. Write as if YOU are the user's internal voice of wisdom
5. Be conversational, direct, and insightful (2-3 sentences max)
6. Focus on UTILITY: make this knowledge immediately useful

📝 Content to synthesize:
${content}

💡 Your intelligent synthesis:`,
        });

        console.log('[AI] Summary generated successfully');
        return text.trim();
    } catch (error) {
        console.error('[AI] Error generating summary:', error);
        throw new Error(`Failed to generate summary: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
}

export async function suggestTags(content: string, title: string): Promise<string[]> {
    try {
        const { text } = await generateText({
            model: getAIModel(),
            prompt: `You are an intelligent tagging system for a Second Brain knowledge base.

🎯 OBJECTIVE: Generate 3 precise, discoverable tags that maximize future retrieval.

✨ TAG PHILOSOPHY:
- Tags should be SPECIFIC enough to be useful, BROAD enough to connect ideas
- Mix TOPIC tags (what it's about) with CONTEXT tags (why it matters)
- Prioritize tags that enable SERENDIPITOUS DISCOVERY of related knowledge
- Use industry-standard terminology when applicable

📋 Content:
Title: ${title}
Content: ${content}

🏷️ Return ONLY 3 tags (lowercase, comma-separated, no explanations):`,
        });

        const tags = text
            .split(',')
            .map(tag => tag.trim().toLowerCase())
            .filter(tag => tag.length > 0)
            .slice(0, 3);

        return tags;
    } catch (error) {
        console.error('Error suggesting tags:', error);
        throw new Error('Failed to suggest tags');
    }
}

export async function enhanceContent(
    content: string,
    title: string
): Promise<{ summary: string; tags: string[] }> {
    try {
        const { text } = await generateText({
            model: getAIModel(),
            prompt: `You are a SENIOR TECHNICAL MENTOR AI for a Second Brain system. Your role is to build "Infrastructure for Thought" by providing step-wise technical analysis.

🎯 YOUR MISSION: Transform this raw note into a numbered, step-wise technical breakdown that reveals architectural insights.

📝 User's Note:
Title: ${title}
Content: ${content}

✨ RESPONSE FORMAT (CRITICAL - Use numbered list with bold titles):

1. **Strategic Intent**: Analyze what the user is really trying to achieve (career growth, technical mastery, problem-solving). Be direct and insightful. (1-2 sentences)

2. **Technical Context**: Provide architectural or industry insights NOT in the original note. Include:
   - Best practices or design patterns
   - How this connects to broader technical landscape
   - Why this matters for modern development
   **Bold all key technical terms** for scannability. (2-3 sentences)

3. **Actionable Next Step**: Provide ONE specific, concrete action. Must include:
   - Exact resource (e.g., "Read the React Hooks documentation at react.dev/hooks")
   - OR specific project (e.g., "Build a TODO app using Docker + PostgreSQL")
   - OR concrete skill to practice (e.g., "Practice writing SQL joins with the Northwind database")
   (1-2 sentences)

🏷️ TAGS (exactly 3):
After your numbered analysis, provide tags on a new line:
TAGS: tag1, tag2, tag3
- Mix TOPIC tags (technology/concept) with CONTEXT tags (goal/application)
- Use lowercase, industry-standard terms

⚠️ CRITICAL FORMATTING RULES:
- MUST use numbered list format (1., 2., 3.)
- MUST start each point with **Bold Title**:
- NEVER use ### headers
- NEVER repeat the user's input verbatim
- Add NEW technical knowledge the user didn't provide
- Be architectural and technical, not generic

💡 Begin your step-wise technical analysis:`,
        });

        // Extract tags from the response (they come after TAGS:)
        const tagsMatch = text.match(/TAGS:\s*([\s\S]+?)$/);

        // Extract the full mentor response (everything before TAGS:)
        // This includes Strategic Analysis, Contextual Expansion, and Pro-Tip in Markdown
        const mentorResponseMatch = text.match(/([\s\S]+?)(?=TAGS:|$)/);

        const summary = mentorResponseMatch ? mentorResponseMatch[1].trim() : await generateSummary(content);
        const tagsText = tagsMatch ? tagsMatch[1].trim() : '';
        const tags = tagsText
            .split(',')
            .map(tag => tag.trim().toLowerCase())
            .filter(tag => tag.length > 0)
            .slice(0, 3);

        if (tags.length === 0) {
            const fallbackTags = await suggestTags(content, title);
            return { summary, tags: fallbackTags };
        }

        return { summary, tags };
    } catch (error) {
        console.error('Error enhancing content:', error);
        const [summary, tags] = await Promise.all([
            generateSummary(content),
            suggestTags(content, title),
        ]);
        return { summary, tags };
    }
}
