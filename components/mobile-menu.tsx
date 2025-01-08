"use client";

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface NavigationItem {
    name: string;
    href: string;
    icon: LucideIcon;
}

interface MobileMenuProps {
    navigationItems: NavigationItem[];
}

export default function MobileMenu({ navigationItems }: MobileMenuProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label={isMobileMenuOpen ? "关闭菜单" : "打开菜单"}
            >
                {isMobileMenuOpen ? (
                    <IoCloseOutline className="h-5 w-5" />
                ) : (
                    <IoMenuOutline className="h-5 w-5" />
                )}
            </button>

            {/* Mobile menu portal */}
            {mounted && isMobileMenuOpen && createPortal(
                <div 
                    className="md:hidden fixed inset-0 z-50"
                    role="dialog"
                    aria-modal="true"
                >
                    <div 
                        className={cn(
                            "fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300",
                            isMobileMenuOpen ? "opacity-100" : "opacity-0"
                        )}
                        onClick={() => setIsMobileMenuOpen(false)}
                        aria-hidden="true"
                    />
                    <div 
                        className={cn(
                            "fixed inset-y-0 right-0 w-full max-w-sm bg-background shadow-xl transition-transform duration-300 ease-out",
                            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                        )}
                    >
                        <div className="flex h-16 items-center justify-between px-6 border-b">
                            <span className="text-lg font-semibold">菜单</span>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                                aria-label="关闭菜单"
                            >
                                <IoCloseOutline className="h-5 w-5" />
                            </button>
                        </div>
                        <nav className="relative h-[calc(100vh-4rem)] overflow-y-auto px-2 py-4">
                            <div className="space-y-1">
                                {navigationItems.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className={cn(
                                                'flex items-center gap-3 px-4 py-3 text-base rounded-md transition-colors',
                                                pathname === item.href
                                                    ? 'bg-primary/10 text-primary font-medium'
                                                    : 'hover:bg-primary/5'
                                            )}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            <Icon className="h-5 w-5" />
                                            <span>{item.name}</span>
                                        </Link>
                                    );
                                })}
                            </div>
                        </nav>
                    </div>
                </div>,
                document.body
            )}
        </>
    );
} 