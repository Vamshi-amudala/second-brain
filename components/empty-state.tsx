'use client';

import { motion } from 'framer-motion';
import { FileQuestion, Search, Inbox } from 'lucide-react';
import { Button } from './ui/button';

interface EmptyStateProps {
    variant: 'no-results' | 'no-items' | 'error';
    onAction?: () => void;
    actionLabel?: string;
}

export function EmptyState({ variant, onAction, actionLabel }: EmptyStateProps) {
    const config = {
        'no-results': {
            icon: Search,
            title: 'No results found',
            description: 'Try adjusting your search or filters to find what you\'re looking for.',
            actionLabel: actionLabel || 'Clear filters',
        },
        'no-items': {
            icon: Inbox,
            title: 'No knowledge items yet',
            description: 'Start building your second brain by creating your first knowledge item.',
            actionLabel: actionLabel || 'Create your first item',
        },
        'error': {
            icon: FileQuestion,
            title: 'Something went wrong',
            description: 'We couldn\'t load your knowledge items. Please try again.',
            actionLabel: actionLabel || 'Retry',
        },
    };

    const { icon: Icon, title, description, actionLabel: defaultActionLabel } = config[variant];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center justify-center py-16 px-4 text-center"
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="mb-6 rounded-full bg-primary/10 p-6"
            >
                <Icon className="h-12 w-12 text-primary" />
            </motion.div>

            <h3 className="text-2xl font-semibold mb-2">{title}</h3>
            <p className="text-muted-foreground max-w-md mb-6">{description}</p>

            {onAction && (
                <Button onClick={onAction} size="lg">
                    {actionLabel || defaultActionLabel}
                </Button>
            )}
        </motion.div>
    );
}
