import { Card } from '@/components/ui/card';
import { Code, Database, Palette, Zap } from 'lucide-react';

export default function DocsPage() {
    return (
        <div className="min-h-screen p-8">
            <div className="max-w-4xl mx-auto space-y-12">
                <div className="space-y-4">
                    <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                        Documentation
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Learn about the architecture, principles, and infrastructure behind Second Brain
                    </p>
                </div>

                {/* Portable Architecture */}
                <section className="space-y-6">
                    <div className="flex items-center gap-3">
                        <Database className="w-8 h-8 text-primary" />
                        <h2 className="text-3xl font-bold">Portable Architecture</h2>
                    </div>

                    <Card className="p-6 bg-card/50 backdrop-blur-sm space-y-4">
                        <p className="text-muted-foreground">
                            Second Brain is built with a decoupled, portable architecture that separates concerns
                            and makes it easy to swap components or migrate to different platforms.
                        </p>

                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Database Layer</h3>
                                <p className="text-sm text-muted-foreground">
                                    The database layer (<code className="px-2 py-1 bg-muted rounded">lib/db.ts</code>)
                                    provides a clean abstraction over PostgreSQL. It uses a connection pool pattern with
                                    SSL support for Aiven, making it easy to switch database providers by simply updating
                                    the connection configuration.
                                </p>
                                <ul className="mt-2 space-y-1 text-sm text-muted-foreground list-disc list-inside">
                                    <li>Singleton pool pattern for efficient connection management</li>
                                    <li>TypeScript interfaces for type-safe database operations</li>
                                    <li>Full-text search indexes for fast queries</li>
                                    <li>Automatic schema initialization</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-2">AI Service Layer</h3>
                                <p className="text-sm text-muted-foreground">
                                    The AI layer (<code className="px-2 py-1 bg-muted rounded">lib/ai.ts</code>)
                                    supports both Google Gemini and OpenAI, automatically selecting the provider based
                                    on available API keys. This makes it trivial to switch AI providers or add new ones.
                                </p>
                                <ul className="mt-2 space-y-1 text-sm text-muted-foreground list-disc list-inside">
                                    <li>Provider-agnostic API using Vercel AI SDK</li>
                                    <li>Automatic fallback mechanisms</li>
                                    <li>Optimized batch operations for efficiency</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-2">Server Actions</h3>
                                <p className="text-sm text-muted-foreground">
                                    Business logic is encapsulated in Next.js Server Actions
                                    (<code className="px-2 py-1 bg-muted rounded">app/actions/knowledge.ts</code>),
                                    providing a clean separation between UI and data operations.
                                </p>
                            </div>
                        </div>
                    </Card>
                </section>

                {/* UX Principles */}
                <section className="space-y-6">
                    <div className="flex items-center gap-3">
                        <Palette className="w-8 h-8 text-primary" />
                        <h2 className="text-3xl font-bold">UX Principles</h2>
                    </div>

                    <Card className="p-6 bg-card/50 backdrop-blur-sm space-y-4">
                        <p className="text-muted-foreground">
                            Second Brain follows three core UX principles that guide every design decision:
                        </p>

                        <div className="space-y-6">
                            <div className="border-l-4 border-purple-500 pl-4">
                                <h3 className="text-xl font-semibold mb-2">1. Clarity over Clutter</h3>
                                <p className="text-sm text-muted-foreground">
                                    Every interface element serves a clear purpose. We use progressive disclosure to
                                    show advanced features only when needed, keeping the primary interface clean and
                                    focused. Information hierarchy is maintained through typography, spacing, and subtle
                                    visual cues.
                                </p>
                            </div>

                            <div className="border-l-4 border-blue-500 pl-4">
                                <h3 className="text-xl font-semibold mb-2">2. AI as a Co-pilot</h3>
                                <p className="text-sm text-muted-foreground">
                                    AI enhances the user experience without getting in the way. Summaries and tags are
                                    generated automatically but can be overridden. The AI works in the background,
                                    providing intelligent assistance while keeping the user in control.
                                </p>
                            </div>

                            <div className="border-l-4 border-teal-500 pl-4">
                                <h3 className="text-xl font-semibold mb-2">3. Delight in Details</h3>
                                <p className="text-sm text-muted-foreground">
                                    Micro-interactions and animations make the interface feel alive and responsive.
                                    Hover states, smooth transitions, and parallax effects create a premium experience
                                    that encourages exploration and engagement.
                                </p>
                            </div>
                        </div>
                    </Card>
                </section>

                {/* Infrastructure & Public API */}
                <section className="space-y-6">
                    <div className="flex items-center gap-3">
                        <Zap className="w-8 h-8 text-primary" />
                        <h2 className="text-3xl font-bold">Infrastructure & Public API</h2>
                    </div>

                    <Card className="p-6 bg-card/50 backdrop-blur-sm space-y-4">
                        <p className="text-muted-foreground">
                            Second Brain exposes a public API for programmatic access to your knowledge base.
                        </p>

                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Query Endpoint</h3>
                                <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                                    GET /api/public/brain/query?q=search_term
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-2">Response Format</h3>
                                <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                                    {`{
  "success": true,
  "count": 5,
  "data": [
    {
      "id": "uuid",
      "title": "Knowledge Item Title",
      "content": "Full content...",
      "summary": "AI-generated summary",
      "type": "note",
      "tags": ["tag1", "tag2", "tag3"],
      "source_url": "https://...",
      "created_at": "2026-02-07T...",
      "updated_at": "2026-02-07T..."
    }
  ]
}`}
                                </pre>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-2">Features</h3>
                                <ul className="space-y-1 text-sm text-muted-foreground list-disc list-inside">
                                    <li>Full-text search across titles and content</li>
                                    <li>Returns up to 50 most recent matching items</li>
                                    <li>JSON response format for easy integration</li>
                                    <li>No authentication required (public endpoint)</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-2">Example Usage</h3>
                                <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                                    curl https://your-domain.com/api/public/brain/query?q=javascript
                                </div>
                            </div>
                        </div>
                    </Card>
                </section>

                {/* Setup Instructions */}
                <section className="space-y-6">
                    <div className="flex items-center gap-3">
                        <Code className="w-8 h-8 text-primary" />
                        <h2 className="text-3xl font-bold">Setup & Configuration</h2>
                    </div>

                    <Card className="p-6 bg-card/50 backdrop-blur-sm space-y-4">
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Environment Variables</h3>
                                <p className="text-sm text-muted-foreground mb-2">
                                    Create a <code className="px-2 py-1 bg-muted rounded">.env.local</code> file with:
                                </p>
                                <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                                    {`DATABASE_URL=postgresql://user:pass@host:port/db?sslmode=require
GOOGLE_GENERATIVE_AI_API_KEY=your_gemini_key
# OR
OPENAI_API_KEY=your_openai_key`}
                                </pre>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-2">Database Initialization</h3>
                                <p className="text-sm text-muted-foreground">
                                    The database schema is automatically created on first connection. You can also
                                    manually initialize it by calling the <code className="px-2 py-1 bg-muted rounded">initializeDatabase()</code> function.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-2">Running Locally</h3>
                                <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-2">
                                    <div>npm install</div>
                                    <div>npm run dev</div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </section>
            </div>
        </div>
    );
}
