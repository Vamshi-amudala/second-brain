'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, ExternalLink, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface KnowledgeItem {
    id: number;
    title: string;
    summary: string;
    type: string;
    tags: string[];
    source_url?: string;
    created_at: string;
}

export default function WidgetPage() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<KnowledgeItem[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSearch = async () => {
        if (!query.trim()) return;

        setLoading(true);
        setError('');

        try {
            const response = await fetch(`/api/public/brain/query?q=${encodeURIComponent(query)}`);
            const data = await response.json();

            if (data.success) {
                setResults(data.data || []);
            } else {
                setError(data.error || 'Failed to fetch results');
            }
        } catch (err) {
            setError('Network error. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const typeColors: Record<string, string> = {
        note: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
        link: 'bg-purple-500/10 text-purple-500 border-purple-500/20',
        insight: 'bg-green-500/10 text-green-500 border-green-500/20',
    };

    return (
        <div className="min-h-screen bg-background p-4 sm:p-6 lg:p-8">
            <div className="max-w-2xl mx-auto space-y-4 md:space-y-6">
                {/* Header */}
                <div className="text-center space-y-1 md:space-y-2">
                    <h1 className="text-xl md:text-2xl font-bold">Second Brain Search Widget</h1>
                    <p className="text-xs md:text-sm text-muted-foreground">
                        Embeddable knowledge search powered by AI
                    </p>
                </div>

                {/* Search Bar */}
                <Card className="p-3 md:p-4">
                    <div className="flex flex-col sm:flex-row gap-2">
                        <Input
                            placeholder="Search knowledge base..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                            className="flex-1 w-full sm:w-auto"
                        />
                        <Button onClick={handleSearch} disabled={loading || !query.trim()} className="w-full sm:w-auto">
                            {loading ? (
                                <Loader2 className="h-4 w-4 animate-spin" />
                            ) : (
                                <Search className="h-4 w-4" />
                            )}
                        </Button>
                    </div>
                </Card>

                {/* Error Message */}
                {error && (
                    <Card className="p-4 bg-destructive/10 border-destructive/20">
                        <p className="text-sm text-destructive">{error}</p>
                    </Card>
                )}

                {/* Results */}
                <AnimatePresence mode="wait">
                    {results.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="space-y-3"
                        >
                            <p className="text-sm text-muted-foreground">
                                Found {results.length} result{results.length !== 1 ? 's' : ''}
                            </p>

                            {results.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <Card className="p-4 hover:border-primary/50 transition-colors">
                                        <div className="space-y-2">
                                            <div className="flex items-start justify-between gap-2">
                                                <h3 className="font-semibold text-sm">{item.title}</h3>
                                                <span
                                                    className={`text-xs px-2 py-0.5 rounded-full border ${typeColors[item.type] || typeColors.note
                                                        }`}
                                                >
                                                    {item.type}
                                                </span>
                                            </div>

                                            {item.summary && (
                                                <p className="text-xs text-muted-foreground line-clamp-2">
                                                    {item.summary}
                                                </p>
                                            )}

                                            <div className="flex items-center justify-between gap-2">
                                                <div className="flex flex-wrap gap-1">
                                                    {item.tags?.slice(0, 3).map((tag) => (
                                                        <span
                                                            key={tag}
                                                            className="text-xs px-2 py-0.5 bg-secondary/50 rounded"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>

                                                {item.source_url && (
                                                    <a
                                                        href={item.source_url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-xs text-primary hover:underline inline-flex items-center gap-1"
                                                    >
                                                        Source
                                                        <ExternalLink className="h-3 w-3" />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </Card>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>


            </div>
        </div>
    );
}
