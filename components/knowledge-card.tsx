'use client';

import { KnowledgeItem } from '@/lib/db';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Trash2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { deleteKnowledgeItem } from '@/app/actions/knowledge';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface KnowledgeCardProps {
    item: KnowledgeItem;
    onDelete?: () => void;
    index: number;
}

export function KnowledgeCard({ item, onDelete, index }: KnowledgeCardProps) {
    const [isDeleting, setIsDeleting] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const handleDelete = async () => {
        if (!confirm('Are you sure you want to delete this item?')) return;

        setIsDeleting(true);
        const result = await deleteKnowledgeItem(item.id);

        if (result.success) {
            onDelete?.();
        } else {
            alert(`Error: ${result.error}`);
            setIsDeleting(false);
        }
    };

    const typeColors = {
        note: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
        link: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
        insight: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    };

    return (
        <>
            <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
            >
                <Card
                    className="group relative p-6 h-full bg-[#0a0a0a] border border-white/5 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer overflow-hidden hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.15)]"
                    onClick={() => setIsExpanded(true)}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10 space-y-4">
                        <div className="flex items-start justify-between gap-4">
                            <div className="flex-1 min-w-0">
                                <h3 className="text-lg font-semibold text-gray-100 mb-2 line-clamp-2 leading-relaxed group-hover:text-cyan-400 transition-colors">
                                    {item.title}
                                </h3>
                                <Badge
                                    variant="outline"
                                    className={`${typeColors[item.type]} text-xs transition-colors`}
                                >
                                    {item.type}
                                </Badge>
                            </div>

                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleDelete();
                                }}
                                disabled={isDeleting}
                                className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-red-500/10 rounded-md text-red-400 disabled:opacity-50"
                                aria-label="Delete item"
                            >
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </div>

                        {item.summary && (
                            <p className="text-sm text-gray-400 line-clamp-3 leading-relaxed">
                                {item.summary}
                            </p>
                        )}

                        {item.tags && item.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 pt-2">
                                {item.tags.map((tag) => (
                                    <Badge
                                        key={tag}
                                        variant="secondary"
                                        className="text-xs bg-white/5 text-gray-400 border-transparent"
                                    >
                                        #{tag}
                                    </Badge>
                                ))}
                            </div>
                        )}

                        <div className="flex items-center justify-between pt-2 border-t border-white/5 mt-auto">
                            <p className="text-xs text-gray-500">
                                {new Date(item.created_at).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                            </p>

                            {item.source_url && (
                                <div className="flex items-center gap-1.5 text-xs text-cyan-500/80">
                                    <ExternalLink className="w-3 h-3" />
                                    Source
                                </div>
                            )}
                        </div>
                    </div>
                </Card>
            </motion.div>

            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={() => setIsExpanded(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            className="bg-[#0a0a0a] border border-white/10 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl relative ring-1 ring-white/10"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Header Ambient Glow */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />

                            <div className="sticky top-0 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/5 p-6 flex items-start justify-between gap-4 z-20">
                                <div className="flex-1">
                                    <h2 className="text-2xl font-bold text-gray-100 mb-3 leading-tight">
                                        {item.title}
                                    </h2>
                                    <div className="flex items-center gap-3">
                                        <Badge
                                            variant="outline"
                                            className={`${typeColors[item.type]}`}
                                        >
                                            {item.type}
                                        </Badge>
                                        <div className="w-1 h-1 rounded-full bg-gray-700" />
                                        <span className="text-sm text-gray-400">
                                            {new Date(item.created_at).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                                        </span>
                                    </div>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => setIsExpanded(false)}
                                    className="hover:bg-white/5 rounded-full text-gray-400 hover:text-white"
                                >
                                    <X className="w-5 h-5" />
                                </Button>
                            </div>

                            <div className="p-8 space-y-8 overflow-y-auto max-h-[calc(90vh-100px)] custom-scrollbar">
                                {item.summary && (
                                    <div className="bg-cyan-950/20 border border-cyan-900/30 rounded-lg p-5">
                                        <h3 className="text-sm font-medium text-cyan-400 mb-2 flex items-center gap-2">
                                            AI Summary
                                        </h3>
                                        <p className="text-cyan-100/80 leading-relaxed text-sm">
                                            {item.summary}
                                        </p>
                                    </div>
                                )}

                                <div>
                                    <div className="prose prose-invert prose-p:text-gray-300 prose-headings:text-gray-100 max-w-none text-sm leading-7">
                                        <p className="whitespace-pre-wrap">
                                            {item.content}
                                        </p>
                                    </div>
                                </div>

                                {item.tags && item.tags.length > 0 && (
                                    <div className="pt-4 border-t border-white/5">
                                        <div className="flex flex-wrap gap-2">
                                            {item.tags.map((tag) => (
                                                <Badge
                                                    key={tag}
                                                    variant="secondary"
                                                    className="bg-white/5 text-gray-400 hover:bg-white/10 px-3 py-1 font-mono text-xs"
                                                >
                                                    #{tag}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {item.source_url && (
                                    <div className="pt-4">
                                        <a
                                            href={item.source_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-sm text-cyan-500 hover:text-cyan-400 hover:underline transition-colors"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            View Original Source
                                        </a>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
