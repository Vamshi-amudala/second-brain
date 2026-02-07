'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Code2, Play, Copy, Check } from 'lucide-react';

export default function APIDocsPage() {
    const [query, setQuery] = useState('javascript');
    const [response, setResponse] = useState<string>('');
    const [loading, setLoading] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleTryIt = async () => {
        setLoading(true);
        try {
            const res = await fetch(`/api/public/brain/query?q=${encodeURIComponent(query)}`);
            const data = await res.json();
            setResponse(JSON.stringify(data, null, 2));
        } catch (error) {
            setResponse(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
        } finally {
            setLoading(false);
        }
    };

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-background/50">
            <div className="max-w-5xl mx-auto px-4 py-16">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                        API Reference
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Programmatic access to your Second Brain knowledge base
                    </p>
                </div>

                <div className="space-y-12">
                    {/* Overview */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                            <Code2 className="h-8 w-8 text-primary" />
                            Overview
                        </h2>
                        <Card className="p-6 bg-card/50 backdrop-blur-sm">
                            <p className="text-muted-foreground mb-4">
                                The Second Brain API provides RESTful endpoints for querying your knowledge base.
                                All endpoints return JSON responses and support full-text search across titles and content.
                            </p>
                            <div className="grid md:grid-cols-2 gap-4 mt-6">
                                <div className="p-4 border border-border rounded-lg">
                                    <h3 className="font-semibold mb-2">Base URL</h3>
                                    <code className="text-sm text-primary">/api/public/brain</code>
                                </div>
                                <div className="p-4 border border-border rounded-lg">
                                    <h3 className="font-semibold mb-2">Authentication</h3>
                                    <p className="text-sm text-muted-foreground">None required (public API)</p>
                                </div>
                            </div>
                        </Card>
                    </section>

                    {/* Query Endpoint */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6">Query Endpoint</h2>
                        <Card className="p-6 bg-card/50 backdrop-blur-sm space-y-6">
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-semibold">GET /api/public/brain/query</h3>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => copyToClipboard('GET /api/public/brain/query?q=search_term')}
                                    >
                                        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                                    </Button>
                                </div>
                                <p className="text-muted-foreground mb-4">
                                    Search your knowledge base using full-text search. Returns up to 50 most recent matching items.
                                </p>

                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold mb-2">Query Parameters</h4>
                                        <div className="bg-muted/30 p-4 rounded-lg space-y-2">
                                            <div className="flex gap-4">
                                                <code className="text-primary">q</code>
                                                <span className="text-muted-foreground flex-1">
                                                    <span className="text-red-400">*required</span> - Search query string
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold mb-2">Response Format</h4>
                                        <pre className="bg-muted/30 p-4 rounded-lg text-sm overflow-x-auto">
                                            {`{
  "success": true,
  "count": 5,
  "data": [
    {
      "id": 1,
      "title": "Understanding JavaScript Closures",
      "content": "Full content of the knowledge item...",
      "summary": "AI-generated summary of the content",
      "type": "note",
      "tags": ["javascript", "programming", "closures"],
      "source_url": "https://example.com/article",
      "created_at": "2026-02-07T10:30:00.000Z",
      "updated_at": "2026-02-07T10:30:00.000Z"
    }
  ]
}`}
                                        </pre>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold mb-2">Error Response</h4>
                                        <pre className="bg-muted/30 p-4 rounded-lg text-sm overflow-x-auto">
                                            {`{
  "error": "Query parameter 'q' is required",
  "success": false
}`}
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </section>

                    {/* Try It Out */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                            <Play className="h-8 w-8 text-primary" />
                            Live API Tester
                        </h2>
                        <Card className="p-6 bg-card/50 backdrop-blur-sm space-y-4">
                            <div>
                                <label className="text-sm font-medium mb-2 block">Search Query</label>
                                <div className="flex gap-2">
                                    <Input
                                        value={query}
                                        onChange={(e) => setQuery(e.target.value)}
                                        placeholder="Enter search term..."
                                        onKeyDown={(e) => e.key === 'Enter' && handleTryIt()}
                                    />
                                    <Button onClick={handleTryIt} disabled={loading || !query}>
                                        {loading ? 'Loading...' : 'Send Request'}
                                    </Button>
                                </div>
                            </div>

                            {response && (
                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <label className="text-sm font-medium">Response</label>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => copyToClipboard(response)}
                                        >
                                            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                                        </Button>
                                    </div>
                                    <pre className="bg-muted/30 p-4 rounded-lg text-sm overflow-x-auto max-h-96">
                                        {response}
                                    </pre>
                                </div>
                            )}
                        </Card>
                    </section>

                    {/* Code Examples */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6">Code Examples</h2>
                        <div className="space-y-4">
                            <Card className="p-6 bg-card/50 backdrop-blur-sm">
                                <h3 className="font-semibold mb-3">cURL</h3>
                                <pre className="bg-muted/30 p-4 rounded-lg text-sm overflow-x-auto">
                                    {`curl "https://your-domain.com/api/public/brain/query?q=javascript"`}
                                </pre>
                            </Card>

                            <Card className="p-6 bg-card/50 backdrop-blur-sm">
                                <h3 className="font-semibold mb-3">JavaScript (Fetch)</h3>
                                <pre className="bg-muted/30 p-4 rounded-lg text-sm overflow-x-auto">
                                    {`const response = await fetch('/api/public/brain/query?q=javascript');
const data = await response.json();

if (data.success) {
  console.log(\`Found \${data.count} items\`);
  data.data.forEach(item => {
    console.log(item.title, item.tags);
  });
}`}
                                </pre>
                            </Card>

                            <Card className="p-6 bg-card/50 backdrop-blur-sm">
                                <h3 className="font-semibold mb-3">Python (requests)</h3>
                                <pre className="bg-muted/30 p-4 rounded-lg text-sm overflow-x-auto">
                                    {`import requests

response = requests.get(
    'https://your-domain.com/api/public/brain/query',
    params={'q': 'javascript'}
)

data = response.json()
if data['success']:
    print(f"Found {data['count']} items")
    for item in data['data']:
        print(item['title'], item['tags'])`}
                                </pre>
                            </Card>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
