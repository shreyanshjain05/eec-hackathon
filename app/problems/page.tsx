"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ProblemsPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Add parallax effect to the magical particles
    interface MagicParticle extends HTMLElement {
      getAttribute(name: string): string | null;
      style: CSSStyleDeclaration;
    }

    const handleMouseMove = (e: MouseEvent): void => {
      const particles: NodeListOf<MagicParticle> = document.querySelectorAll(".magic-particle")
      particles.forEach((particle: MagicParticle) => {
      const speed: string | null = particle.getAttribute("data-speed")
      const x: number = (window.innerWidth - e.pageX * Number(speed)) / 100
      const y: number = (window.innerHeight - e.pageY * Number(speed)) / 100
      particle.style.transform = `translateX(${x}px) translateY(${y}px)`
      })
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Magical floating particles */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {mounted &&
          Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="magic-particle absolute rounded-full opacity-30"
              data-speed={Math.random() * 5 + 1}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 50 + 10}px`,
                height: `${Math.random() * 50 + 10}px`,
                background: `hsl(${Math.random() * 60 + 210}, 70%, 60%)`,
                filter: "blur(8px)",
                animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite alternate`,
              }}
            />
          ))}
      </div>

      <section className="w-full flex items-center justify-center py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-indigo-700 text-white relative overflow-hidden">
        {/* Animated tech grid background */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), 
                               linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
              animation: "backgroundMove 20s linear infinite",
            }}
          ></div>
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.8) 0%, transparent 8%)`,
              backgroundSize: "60px 60px",
              animation: "pulse 4s ease-in-out infinite",
            }}
          ></div>
        </div>

        <div className="container flex items-center justify-center px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2 animate-fade-down">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium text-white mb-4 border border-white/20">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                Explore & Innovate
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Problem Statements
              </h1>
              <p className="max-w-[900px] text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Choose from a variety of challenging problem statements across different domains
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex items-center justify-center py-12 md:py-24 lg:py-32 bg-white relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-sm font-medium text-blue-700 mb-4">
                Trusted Partners
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">
                Problem Statement Sources
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our problem statements are sourced from industry-leading organizations and global hackathons
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="source-card group relative flex flex-col items-center justify-center h-32 rounded-xl overflow-hidden transition-all duration-500 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-90 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-white border border-gray-200 group-hover:scale-95 transition-transform duration-500"></div>
              <h3 className="text-lg font-bold text-center z-10 group-hover:text-black transition-colors duration-300 group-hover:scale-110 transform">
                Smart India Hackathon (SIH)
              </h3>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>

            <div className="source-card group relative flex flex-col items-center justify-center h-32 rounded-xl overflow-hidden transition-all duration-500 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-90 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-white border border-gray-200 group-hover:scale-95 transition-transform duration-500"></div>
              <h3 className="text-lg font-bold text-center z-10 group-hover:text-black transition-colors duration-300 group-hover:scale-110 transform">
                NASSCOM Product Conclave
              </h3>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>

            <div className="source-card group relative flex flex-col items-center justify-center h-32 rounded-xl overflow-hidden transition-all duration-500 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-600 opacity-0 group-hover:opacity-90 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-white border border-gray-200 group-hover:scale-95 transition-transform duration-500"></div>
              <h3 className="text-lg font-bold text-center z-10 group-hover:text-black transition-colors duration-300 group-hover:scale-110 transform">
                HackerRank India Challenges
              </h3>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>

            <div className="source-card group relative flex flex-col items-center justify-center h-32 rounded-xl overflow-hidden transition-all duration-500 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-red-600 opacity-0 group-hover:opacity-90 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-white border border-gray-200 group-hover:scale-95 transition-transform duration-500"></div>
              <h3 className="text-lg font-bold text-center z-10 group-hover:text-black transition-colors duration-300 group-hover:scale-110 transform">
                IndiaHacks
              </h3>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>

            <div className="source-card group relative flex flex-col items-center justify-center h-32 rounded-xl overflow-hidden transition-all duration-500 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-600 opacity-0 group-hover:opacity-90 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-white border border-gray-200 group-hover:scale-95 transition-transform duration-500"></div>
              <h3 className="text-lg font-bold text-center z-10 group-hover:text-black transition-colors duration-300 group-hover:scale-110 transform">
                IBM Call for Code
              </h3>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>

            <div className="source-card group relative flex flex-col items-center justify-center h-32 rounded-xl overflow-hidden transition-all duration-500 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-amber-600 opacity-0 group-hover:opacity-90 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-white border border-gray-200 group-hover:scale-95 transition-transform duration-500"></div>
              <h3 className="text-lg font-bold text-center z-10 group-hover:text-black transition-colors duration-300 group-hover:scale-110 transform">
                Walmart Innovation Challenges
              </h3>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>

            <div className="source-card group relative flex flex-col items-center justify-center h-32 rounded-xl overflow-hidden transition-all duration-500 cursor-pointer col-span-2">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-emerald-600 opacity-0 group-hover:opacity-90 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-white border border-gray-200 group-hover:scale-95 transition-transform duration-500"></div>
              <h3 className="text-lg font-bold text-center z-10 group-hover:text-black transition-colors duration-300 group-hover:scale-110 transform">
                Partnered Industries (IFIA, Avast Digitech, etc.)
              </h3>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Problem Statement 1 */}
            <Card className="group overflow-hidden border-0 shadow-md hover:shadow-2xl transition-all duration-500 bg-white relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-blue-200 rounded-full opacity-0 group-hover:opacity-20 transition-all duration-500 blur-2xl"></div>

              <CardHeader className="relative z-10">
                <div className="flex justify-between items-start">
                  <CardTitle className="group-hover:text-blue-700 transition-colors duration-300">
                    Healthcare Innovation
                  </CardTitle>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors duration-300">
                    Healthcare
                  </Badge>
                </div>
                <CardDescription>Developing solutions for modern healthcare challenges</CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-sm text-gray-500">
                  Design and develop innovative solutions to address challenges in healthcare delivery, patient
                  monitoring, or medical data management.
                </p>
                <div className="mt-4">
                  <h4 className="text-sm font-medium">Key Focus Areas:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-500 mt-2">
                    <li>Remote patient monitoring</li>
                    <li>Healthcare accessibility</li>
                    <li>Medical data analytics</li>
                    <li>Preventive healthcare</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="relative z-10">
                <Link
                  href="https://lu.ma/event/evt-UMPGVObGEy1gPwZ"
                  className="w-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform group-hover:translate-y-[-2px] group-hover:shadow-lg group cursor-pointer">
                    <span className="mr-2">Select This Problem</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Problem Statement 2 */}
            <Card className="group overflow-hidden border-0 shadow-md hover:shadow-2xl transition-all duration-500 bg-white relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-indigo-200 rounded-full opacity-0 group-hover:opacity-20 transition-all duration-500 blur-2xl"></div>

              <CardHeader className="relative z-10">
                <div className="flex justify-between items-start">
                  <CardTitle className="group-hover:text-indigo-700 transition-colors duration-300">
                    Smart Cities
                  </CardTitle>
                  <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200 transition-colors duration-300">
                    IoT
                  </Badge>
                </div>
                <CardDescription>Building the urban infrastructure of tomorrow</CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-sm text-gray-500">
                  Create innovative solutions for smart city infrastructure, urban mobility, waste management, or energy
                  efficiency.
                </p>
                <div className="mt-4">
                  <h4 className="text-sm font-medium">Key Focus Areas:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-500 mt-2">
                    <li>Traffic management</li>
                    <li>Smart waste management</li>
                    <li>Energy optimization</li>
                    <li>Public safety</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="relative z-10">
                <Link
                  href="https://lu.ma/event/evt-UMPGVObGEy1gPwZ"
                  className="w-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform group-hover:translate-y-[-2px] group-hover:shadow-lg group cursor-pointer">
                    <span className="mr-2">Select This Problem</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Problem Statement 3 */}
            <Card className="group overflow-hidden border-0 shadow-md hover:shadow-2xl transition-all duration-500 bg-white relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-purple-200 rounded-full opacity-0 group-hover:opacity-20 transition-all duration-500 blur-2xl"></div>

              <CardHeader className="relative z-10">
                <div className="flex justify-between items-start">
                  <CardTitle className="group-hover:text-purple-700 transition-colors duration-300">
                    EdTech Solutions
                  </CardTitle>
                  <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200 transition-colors duration-300">
                    Education
                  </Badge>
                </div>
                <CardDescription>Revolutionizing learning experiences</CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-sm text-gray-500">
                  Develop innovative educational technology solutions to enhance learning experiences, accessibility, or
                  educational outcomes.
                </p>
                <div className="mt-4">
                  <h4 className="text-sm font-medium">Key Focus Areas:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-500 mt-2">
                    <li>Personalized learning</li>
                    <li>Accessibility in education</li>
                    <li>Skill assessment</li>
                    <li>Interactive learning tools</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="relative z-10">
                <Link
                  href="https://lu.ma/event/evt-UMPGVObGEy1gPwZ"
                  className="w-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform group-hover:translate-y-[-2px] group-hover:shadow-lg group cursor-pointer">
                    <span className="mr-2">Select This Problem</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Problem Statement 4 */}
            <Card className="group overflow-hidden border-0 shadow-md hover:shadow-2xl transition-all duration-500 bg-white relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-green-200 rounded-full opacity-0 group-hover:opacity-20 transition-all duration-500 blur-2xl"></div>

              <CardHeader className="relative z-10">
                <div className="flex justify-between items-start">
                  <CardTitle className="group-hover:text-green-700 transition-colors duration-300">
                    Sustainable Agriculture
                  </CardTitle>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-200 transition-colors duration-300">
                    Agriculture
                  </Badge>
                </div>
                <CardDescription>Technology for sustainable food production</CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-sm text-gray-500">
                  Create solutions for sustainable agriculture, precision farming, supply chain optimization, or food
                  security.
                </p>
                <div className="mt-4">
                  <h4 className="text-sm font-medium">Key Focus Areas:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-500 mt-2">
                    <li>Precision agriculture</li>
                    <li>Resource optimization</li>
                    <li>Supply chain management</li>
                    <li>Crop monitoring</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="relative z-10">
                <Link
                  href="https://lu.ma/event/evt-UMPGVObGEy1gPwZ"
                  className="w-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 transition-all duration-300 transform group-hover:translate-y-[-2px] group-hover:shadow-lg group cursor-pointer">
                    <span className="mr-2">Select This Problem</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Problem Statement 5 */}
            <Card className="group overflow-hidden border-0 shadow-md hover:shadow-2xl transition-all duration-500 bg-white relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-amber-200 rounded-full opacity-0 group-hover:opacity-20 transition-all duration-500 blur-2xl"></div>

              <CardHeader className="relative z-10">
                <div className="flex justify-between items-start">
                  <CardTitle className="group-hover:text-amber-700 transition-colors duration-300">
                    Fintech Innovation
                  </CardTitle>
                  <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200 transition-colors duration-300">
                    Finance
                  </Badge>
                </div>
                <CardDescription>Transforming financial services</CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-sm text-gray-500">
                  Develop innovative solutions for financial inclusion, digital payments, investment platforms, or
                  financial literacy.
                </p>
                <div className="mt-4">
                  <h4 className="text-sm font-medium">Key Focus Areas:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-500 mt-2">
                    <li>Financial inclusion</li>
                    <li>Digital payments</li>
                    <li>Personal finance management</li>
                    <li>Blockchain applications</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="relative z-10">
                <Link
                  href="https://lu.ma/event/evt-UMPGVObGEy1gPwZ"
                  className="w-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 transition-all duration-300 transform group-hover:translate-y-[-2px] group-hover:shadow-lg group cursor-pointer">
                    <span className="mr-2">Select This Problem</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Problem Statement 6 */}
            <Card className="group overflow-hidden border-0 shadow-md hover:shadow-2xl transition-all duration-500 bg-white relative">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-gray-50 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-slate-200 rounded-full opacity-0 group-hover:opacity-20 transition-all duration-500 blur-2xl"></div>

              <CardHeader className="relative z-10">
                <div className="flex justify-between items-start">
                  <CardTitle className="group-hover:text-slate-700 transition-colors duration-300">
                    Open Innovation
                  </CardTitle>
                  <Badge className="bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors duration-300">
                    Open
                  </Badge>
                </div>
                <CardDescription>Your idea, your innovation</CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-sm text-gray-500">
                  Have a unique idea that does not fit into the other categories? Choose the open innovation track to
                  work on your own problem statement.
                </p>
                <div className="mt-4">
                  <h4 className="text-sm font-medium">Requirements:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-500 mt-2">
                    <li>Clear problem definition</li>
                    <li>Innovative solution approach</li>
                    <li>Technical feasibility</li>
                    <li>Potential impact</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="relative z-10">
                <Link
                  href="https://lu.ma/event/evt-UMPGVObGEy1gPwZ"
                  className="w-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-gradient-to-r from-slate-600 to-gray-600 hover:from-slate-700 hover:to-gray-700 transition-all duration-300 transform group-hover:translate-y-[-2px] group-hover:shadow-lg group cursor-pointer">
                    <span className="mr-2">Select This Problem</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full flex items-center justify-center py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-indigo-700 text-white relative overflow-hidden">
        {/* Animated tech grid background */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), 
                               linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
              animation: "backgroundMove 20s linear infinite",
            }}
          ></div>
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.8) 0%, transparent 8%)`,
              backgroundSize: "60px 60px",
              animation: "pulse 4s ease-in-out infinite",
            }}
          ></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium text-white mb-4 border border-white/20">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                Take Action Now
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Take on a Challenge?
              </h2>
              <p className="max-w-[900px] text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Register now to select your problem statement and start your hackathon journey
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="https://lu.ma/t1vip5g5" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-white/90 hover:text-blue-700 hover:shadow-lg transition-all duration-300 group relative overflow-hidden cursor-pointer"
                >
                  <span className="relative z-10 flex items-center">
                    <span className="mr-2">Register Now</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-white to-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }
        
        @keyframes backgroundMove {
          0% { background-position: 0 0; }
          100% { background-position: 40px 40px; }
        }
        
        .animate-fade-down {
          animation: fadeDown 0.8s ease-out forwards;
        }
        
        @keyframes fadeDown {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </div>
  )
}

