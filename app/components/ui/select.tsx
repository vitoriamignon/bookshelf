
import React from "react";

type SelectProps = {
  children?: React.ReactNode;
  onValueChange?: (value: string) => void;
  defaultValue?: string;
};

export function Select({ children }: SelectProps) {
  return <div>{children}</div>;
}

export function SelectTrigger({ children, className = "" }: { children?: React.ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}

export function SelectValue({ placeholder }: { placeholder?: string }) {
  return <span>{placeholder}</span>;
}

export function SelectContent({ children }: { children?: React.ReactNode }) {
  return <div>{children}</div>;
}

export function SelectItem({ children, value }: { children?: React.ReactNode; value?: string }) {
  return <div data-value={value}>{children}</div>;
}
