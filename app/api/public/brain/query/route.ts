import { NextRequest, NextResponse } from 'next/server';
import { query, KnowledgeItem } from '@/lib/db';

export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const searchQuery = searchParams.get('q');

        if (!searchQuery) {
            return NextResponse.json(
                { error: 'Query parameter "q" is required' },
                { status: 400 }
            );
        }

        // Search using full-text search and ILIKE for broader matching
        const items = await query<KnowledgeItem>(
            `SELECT * FROM knowledge_items 
       WHERE to_tsvector('english', title || ' ' || content) @@ plainto_tsquery('english', $1)
          OR title ILIKE $2
          OR content ILIKE $2
       ORDER BY created_at DESC
       LIMIT 50`,
            [searchQuery, `%${searchQuery}%`]
        );

        return NextResponse.json({
            success: true,
            count: items.length,
            data: items,
        });
    } catch (error) {
        console.error('Public API error:', error);
        return NextResponse.json(
            {
                success: false,
                error: 'Internal server error',
            },
            { status: 500 }
        );
    }
}
