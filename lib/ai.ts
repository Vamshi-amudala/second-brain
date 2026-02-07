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
            prompt: `Generate a concise 2-sentence summary of the following content. Be clear and informative:\n\n${content}`,
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
            prompt: `Based on the following title and content, suggest exactly 3 relevant tags (single words or short phrases, lowercase, separated by commas).

Title: ${title}
Content: ${content}

Return only the tags, separated by commas, nothing else.`,
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
            prompt: `Analyze the following content and provide:
1. A concise 2-sentence summary
2. Exactly 3 relevant tags (single words or short phrases, lowercase)

Title: ${title}
Content: ${content}

Format your response as:
SUMMARY: [your summary here]
TAGS: tag1, tag2, tag3`,
        });

        const summaryMatch = text.match(/SUMMARY:\s*(.+?)(?=TAGS:|$)/s);
        const tagsMatch = text.match(/TAGS:\s*(.+?)$/s);

        const summary = summaryMatch ? summaryMatch[1].trim() : await generateSummary(content);
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
