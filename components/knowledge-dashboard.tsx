'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { KnowledgeCard } from './knowledge-card';
import { EmptyState } from './empty-state';
import { KnowledgeSkeleton } from './knowledge-skeleton';
import { KnowledgeItem } from '@/lib/db';
import { getKnowledgeItems } from '@/app/actions/knowledge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, X, Filter, SortAsc, Code, Copy, Check } from 'lucide-react';

export function KnowledgeDashboard() {
    const [items, setItems] = useState<KnowledgeItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [typeFilter, setTypeFilter] = useState<string>('');
    const [sortBy, setSortBy] = useState<'created_at' | 'title'>('created_at');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
    const [showEmbed, setShowEmbed] = useState(false);
    const [copied, setCopied] = useState(false);

    const hasActiveFilters = searchQuery || typeFilter;

    useEffect(() => {
        loadItems();
    }, [typeFilter, sortBy, sortOrder]);

    const loadItems = async () => {
        setLoading(true);
        try {
            const fetchedItems = await getKnowledgeItems({
                type: typeFilter || undefined,
                search: searchQuery || undefined,
                sortBy,
                sortOrder,
            });
            setItems(fetchedItems);
        } catch (error) {
            console.error('Error loading items:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = () => {
        loadItems();
    };

    const clearFilters = () => {
        setSearchQuery('');
        setTypeFilter('');
        setSortBy('created_at');
        setSortOrder('desc');
    };

    const toggleSortOrder = () => {
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    };

    return (
        <div className="space-y-8 relative min-h-[600px]">
            {/* Ambient Background Mesh */}
            {/* Ambient Background Mesh - Bolt Style (Static) */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col sm:flex-row gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10"
            >
                <div className="flex-1 flex gap-2">
                    <div className="relative flex-1 group">
                        <Input
                            placeholder="Search knowledge..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                            className="pr-10 bg-[#0c0c0e] border-white/5 focus:border-cyan-500/50 focus:ring-cyan-500/20 transition-all duration-300 placeholder:text-gray-600"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => {
                                    setSearchQuery('');
                                    loadItems();
                                }}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        )}
                    </div>
                    <Button onClick={handleSearch} size="icon" className="shadow-lg shadow-primary/20">
                        <Search className="h-4 w-4" />
                    </Button>
                </div>

                <div className="flex gap-2 flex-wrap sm:flex-nowrap">
                    <div className="relative">
                        <Filter className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <select
                            value={typeFilter}
                            onChange={(e) => setTypeFilter(e.target.value)}
                            className="pl-9 pr-8 py-2 h-10 w-full rounded-md border border-white/5 bg-[#0c0c0e] text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/20 focus-visible:border-cyan-500/50 appearance-none cursor-pointer hover:bg-white/5 transition-colors text-gray-300"
                        >
                            <option value="" className="bg-[#0c0c0e]">All Types</option>
                            <option value="note" className="bg-[#0c0c0e]">Notes</option>
                            <option value="link" className="bg-[#0c0c0e]">Links</option>
                            <option value="insight" className="bg-[#0c0c0e]">Insights</option>
                        </select>
                    </div>

                    <div className="relative">
                        <SortAsc className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value as any)}
                            className="pl-9 pr-8 py-2 h-10 w-full rounded-md border border-white/5 bg-[#0c0c0e] text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/20 focus-visible:border-cyan-500/50 appearance-none cursor-pointer hover:bg-white/5 transition-colors text-gray-300"
                        >
                            <option value="created_at" className="bg-[#0c0c0e]">Date</option>
                            <option value="title" className="bg-[#0c0c0e]">Title</option>
                        </select>
                    </div>

                    <Button
                        onClick={toggleSortOrder}
                        size="icon"
                        variant="outline"
                        className="border-white/10 bg-black/20 hover:bg-white/5"
                    >
                        {sortOrder === 'asc' ? '↑' : '↓'}
                    </Button>

                    {hasActiveFilters && (
                        <Button onClick={clearFilters} variant="ghost" size="sm" className="hover:bg-red-500/10 hover:text-red-400">
                            <X className="h-4 w-4 mr-2" />
                            Clear
                        </Button>
                    )}

                    <Button
                        onClick={() => setShowEmbed(true)}
                        variant="outline"
                        className="border-cyan-500/20 bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 hover:text-cyan-300 ml-2"
                    >
                        <Code className="h-4 w-4 mr-2" />
                        Embed
                    </Button>
                </div>
            </motion.div>

            <AnimatePresence mode="wait">
                {loading ? (
                    <motion.div
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {[...Array(6)].map((_, i) => (
                            <KnowledgeSkeleton key={i} />
                        ))}
                    </motion.div>
                ) : items.length === 0 ? (
                    <motion.div
                        key="empty"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <EmptyState
                            variant={hasActiveFilters ? 'no-results' : 'no-items'}
                            onAction={hasActiveFilters ? clearFilters : undefined}
                            actionLabel={hasActiveFilters ? 'Clear filters' : undefined}
                        />
                    </motion.div>
                ) : (
                    <motion.div
                        key="grid"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            visible: {
                                transition: {
                                    staggerChildren: 0.08,
                                },
                            },
                        }}
                    >
                        <AnimatePresence>
                            {items.map((item, index) => (
                                <KnowledgeCard
                                    key={item.id}
                                    item={item}
                                    index={index}
                                    onDelete={loadItems}
                                />
                            ))}
                        </AnimatePresence>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {showEmbed && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                        onClick={() => setShowEmbed(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-[#0c0c0e] border border-white/10 rounded-xl max-w-lg w-full p-6 shadow-2xl relative"
                        >
                            <button
                                onClick={() => setShowEmbed(false)}
                                className="absolute right-4 top-4 text-muted-foreground hover:text-foreground"
                            >
                                <X className="h-4 w-4" />
                            </button>

                            <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                                <Code className="h-5 w-5 text-cyan-500" />
                                Embed Search Widget
                            </h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                Place this code on your website to display your Second Brain search interface.
                            </p>

                            <div className="relative bg-black/50 p-4 rounded-lg border border-white/5 mb-6">
                                <pre className="text-xs text-gray-300 overflow-x-auto whitespace-pre-wrap font-mono">
                                    {`<iframe 
  src="${typeof window !== 'undefined' ? window.location.origin : ''}/widget"
  width="100%"
  height="600"
  frameborder="0"
  style="border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.1);"
></iframe>`}
                                </pre>
                                <Button
                                    size="icon"
                                    variant="ghost"
                                    className="absolute top-2 right-2 h-8 w-8 hover:bg-white/10"
                                    onClick={() => {
                                        const code = `<iframe src="${window.location.origin}/widget" width="100%" height="600" frameborder="0" style="border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.1);"></iframe>`;
                                        navigator.clipboard.writeText(code);
                                        setCopied(true);
                                        setTimeout(() => setCopied(false), 2000);
                                    }}
                                >
                                    {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                                </Button>
                            </div>

                            <div className="flex justify-end gap-2">
                                <Button variant="ghost" onClick={() => setShowEmbed(false)}>
                                    Close
                                </Button>
                                <Button
                                    className="bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 border border-cyan-500/20"
                                    onClick={() => window.open('/widget', '_blank')}
                                >
                                    Preview Widget
                                </Button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div >
    );
}
