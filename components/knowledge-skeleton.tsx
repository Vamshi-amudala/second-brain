'use client';

import { motion } from 'framer-motion';
import { Skeleton } from '@/components/ui/skeleton';

export function KnowledgeSkeleton() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm space-y-4 overflow-hidden relative"
        >
            {/* Shimmer Effect */}
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

            <div className="flex justify-between items-start">
                <Skeleton className="h-6 w-3/4 bg-white/10" />
                <Skeleton className="h-5 w-16 bg-white/10 rounded-full" />
            </div>

            <div className="space-y-2">
                <Skeleton className="h-4 w-full bg-white/10" />
                <Skeleton className="h-4 w-5/6 bg-white/10" />
                <Skeleton className="h-4 w-4/6 bg-white/10" />
            </div>

            <div className="flex gap-2 pt-2">
                <Skeleton className="h-5 w-12 bg-white/10 rounded-full" />
                <Skeleton className="h-5 w-16 bg-white/10 rounded-full" />
            </div>

            <div className="pt-2">
                <Skeleton className="h-3 w-24 bg-white/10" />
            </div>
        </motion.div>
    );
}
