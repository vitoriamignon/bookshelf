"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// O tipo ThemeProviderProps é exportado diretamente pela biblioteca agora
import type { ThemeProviderProps } from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}