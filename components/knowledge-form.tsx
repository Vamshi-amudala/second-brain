'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { createKnowledgeItem } from '@/app/actions/knowledge';
import { Loader2, Sparkles } from 'lucide-react';
import { toast } from 'sonner';

export function KnowledgeForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        type: 'note' as 'note' | 'link' | 'insight',
        sourceUrl: '',
        tags: '',
    });
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.title.trim()) {
            newErrors.title = 'Title is required';
        }

        if (!formData.content.trim()) {
            newErrors.content = 'Content is required';
        }

        if (formData.type === 'link' && !formData.sourceUrl.trim()) {
            newErrors.sourceUrl = 'Source URL is required for links';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            const tags = formData.tags
                ? formData.tags.split(',').map((tag: string) => tag.trim()).filter((tag: string) => tag.length > 0)
                : undefined;

            const result = await createKnowledgeItem({
                title: formData.title,
                content: formData.content,
                type: formData.type,
                source_url: formData.sourceUrl || undefined,
                tags,
            });

            if (result.success) {
                setFormData({
                    title: '',
                    content: '',
                    type: 'note',
                    sourceUrl: '',
                    tags: '',
                });
                setErrors({});

                toast.success('Knowledge item created successfully!');
            } else {
                toast.error(`Failed to create item: ${result.error}`);
            }
        } catch (error) {
            toast.error('An unexpected error occurred');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="title" className="text-sm font-medium">
                            Title
                        </Label>
                        <Input
                            id="title"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            placeholder="Enter a descriptive title..."
                            className={errors.title ? 'border-red-500' : ''}
                        />
                        {errors.title && (
                            <p className="text-sm text-red-500">{errors.title}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="content" className="text-sm font-medium">
                            Content
                        </Label>
                        <Textarea
                            id="content"
                            value={formData.content}
                            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                            placeholder="Write your thoughts, insights, or paste a link..."
                            rows={6}
                            className={errors.content ? 'border-red-500' : ''}
                        />
                        {errors.content && (
                            <p className="text-sm text-red-500">{errors.content}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="type" className="text-sm font-medium">
                            Type
                        </Label>
                        <select
                            id="type"
                            value={formData.type}
                            onChange={(e) => setFormData({ ...formData, type: e.target.value as any })}
                            className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                        >
                            <option value="note">Note</option>
                            <option value="link">Link</option>
                            <option value="insight">Insight</option>
                        </select>
                    </div>

                    {formData.type === 'link' && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="space-y-2"
                        >
                            <Label htmlFor="sourceUrl" className="text-sm font-medium">
                                Source URL
                            </Label>
                            <Input
                                id="sourceUrl"
                                type="url"
                                value={formData.sourceUrl}
                                onChange={(e) => setFormData({ ...formData, sourceUrl: e.target.value })}
                                placeholder="https://example.com"
                                className={errors.sourceUrl ? 'border-red-500' : ''}
                            />
                            {errors.sourceUrl && (
                                <p className="text-sm text-red-500">{errors.sourceUrl}</p>
                            )}
                        </motion.div>
                    )}

                    <div className="space-y-2">
                        <Label htmlFor="tags" className="text-sm font-medium">
                            Tags (optional)
                        </Label>
                        <Input
                            id="tags"
                            value={formData.tags}
                            onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                            placeholder="react, javascript, tutorial (comma-separated)"
                        />
                        <p className="text-xs text-muted-foreground">
                            Leave empty to auto-generate tags from content
                        </p>
                    </div>

                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-primary hover:bg-primary/90 transition-all duration-300"
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Creating...
                            </>
                        ) : (
                            <>
                                <Sparkles className="mr-2 h-4 w-4" />
                                Create Knowledge Item
                            </>
                        )}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                        AI will automatically generate a summary and suggest tags if not provided
                    </p>
                </form>
            </Card>
        </motion.div>
    );
}
