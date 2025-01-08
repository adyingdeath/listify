import { Home, List } from 'lucide-react';
import { LuGithub } from "react-icons/lu";
import Link from 'next/link';
import { cn } from '@/lib/utils';
import MobileMenu from '@/components/mobile-menu';
import ThemeToggle from '@/components/theme-toggle';

export const navigationItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Lists', href: '/lists', icon: List },
];

export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <div className="min-h-screen transition-colors duration-300 bg-white text-gray-900 dark:bg-zinc-900 dark:text-white">
            {/* Navigation */}
            <header className={cn(
                'sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'
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
                                            'hover:bg-primary/5'
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
                        <ThemeToggle />
                        <a
                            href="https://github.com/adyingdeath/listify"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                            <LuGithub className="h-5 w-5" />
                        </a>
                        <MobileMenu />
                    </div>
                </nav>
            </header>

            {/* Main content */}
            <main className="container mx-auto px-4 pb-16">
                <div className="animate-fade-in">
                    <div className="flex flex-col items-center pt-4">
                        <div className="flex flex-col gap-4 box-border max-md:px-8 max-md:w-full md:w-[45em]">
                            {children}
                        </div>
                    </div>
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