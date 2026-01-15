"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
// Use the correct type for the props based on the library's definition
import { type ThemeProviderProps } from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps & { children: React.ReactNode }) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}