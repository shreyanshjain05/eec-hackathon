import type React from "react"
import { Inter } from "next/font/google"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
// import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
// import { ThemeProvider } from "next-themes"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "EEC Hackathon 2025",
  description: "A 48-hour coding marathon at Easwari Engineering College",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ThemeProvider attribute="class" defaultTheme="light"> */}
          <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                  <span className="text-xl font-bold">ZERO GRAVITY HACKATHON</span>
                </Link>
                <nav className="hidden md:flex gap-6">
                  <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
                    Home
                  </Link>
                  <Link href="/problems" className="text-sm font-medium hover:underline underline-offset-4">
                    Problem Statements
                  </Link>
                  <Link href="/schedule" className="text-sm font-medium hover:underline underline-offset-4">
                    Schedule
                  </Link>
                  <Link href="/evaluation" className="text-sm font-medium hover:underline underline-offset-4">
                    Evaluation Criteria
                  </Link>
                  <Link href="/faq" className="text-sm font-medium hover:underline underline-offset-4">
                    FAQ
                  </Link>
                  <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
                    Contact
                  </Link>
                </nav>
                <div className="hidden md:flex gap-4">
                  <Link href="/register">
                    <Button>Register</Button>
                  </Link>
                </div>
                <div className="md:hidden">
                  <Button variant="ghost" size="icon" className="mobile-menu-button">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </div>
              </div>
            </header>
            <main className="flex-1">{children}</main>
            <footer className="border-t py-6 md:py-0">
              <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                  © 2025 Easwari Engineering College. All rights reserved.
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
  )
}

