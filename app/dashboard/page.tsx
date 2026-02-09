'use client';

import { KnowledgeForm } from '@/components/knowledge-form';
import { KnowledgeDashboard } from '@/components/knowledge-dashboard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function DashboardPage() {
    return (
        <div className="min-h-screen p-4 sm:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto space-y-6 md:space-y-8">
                <div className="space-y-2">
                    <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                        Knowledge Dashboard
                    </h1>
                    <p className="text-muted-foreground">
                        Capture, organize, and explore your knowledge with AI assistance
                    </p>
                </div>

                <Tabs defaultValue="browse" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 max-w-xs sm:max-w-md">
                        <TabsTrigger value="browse">Browse</TabsTrigger>
                        <TabsTrigger value="create">Create New</TabsTrigger>
                    </TabsList>

                    <TabsContent value="browse" className="mt-8">
                        <KnowledgeDashboard />
                    </TabsContent>

                    <TabsContent value="create" className="mt-8">
                        <div className="max-w-2xl mx-auto">
                            <KnowledgeForm />
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
