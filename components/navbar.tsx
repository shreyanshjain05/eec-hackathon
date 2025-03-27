"use client"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <nav className="w-full bg-white shadow-md fixed top-0 z-50 backdrop-blur-sm">
        <div className="container mx-auto px-8 py-4 flex items-center justify-between ">
          <Link href="/" className="flex items-center ">
            {/* Replace these placeholder images with your actual logos */}
            <div className="relative h-18 w-32">
              <Image
                src="/zeroGravity.png"
                alt="Logo 1"
               
                className="object-contain"
                height={24}
                width={104}
                // sizes="196px"
              />
            </div>
            <div className="relative h-16 w-32">
              <Image
                src="/eec_logo.png?height=40&width=96"
                alt="Logo 2"
                fill
                className="object-contain"
                sizes="156px"
              />
            </div>
            <div className="relative h-16 w-32">
              <Image
                src="/IIE Logo.png?height=40&width=96"
                alt="Logo 3"
                fill
                className="object-contain"
                sizes="156px"
              />
            </div>
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="/problems" className="text-gray-900 hover:text-black transition-colors duration-300">
              Problem Statements
            </Link>
            <Link href="/schedule" className="text-gray-900 hover:text-black transition-colors duration-300">
              Check The Schedule
            </Link>
            <Link href="/evaluation" className="text-sm font-medium hover:underline underline-offset-4">
              Evaluation Criteria
            </Link>
            <Link href="/faq" className="text-sm font-medium hover:underline underline-offset-4">
              FAQ
            </Link>
            <Link href="/contact" className="text-gray-900 hover:text-black transition-colors duration-300">
              Contact
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 focus:outline-none">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          <div className="hidden md:flex gap-4 px-8">
            <Link href="https://lu.ma/event/evt-UMPGVObGEy1gPwZ">
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-800 active:scale-95 transition-all duration-300 cursor-pointer">
                Register
              </Button>
            </Link>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black py-4">
            <div className="flex flex-col items-center space-y-4">
              <Link
                href="/problems"
                className="text-gray-300 hover:text-white transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Problems
              </Link>
              <Link
                href="/schedule"
                className="text-gray-300 hover:text-white transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Check The Schedule
              </Link>
              <Link
                href="/evaluation"
                className="text-gray-300 hover:text-white transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Evaluation Criteria
              </Link>
              <Link
                href="/faq"
                className="text-gray-300 hover:text-white transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="text-gray-300 hover:text-white transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link href="https://lu.ma/event/evt-UMPGVObGEy1gPwZ">
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-800 active:scale-95 transition-all duration-300 cursor-pointer">
                  Register
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}

export default Navbar

