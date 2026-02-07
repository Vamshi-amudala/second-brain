'use client';

import Link from 'next/link';
import { Brain, Github, Twitter } from 'lucide-react';

export function Footer() {
    return (
        <footer className="border-t border-border/40 bg-background/95 backdrop-blur">
            <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    {/* Branding */}
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 group mb-4">
                            <Brain className="h-6 w-6 text-primary" />
                            <span className="text-lg font-bold">Second Brain</span>
                        </Link>
                        <p className="text-sm text-muted-foreground max-w-md">
                            An intelligent knowledge management system powered by AI.
                            Capture, organize, and explore your knowledge with automatic
                            summarization and smart tagging.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold mb-4">Product</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/dashboard" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link href="/api-docs" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    API Reference
                                </Link>
                            </li>
                            <li>
                                <Link href="/docs" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    Documentation
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-sm font-semibold mb-4">Resources</h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="https://github.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
                                >
                                    <Github className="h-4 w-4" />
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <Link href="/docs#architecture" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    Architecture
                                </Link>
                            </li>
                            <li>
                                <Link href="/docs#setup" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    Setup Guide
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 border-t border-border/40 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Second Brain. Built for Altibbe Assignment.
                    </p>
                    <div className="flex gap-4">
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            <Github className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
