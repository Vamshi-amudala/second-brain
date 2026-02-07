'use server';

import { revalidatePath } from 'next/cache';
import { query, CreateKnowledgeItemInput, KnowledgeItem } from '@/lib/db';
import { enhanceContent } from '@/lib/ai';

export interface CreateKnowledgeItemResult {
    success: boolean;
    data?: KnowledgeItem;
    error?: string;
}

export async function createKnowledgeItem(
    input: CreateKnowledgeItemInput
): Promise<CreateKnowledgeItemResult> {
    try {
        let summary = input.summary;
        let tags = input.tags || [];

        if (!summary || tags.length === 0) {
            try {
                const enhanced = await enhanceContent(input.content, input.title);
                summary = summary || enhanced.summary;
                tags = tags.length > 0 ? tags : enhanced.tags;
            } catch (aiError) {
                console.error('AI enhancement failed, continuing without it:', aiError);

                if (!summary) {
                    summary = input.content.substring(0, 200) + (input.content.length > 200 ? '...' : '');
                }

                if (tags.length === 0) {
                    const words = (input.title + ' ' + input.content)
                        .toLowerCase()
                        .replace(/[^\w\s]/g, ' ')
                        .split(/\s+/)
                        .filter(word => word.length > 4);

                    const wordFreq = words.reduce((acc, word) => {
                        acc[word] = (acc[word] || 0) + 1;
                        return acc;
                    }, {} as Record<string, number>);

                    tags = Object.entries(wordFreq)
                        .sort((a, b) => b[1] - a[1])
                        .slice(0, 3)
                        .map(([word]) => word);

                    if (tags.length === 0) {
                        tags = [input.type];
                    }
                }
            }
        }

        const result = await query<KnowledgeItem>(
            `INSERT INTO knowledge_items (title, content, summary, type, tags, source_url)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING *`,
            [input.title, input.content, summary, input.type, tags, input.source_url || null]
        );

        revalidatePath('/dashboard');

        return {
            success: true,
            data: result[0],
        };
    } catch (error) {
        console.error('Error creating knowledge item:', error);
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Failed to create knowledge item',
        };
    }
}

export async function getKnowledgeItems(filters?: {
    type?: string;
    tags?: string[];
    search?: string;
    sortBy?: 'created_at' | 'title';
    sortOrder?: 'asc' | 'desc';
}): Promise<KnowledgeItem[]> {
    try {
        let queryText = 'SELECT * FROM knowledge_items WHERE 1=1';
        const params: any[] = [];
        let paramIndex = 1;

        if (filters?.type) {
            queryText += ` AND type = $${paramIndex}`;
            params.push(filters.type);
            paramIndex++;
        }

        if (filters?.tags && filters.tags.length > 0) {
            queryText += ` AND tags && $${paramIndex}`;
            params.push(filters.tags);
            paramIndex++;
        }

        if (filters?.search) {
            queryText += ` AND (
        to_tsvector('english', title || ' ' || content) @@ plainto_tsquery('english', $${paramIndex})
        OR title ILIKE $${paramIndex + 1}
        OR content ILIKE $${paramIndex + 1}
      )`;
            params.push(filters.search, `%${filters.search}%`);
            paramIndex += 2;
        }

        const sortBy = filters?.sortBy || 'created_at';
        const sortOrder = filters?.sortOrder || 'desc';
        queryText += ` ORDER BY ${sortBy} ${sortOrder.toUpperCase()}`;

        const items = await query<KnowledgeItem>(queryText, params);
        return items;
    } catch (error) {
        console.error('Error fetching knowledge items:', error);
        return [];
    }
}

export async function deleteKnowledgeItem(id: string): Promise<CreateKnowledgeItemResult> {
    try {
        await query('DELETE FROM knowledge_items WHERE id = $1', [id]);
        revalidatePath('/dashboard');

        return { success: true };
    } catch (error) {
        console.error('Error deleting knowledge item:', error);
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Failed to delete knowledge item',
        };
    }
}
