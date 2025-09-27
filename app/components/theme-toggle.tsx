"use client";

import * as React from "react";
import { useTheme } from "./theme-provider";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const getIcon = () => {
    if (theme === "system") return <span className="text-3xl">💻</span>;
    if (resolvedTheme === "dark") return <span className="text-3xl">🌙</span>;
    return <span className="text-3xl">🌞</span>;
  };

  const getLabel = () => {
    if (theme === "system") return "Sistema";
    if (resolvedTheme === "dark") return "Escuro";
    return "Claro";
  };

  return (
    <div className="relative">
      {/* Botão principal */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          inline-flex items-center justify-center rounded-md p-2 
          text-4xl font-medium ring-offset-background 
          transition-colors focus-visible:outline-none 
          focus-visible:ring-2 focus-visible:ring-ring 
          focus-visible:ring-offset-2 disabled:pointer-events-none 
          disabled:opacity-50 hover:bg-accent hover:text-accent-foreground
          ${className}
        `}
        aria-label="Alternar tema"
      >
        {getIcon()}
        <span className="sr-only">{getLabel()}</span>
      </button>

      {/* Menu dropdown */}
      {isOpen && (
        <>
          {/* Fundo que fecha ao clicar fora */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Caixa de opções */}
          <div
            className="
              absolute right-0 z-50 mt-2 w-40 rounded-md 
              border border-gray-300 dark:border-gray-700 
              bg-white dark:bg-gray-900 
              shadow-lg
            "
          >
            <div className="grid gap-1 p-1">
              <button
                onClick={() => {
                  setTheme("light");
                  setIsOpen(false);
                }}
                className={`
                  flex items-center gap-2 rounded-sm px-2 py-1.5 text-xl
                  hover:bg-gray-200 dark:hover:bg-gray-700
                  ${theme === "light" ? "bg-gray-200 dark:bg-gray-700" : ""}
                `}
              >
                <span className="text-2xl">🌞</span>
                Claro
              </button>

              <button
                onClick={() => {
                  setTheme("dark");
                  setIsOpen(false);
                }}
                className={`
                  flex items-center gap-2 rounded-sm px-2 py-1.5 text-xl
                  hover:bg-gray-200 dark:hover:bg-gray-700
                  ${theme === "dark" ? "bg-gray-200 dark:bg-gray-700" : ""}
                `}
              >
                <span className="text-2xl">🌙</span>
                Escuro
              </button>

              <button
                onClick={() => {
                  setTheme("system");
                  setIsOpen(false);
                }}
                className={`
                  flex items-center gap-2 rounded-sm px-2 py-1.5 text-xl
                  hover:bg-gray-200 dark:hover:bg-gray-700
                  ${theme === "system" ? "bg-gray-200 dark:bg-gray-700" : ""}
                `}
              >
                <span className="text-2xl">💻</span>
                Sistema
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
