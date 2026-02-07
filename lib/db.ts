import { Pool, PoolConfig } from 'pg';

let pool: Pool | null = null;

export function getPool(): Pool {
    if (!pool) {
        // Config created at runtime to ensure environment variables are loaded
        const poolConfig: PoolConfig = {
            connectionString: process.env.DATABASE_URL,
            ssl: {
                rejectUnauthorized: false,
            },
            max: 20,
            idleTimeoutMillis: 30000,
            connectionTimeoutMillis: 2000,
        };

        pool = new Pool(poolConfig);

        pool.on('error', (err) => {
            console.error('Unexpected error on idle client', err);
            process.exit(-1);
        });
    }

    return pool;
}

export async function query<T = any>(
    text: string,
    params?: any[]
): Promise<T[]> {
    const pool = getPool();
    const start = Date.now();

    try {
        const res = await pool.query(text, params);
        const duration = Date.now() - start;

        if (process.env.NODE_ENV === 'development') {
            console.log('Executed query', { text, duration, rows: res.rowCount });
        }

        return res.rows;
    } catch (error) {
        console.error('Database query error:', error);
        throw error;
    }
}

export async function initializeDatabase(): Promise<void> {
    const createTableQuery = `
    CREATE TABLE IF NOT EXISTS knowledge_items (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      title TEXT NOT NULL,
      content TEXT NOT NULL,
      summary TEXT,
      type TEXT NOT NULL CHECK (type IN ('note', 'link', 'insight')),
      tags TEXT[] DEFAULT '{}',
      source_url TEXT,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );

    CREATE INDEX IF NOT EXISTS idx_knowledge_items_type ON knowledge_items(type);
    CREATE INDEX IF NOT EXISTS idx_knowledge_items_tags ON knowledge_items USING GIN(tags);
    CREATE INDEX IF NOT EXISTS idx_knowledge_items_created_at ON knowledge_items(created_at DESC);
    CREATE INDEX IF NOT EXISTS idx_knowledge_items_search 
      ON knowledge_items USING GIN(to_tsvector('english', title || ' ' || content));
  `;

    try {
        await query(createTableQuery);
        console.log('Database schema initialized successfully');
    } catch (error) {
        console.error('Failed to initialize database schema:', error);
        throw error;
    }
}

export async function closePool(): Promise<void> {
    if (pool) {
        await pool.end();
        pool = null;
    }
}
export interface KnowledgeItem {
    id: string;
    title: string;
    content: string;
    summary: string | null;
    type: 'note' | 'link' | 'insight';
    tags: string[];
    source_url: string | null;
    created_at: Date;
    updated_at: Date;
}

export interface CreateKnowledgeItemInput {
    title: string;
    content: string;
    summary?: string;
    type: 'note' | 'link' | 'insight';
    tags?: string[];
    source_url?: string;
}

export interface UpdateKnowledgeItemInput {
    title?: string;
    content?: string;
    summary?: string;
    type?: 'note' | 'link' | 'insight';
    tags?: string[];
    source_url?: string;
}
