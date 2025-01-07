"use client";

import { useState, useEffect } from 'react';
import { Menu, X, Github, Moon, Sun, Home, List } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function MainLayout({
    children,
    title,
}: Readonly<{
    children: React.ReactNode;
    title: string;
}>) {
    const [isLoading, setIsLoading] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        // Simulate loading state
        const timer = setTimeout(() => setIsLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            // 当滚动超过header高度（64px）时，设置isScrolled为true
            setIsScrolled(window.scrollY > 64);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navigationItems = [
        { name: '首页', href: '/', icon: Home },
        { name: '列表', href: '/lists', icon: List },
    ];

    if (isLoading) {
        return (
            <div className="flex h-screen w-full items-center justify-center">
                <div className="h-16 w-16 animate-spin rounded-full border-4 border-primary border-t-transparent" />
            </div>
        );
    }

    return (
        <div className={cn(
            'min-h-screen transition-colors duration-300',
            isDarkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'
        )}>
            {/* Navigation */}
            <header className={cn(
                'w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-200',
                isScrolled ? 'fixed top-0 z-50 animate-slide-down' : 'relative'
            )}>
                <nav className="container mx-auto flex h-16 items-center justify-between px-4">
                    <div className="flex items-center gap-6">
                        <Link href="/" className="text-2xl font-bold">
                            Listify
                        </Link>
                        <div className="hidden md:flex items-center space-x-4">
                            {navigationItems.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={cn(
                                            'flex items-center gap-2 px-3 py-2 rounded-md transition-colors',
                                            pathname === item.href
                                                ? 'bg-primary/10 text-primary'
                                                : 'hover:bg-primary/5'
                                        )}
                                    >
                                        <Icon className="h-4 w-4" />
                                        <span>{item.name}</span>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsDarkMode(!isDarkMode)}
                            className="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                            {isDarkMode ? (
                                <Sun className="h-5 w-5" />
                            ) : (
                                <Moon className="h-5 w-5" />
                            )}
                        </button>
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                            <Github className="h-5 w-5" />
                        </a>
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                            {isMobileMenuOpen ? (
                                <X className="h-5 w-5" />
                            ) : (
                                <Menu className="h-5 w-5" />
                            )}
                        </button>
                    </div>
                </nav>

                {/* Mobile menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden border-t">
                        <div className="container mx-auto px-4 py-2 space-y-1">
                            {navigationItems.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={cn(
                                            'flex items-center gap-2 px-3 py-2 rounded-md transition-colors',
                                            pathname === item.href
                                                ? 'bg-primary/10 text-primary'
                                                : 'hover:bg-primary/5'
                                        )}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <Icon className="h-4 w-4" />
                                        <span>{item.name}</span>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                )}
            </header>

            {/* Main content */}
            <main className="container mx-auto px-4 pb-16">
                <h1 className="text-3xl font-bold mb-8">{title}</h1>
                <div className="animate-fade-in">
                    {children}
                </div>
            </main>

            {/* Footer */}
            <footer className="border-t">
                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-sm text-gray-500">
                            © {new Date().getFullYear()} Listify. All rights reserved.
                        </div>
                        <div className="flex items-center gap-4">
                            <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-gray-100">
                                隐私政策
                            </Link>
                            <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-gray-100">
                                使用条款
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}