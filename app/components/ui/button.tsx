// app/components/ui/button.tsx
import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "outline" | "destructive" | string;
  children?: React.ReactNode;
};

export function Button({ children, variant, className = "", ...props }: ButtonProps) {
  const base = "px-3 py-1 rounded text-sm";
  const variants: Record<string, string> = {
    outline: "border",
    destructive: "bg-red-600 text-white",
  };
  return (
    <button className={`${base} ${variants[variant ?? ""] || "bg-gray-100"} ${className}`} {...props}>
      {children}
    </button>
  );
}
