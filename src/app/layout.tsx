import { ReactNode } from "react";
import type { Metadata } from "next";

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DarkModeProvider } from "@/context/DarkModeContext";

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
    <DarkModeProvider>
      <html lang="en">
        <body className="min-h-screen">
          <div>
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </body>
      </html>
    </DarkModeProvider>
  );
};
export default RootLayout;
