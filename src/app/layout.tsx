import { ReactNode } from "react";
import type { Metadata } from "next";

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cash Flow Analyzer",
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: Readonly<RootLayoutProps>) => {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <div>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
};
export default RootLayout;
