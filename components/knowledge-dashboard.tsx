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
import { Search, X, Filter, SortAsc } from 'lucide-react';

export function KnowledgeDashboard() {
    const [items, setItems] = useState<KnowledgeItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [typeFilter, setTypeFilter] = useState<string>('');
    const [sortBy, setSortBy] = useState<'created_at' | 'title'>('created_at');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

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
            {/* Ambient Background Mesh - Bolt Style */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] animate-pulse delay-1000" />
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
        </div>
    );
}
