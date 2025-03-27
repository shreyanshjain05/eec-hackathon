import type React from "react";
import { Inter } from "next/font/google";
import Link from "next/link";
import Navbar from "@/components/navbar";

// import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
// import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EEC Hackathon 2025",
  description: "A 48-hour coding marathon at Easwari Engineering College",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ThemeProvider attribute="class" defaultTheme="light"> */}
        <div className="flex min-h-screen flex-col">
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
              <Navbar />
            </div>
            
          </header>
        
          <main className="flex-1">{children}</main>
          <footer className="border-t py-6 md:py-0">
            <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-col">
              <p className="text-center text-sm leading-loose text-muted-foreground">
                © 2025 Easwari Engineering College. All rights reserved. Made by FabLab.
              </p>
              <div className="flex gap-4">
                <Link href="/terms" className="text-sm text-muted-foreground hover:underline underline-offset-4">
                  Terms
                </Link>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:underline underline-offset-4">
                  Privacy
                </Link>
              </div>
            </div>
          </footer>
        </div>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}