"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Navigation() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <nav className="border-b bg-background">
        <div className="container mx-auto flex h-16 items-center" />
      </nav>
    );
  }

  return (
    <nav className="border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-lg font-bold text-foreground">
          📚 BookShelf
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="/dashboard"
            className="text-sm font-medium text-foreground transition-colors hover:text-foreground/70"
          >
            Dashboard
          </Link>

          <Link
            href="/library"
            className="text-sm font-medium text-foreground transition-colors hover:text-foreground/70"
          >
            Biblioteca
          </Link>

          <Link
            href="/adicionar"
            className="text-sm font-medium text-foreground transition-colors hover:text-foreground/70"
          >
            Adicionar Livro
          </Link>
        </div>

        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-80 transition-opacity"
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>
    </nav>
  );
}
