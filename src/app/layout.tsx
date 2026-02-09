import { ReactNode } from "react";
import type { Metadata } from "next";

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";

export const icons = {
  icon: [
    { url: "/favicon1.ico", media: "(prefers-color-scheme: light)" },
    { url: "/favicon.ico", media: "(prefers-color-scheme: dark)" },
  ],
};

export const metadata: Metadata = {
  title: "Cash Flow Analyzer",
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: Readonly<RootLayoutProps>) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="root">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
};
export default RootLayout;
