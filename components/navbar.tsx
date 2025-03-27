"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { cn } from "@/lib/utils"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (isMenuOpen && !target.closest("nav")) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isMenuOpen])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isMenuOpen])

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-white shadow-md" : "bg-gray-100",
      )}
    >
      <div className="container mx-auto px-2 sm:px-4 py-2 flex items-center justify-between">
        {/* Mobile menu button - moved to the left */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 focus:outline-none p-2 rounded-md hover:bg-gray-200 transition-colors duration-300"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Logo section */}
        <Link href="/" className="flex items-center overflow-hidden">
          <div className="flex items-center space-x-0.5 xs:space-x-1 sm:space-x-2 md:space-x-3">
            <div className="relative h-6 w-8 xs:h-7 xs:w-10 sm:h-8 sm:w-12 md:h-10 md:w-16">
              <Image
                src="/zeroGravity.png"
                alt="Zero Gravity Logo"
                fill
                className="object-contain"
                sizes="(max-width: 480px) 48px, (max-width: 640px) 56px, (max-width: 768px) 64px, 80px"
                priority
              />
            </div>
            <div className="relative h-6 w-8 xs:h-7 xs:w-10 sm:h-8 sm:w-12 md:h-10 md:w-16">
              <Image
                src="/IIE Logo.png"
                alt="IIE Logo"
                fill
                className="object-contain"
                sizes="(max-width: 480px) 40px, (max-width: 640px) 48px, (max-width: 768px) 56px, 80px"
                priority
              />
            </div>
            <div className="relative h-6 w-8 xs:h-7 xs:w-10 sm:h-8 sm:w-12 md:h-10 md:w-16">
              <Image
                src="/eec-logo.jpeg"
                alt="EEC Logo"
                fill
                className="object-contain"
                sizes="(max-width: 480px) 48px, (max-width: 640px) 56px, (max-width: 768px) 64px, 80px"
                priority
              />
            </div>
          </div>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          <Link
            href="/problems"
            className="text-gray-700 hover:text-black transition-colors duration-300 text-sm font-medium"
          >
            Problems
          </Link>
          <Link
            href="/schedule"
            className="text-gray-700 hover:text-black transition-colors duration-300 text-sm font-medium"
          >
            Check The Schedule
          </Link>
          <Link
            href="/evaluation"
            className="text-gray-700 hover:text-black transition-colors duration-300 text-sm font-medium"
          >
            Evaluation Criteria
          </Link>
          <Link
            href="/faq"
            className="text-gray-700 hover:text-black transition-colors duration-300 text-sm font-medium"
          >
            FAQ
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-black transition-colors duration-300 text-sm font-medium"
          >
            Contact
          </Link>
          <Link href="https://lu.ma/t1vip5g5">
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-800 active:scale-95 transition-all duration-300 cursor-pointer text-sm">
              Register
            </Button>
          </Link>
        </div>

        {/* Tablet navigation - simplified version */}
        <div className="hidden md:flex lg:hidden items-center">
          <div className="relative group mr-4">
            <button className="text-gray-700 hover:text-black transition-colors duration-300 text-sm font-medium flex items-center">
              Menu
            </button>
            <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="py-2 px-4 flex flex-col space-y-2">
                <Link
                  href="/problems"
                  className="text-gray-700 hover:text-black transition-colors duration-300 text-sm"
                >
                  Problems
                </Link>
                <Link
                  href="/schedule"
                  className="text-gray-700 hover:text-black transition-colors duration-300 text-sm"
                >
                  Check The Schedule
                </Link>
                <Link
                  href="/evaluation"
                  className="text-gray-700 hover:text-black transition-colors duration-300 text-sm"
                >
                  Evaluation Criteria
                </Link>
                <Link href="/faq" className="text-gray-700 hover:text-black transition-colors duration-300 text-sm">
                  FAQ
                </Link>
                <Link href="/contact" className="text-gray-700 hover:text-black transition-colors duration-300 text-sm">
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <Link href="https://lu.ma/t1vip5g5">
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-800 active:scale-95 transition-all duration-300 cursor-pointer text-sm">
              Register
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
        style={{ top: "60px" }}
      >
        <div className="flex flex-col items-center space-y-6 pt-8 pb-12 px-4 h-full overflow-y-auto bg-white">
          <Link
            href="/problems"
            className="text-gray-700 hover:text-black transition-colors duration-300 text-lg font-medium w-full text-center py-3 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Problems
          </Link>
          <Link
            href="/schedule"
            className="text-gray-700 hover:text-black transition-colors duration-300 text-lg font-medium w-full text-center py-3 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Check The Schedule
          </Link>
          <Link
            href="/evaluation"
            className="text-gray-700 hover:text-black transition-colors duration-300 text-lg font-medium w-full text-center py-3 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Evaluation Criteria
          </Link>
          <Link
            href="/faq"
            className="text-gray-700 hover:text-black transition-colors duration-300 text-lg font-medium w-full text-center py-3 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            FAQ
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-black transition-colors duration-300 text-lg font-medium w-full text-center py-3 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <Link href="https://lu.ma/t1vip5g5" onClick={() => setIsMenuOpen(false)} className="w-full px-4 pt-4">
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white w-full py-4 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-800 active:scale-95 transition-all duration-300 cursor-pointer text-lg">
              Register
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

