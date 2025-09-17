// app/components/ui/card.tsx
import React from "react";

type CardProps = {
  children?: React.ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return <div className={`bg-white rounded shadow ${className}`}>{children}</div>;
}

export function CardHeader({ children, className = "" }: CardProps) {
  return <div className={`p-4 border-b ${className}`}>{children}</div>;
}

export function CardTitle({ children }: { children?: React.ReactNode }) {
  return <h3 className="text-lg font-semibold">{children}</h3>;
}

export function CardDescription({ children }: { children?: React.ReactNode }) {
  return <p className="text-sm text-gray-600">{children}</p>;
}

export function CardContent({ children, className = "" }: CardProps) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}

export function CardFooter({ children, className = "" }: CardProps) {
  return <div className={`p-4 border-t ${className}`}>{children}</div>;
}
