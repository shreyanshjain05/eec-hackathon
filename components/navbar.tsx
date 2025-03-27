"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-gray-100 shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex items-center space-x-4">
            <div className="relative h-20 w-25">
              <Image src="/zeroGravity.png" alt="Zero Gravity Logo" fill className="object-contain" sizes="128px" />
            </div>
            <div className="relative h-12 w-32">
              <Image src="/IIE Logo.png" alt="IIE Logo" fill className="object-contain" sizes="128px" />
            </div>
            <div className="relative h-20 w-35">
              <Image src="/eec-logo.jpeg" alt="EEC Logo" fill className="object-contain" sizes="128px" />
            </div>
          </div>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <Link href="/problems" className="text-gray-700 hover:text-black transition-colors duration-300">
            Problems
          </Link>
          <Link href="/schedule" className="text-gray-700 hover:text-black transition-colors duration-300">
            Check The Schedule
          </Link>
          <Link href="/evaluation" className="text-gray-700 hover:text-black transition-colors duration-300">
            Evaluation Criteria
          </Link>
          <Link href="/faq" className="text-gray-700 hover:text-black transition-colors duration-300">
            FAQ
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-black transition-colors duration-300">
            Contact
          </Link>
          <Link href="https://lu.ma/t1vip5g5">
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-800 active:scale-95 transition-all duration-300 cursor-pointer">
              Register
            </Button>
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 focus:outline-none">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 shadow-md">
          <div className="flex flex-col items-center space-y-4">
            <Link
              href="/problems"
              className="text-gray-700 hover:text-black transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Problems
            </Link>
            <Link
              href="/schedule"
              className="text-gray-700 hover:text-black transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Check The Schedule
            </Link>
            <Link
              href="/evaluation"
              className="text-gray-700 hover:text-black transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Evaluation Criteria
            </Link>
            <Link
              href="/faq"
              className="text-gray-700 hover:text-black transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-black transition-colors duration-300"
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
  )
}

export default Navbar

