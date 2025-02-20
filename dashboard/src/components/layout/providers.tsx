"use client";
import React from "react";
import ThemeProvider from "@/components/layout/theme-toggle/theme-provider";
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        {children}
      </ThemeProvider>
    </>
  );
}
