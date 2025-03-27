'use client'
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
    <nav className="w-full bg-black shadow-md fixed top-0 z-50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold">
            Zero Gravity 2025
          </div>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-300">
              Home
            </Link>
            <Link href="/problems" className="text-gray-300 hover:text-white transition-colors duration-300">
              Problem Statements
            </Link>
            <Link href="/schedule" className="text-gray-300 hover:text-white transition-colors duration-300">
              Check The Schedule
            </Link>
            <Link href="/evaluation" className="text-sm font-medium hover:underline underline-offset-4">
              Evaluation Criteria
            </Link>
            <Link href="/faq" className="text-sm font-medium hover:underline underline-offset-4">
              FAQ
            </Link>
            <Link href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300">
              Contact
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 focus:outline-none">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          <div className="hidden md:flex gap-4">
            <Link href="https://lu.ma/event/evt-UMPGVObGEy1gPwZ">
              <Button>Register</Button>
            </Link>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black py-4">
            <div className="flex flex-col items-center space-y-4">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link href="#about" className="text-gray-300 hover:text-white transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link href="#timeline" className="text-gray-300 hover:text-white transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
                Timeline
              </Link>
              <Link href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
    )
}

export default Navbar
