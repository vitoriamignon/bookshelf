"use client";

import * as React from "react";
import { useTheme } from "./theme-provider";

interface ThemeToggleProps {
  className?: string;
}

const SunIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.5 0V2M12.5 2.5L11 4M15 7.5H13M12.5 12.5L11 11M7.5 15V13M2.5 12.5L4 11M0 7.5H2M2.5 2.5L4 4M7.5 11C9.433 11 11 9.433 11 7.5C11 5.567 9.433 4 7.5 4C5.567 4 4 5.567 4 7.5C4 9.433 5.567 11 7.5 11Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MoonIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.89998 0.499976C2.89998 0.499976 2.19998 1.44998 2.19998 4.04998C2.19998 6.64998 2.89998 7.59998 2.89998 7.59998C2.89998 7.59998 3.49998 6.79998 5.99998 6.79998C8.49998 6.79998 9.19998 7.39998 9.19998 7.39998C9.19998 7.39998 10.5 6.39998 10.5 4.04998C10.5 1.69998 9.19998 0.499976 9.19998 0.499976C9.19998 0.499976 9.79998 1.99998 7.99998 1.99998C6.19998 1.99998 2.89998 0.499976 2.89998 0.499976ZM5.89998 3.49998C7.39998 3.49998 8.69998 4.59998 8.69998 5.89998C8.69998 7.19998 7.39998 8.39998 5.89998 8.39998C4.39998 8.39998 3.19998 7.19998 3.19998 5.89998C3.19998 4.59998 4.39998 3.49998 5.89998 3.49998Z"
      fill="currentColor"
    />
  </svg>
);

const MonitorIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 3.25C1 2.55964 1.55964 2 2.25 2H12.75C13.4404 2 14 2.55964 14 3.25V9.75C14 10.4404 13.4404 11 12.75 11H2.25C1.55964 11 1 10.4404 1 9.75V3.25ZM2.25 3C2.11193 3 2 3.11193 2 3.25V9.75C2 9.88807 2.11193 10 2.25 10H12.75C12.8881 10 13 9.88807 13 9.75V3.25C13 3.11193 12.8881 3 12.75 3H2.25ZM5.5 12H9.5V13H5.5V12Z"
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
    />
  </svg>
);

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
    if (theme === "system") return <MonitorIcon />;
    if (resolvedTheme === "dark") return <MoonIcon />;
    return <SunIcon />;
  };

  const getLabel = () => {
    if (theme === "system") return "Sistema";
    if (resolvedTheme === "dark") return "Escuro";
    return "Claro";
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          inline-flex items-center justify-center rounded-md p-2 
          text-sm font-medium ring-offset-background 
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
      
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 z-50 mt-2 w-40 rounded-md border bg-popover p-1 text-popover-foreground shadow-md">
            <div className="grid gap-1">
              <button
                onClick={() => {
                  setTheme("light");
                  setIsOpen(false);
                }}
                className={`
                  flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm
                  hover:bg-accent hover:text-accent-foreground
                  ${theme === "light" ? "bg-accent" : ""}
                `}
              >
                <SunIcon />
                Claro
              </button>
              <button
                onClick={() => {
                  setTheme("dark");
                  setIsOpen(false);
                }}
                className={`
                  flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm
                  hover:bg-accent hover:text-accent-foreground
                  ${theme === "dark" ? "bg-accent" : ""}
                `}
              >
                <MoonIcon />
                Escuro
              </button>
              <button
                onClick={() => {
                  setTheme("system");
                  setIsOpen(false);
                }}
                className={`
                  flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm
                  hover:bg-accent hover:text-accent-foreground
                  ${theme === "system" ? "bg-accent" : ""}
                `}
              >
                <MonitorIcon />
                Sistema
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}