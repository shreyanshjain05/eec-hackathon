"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Search, Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

// Problem statement data structure
interface ProblemStatement {
  id: number
  title: string
  category: string
  theme: string
}

export default function ProblemStatementsPage() {
  const [mounted, setMounted] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedTheme, setSelectedTheme] = useState<string>("all")
  const [currentPage, setCurrentPage] = useState(1)
  const problemsPerPage = 9

  // Sample problem statements data (you would replace this with your full dataset)
  const problemStatements: ProblemStatement[] = [
    { id: 1, title: "Research and develop a design on autonomous water surface cleaning robot", category: "Software", theme: "Robotics and Drones" },
    { id: 2, title: "Women Safety Analytics – Protecting Women from safety threats", category: "Software", theme: "Miscellaneous" },
    { id: 3, title: "Micro-Doppler based Target Classification", category: "Software", theme: "Robotics and Drones" },
    { id: 4, title: "Enhancing Monitoring and Management of Research, IPR, Innovation, and Start-ups in Tamil Nadu", category: "Software", theme: "Smart Education" },
    { id: 5, title: "Implementation of the Alumni Association platform for the University/Institute", category: "Software", theme: "Smart Education" },
    { id: 6, title: "Learning App for Deaf And Mute and sign language-English/Tamil converter", category: "Software", theme: "Smart Education" },
    { id: 7, title: "Drone-Based Intelligent System for farm Management in Tamil Nadu", category: "Software", theme: "Agriculture, FoodTech & Rural Development" },
    { id: 8, title: "Automated System for Career Advancements of the Faculties of Higher Education", category: "Software", theme: "Smart Education" },
    { id: 9, title: "Publications summary generator for faculty members profile building", category: "Software", theme: "Smart Education" },
    { id: 10, title: "The technological solutions for capturing AQI values through mobile and other forms of stations", category: "Software", theme: "Clean & Green Technology" },
    { id: 11, title: "Dynamic route rationalization model based on machine learning/AI for real-time traffic", category: "Software", theme: "Smart Automation" },
    { id: 12, title: "Online monitoring of Unauthorized construction across the city", category: "Software", theme: "Robotics and Drones" },
    { id: 13, title: "Online real-time survey and monitoring of water bodies in Tamil Nadu", category: "Software", theme: "Miscellaneous" },
    { id: 14, title: "Queuing models in OPDs/ availability of beds/ admission of patients", category: "Software", theme: "MedTech / BioTech / HealthTech" },
    { id: 15, title: "Online testing and monitoring of quality of medicines and consumables", category: "Software", theme: "MedTech / BioTech / HealthTech" },
    { id: 16, title: "Smart Classroom Management Software for Enhanced Learning Environments", category: "Software", theme: "Smart Automation" },
    { id: 17, title: "Health Data Information & Management System Mobile Application (HDIMS)", category: "Software", theme: "MedTech / BioTech / HealthTech" },
    { id: 18, title: "Drug Inventory and supply chain Tracking system", category: "Software", theme: "MedTech / BioTech / HealthTech" },
    { id: 19, title: "Smart Competency Diagnostic and Candidate Profile Score Calculator", category: "Software", theme: "Smart Education" },
    { id: 20, title: "Mobile App for Direct Market Access for Farmers", category: "Software", theme: "Agriculture, FoodTech & Rural Development" },
    { id: 21, title: "Sustainable Fertilizer Usage Optimizer for Higher Yield", category: "Software", theme: "Agriculture, FoodTech & Rural Development" },
    { id: 22, title: "Assured Contract Farming System for Stable Market Access", category: "Software", theme: "Agriculture, FoodTech & Rural Development" },
    { id: 23, title: "Create an Annual Report Portal for institute with integrated departmental reports", category: "Software", theme: "Smart Education" },
    { id: 24, title: "Comprehensive AYUSH Startup Registration Portal", category: "Software", theme: "MedTech / BioTech / HealthTech" },
    { id: 25, title: "Portal for Innovation Excellence Indicators", category: "Software", theme: "Smart Education" },
    { id: 26, title: "Web application for quantifying carbon footprint of Indian coal mines", category: "Software", theme: "Renewable / Sustainable Energy" },
    { id: 27, title: "App and web-based software for Productivity and safety management of coal mines", category: "Software", theme: "Smart Automation" },
    { id: 28, title: "App-based Project monitoring of S&T/ R&D Projects of Coal Sector", category: "Software", theme: "Smart Automation" },
    { id: 29, title: "DDoS Protection System for Cloud: Architecture and Tool", category: "Software", theme: "Blockchain & Cybersecurity" },
    { id: 30, title: "Early Warning System for Glacial Lake Outburst Floods (GLOFs)", category: "Software", theme: "Disaster Management" },
    { id: 143, title: "Build a platform that aggregates and analyzes ESG data for businesses", category: "Software", theme: "Clean & Green Technology" }
    // Note: Not all 143 problem statements are listed here due to space constraints
];


  useEffect(() => {
    setMounted(true)

    // Add parallax effect to the magical particles
    interface MagicParticle extends HTMLElement {
      getAttribute(name: string): string | null
      style: CSSStyleDeclaration
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

  // Get unique themes for filter dropdown
  const uniqueThemes = Array.from(new Set(problemStatements.map((problem) => problem.theme)))

  // Filter problem statements based on search query and filters
  const filteredProblems = problemStatements.filter((problem) => {
    const matchesSearch = problem.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || problem.category === selectedCategory
    const matchesTheme = selectedTheme === "all" || problem.theme === selectedTheme
    return matchesSearch && matchesCategory && matchesTheme
  })

  // Pagination logic
  const indexOfLastProblem = currentPage * problemsPerPage
  const indexOfFirstProblem = indexOfLastProblem - problemsPerPage
  const currentProblems = filteredProblems.slice(indexOfFirstProblem, indexOfLastProblem)
  const totalPages = Math.ceil(filteredProblems.length / problemsPerPage)


  // // Get badge color class based on theme
  // const getBadgeColorClass = (theme: string) => {
  //   const color = getThemeColor(theme)
  //   return `bg-${color}-100 text-${color}-800 hover:bg-${color}-200`
  // }


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

      <section className="w-full py-12 md:py-16 lg:py-20 bg-white relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container px-4 md:px-6 relative">
          {/* Search and Filter Section */}
          <div className="mb-8 flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                placeholder="Search problem statements..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Software">Software</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedTheme} onValueChange={setSelectedTheme}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Themes</SelectItem>
                  {uniqueThemes.map((theme) => (
                    <SelectItem key={theme} value={theme}>
                      {theme}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button variant="outline" className="gap-2">
                <Filter size={16} />
                Filters
              </Button>
            </div>
          </div>

          {/* Problem Statements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProblems.map((problem) => (
              <Card
                key={problem.id}
                className="group overflow-hidden border-0 shadow-md hover:shadow-2xl transition-all duration-500 bg-white relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute -right-20 -top-20 w-40 h-40 bg-blue-200 rounded-full opacity-0 group-hover:opacity-20 transition-all duration-500 blur-2xl"></div>

                <CardHeader className="relative z-10">
                  <div className="flex justify-between items-start">
                    <CardTitle className="group-hover:text-blue-700 transition-colors duration-300 text-lg">
                      Problem #{problem.id}
                    </CardTitle>
                    <Badge className={`bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors duration-300`}>
                      {problem.theme}
                    </Badge>
                  </div>
                  <CardDescription className="line-clamp-2 h-10">{problem.title}</CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-sm text-gray-500 line-clamp-4 h-20">{problem.title}</p>
                </CardContent>
                <CardFooter className="relative z-10">
                  <Link href={'https://lu.ma/t1vip5g5'} className="w-full">
                    <Button
                      className={`w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform group-hover:translate-y-[-2px] group-hover:shadow-lg group cursor-pointer`}
                    >
                      <span className="mr-2">Register Now</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          {filteredProblems.length > problemsPerPage && (
            <div className="mt-12 flex justify-center">
              <Pagination>
                <PaginationContent>
                    <PaginationItem>
                    <PaginationPrevious
                      href="#"
                      onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                      e.preventDefault()
                      if (currentPage > 1) setCurrentPage(currentPage - 1)
                      }}
                      className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                    />
                    </PaginationItem>

                  {Array.from({ length: Math.min(5, totalPages) }).map((_, i) => {
                    let pageNumber
                    if (totalPages <= 5) {
                      pageNumber = i + 1
                    } else if (currentPage <= 3) {
                      pageNumber = i + 1
                    } else if (currentPage >= totalPages - 2) {
                      pageNumber = totalPages - 4 + i
                    } else {
                      pageNumber = currentPage - 2 + i
                    }

                    return (
                      <PaginationItem key={i}>
                        <PaginationLink
                          href="#"
                          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                          e.preventDefault()
                          setCurrentPage(pageNumber)
                          }}
                          isActive={currentPage === pageNumber}
                        >
                          {pageNumber}
                        </PaginationLink>
                      </PaginationItem>
                    )
                  })}

                  {totalPages > 5 && currentPage < totalPages - 2 && (
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                  )}

                    <PaginationItem>
                    <PaginationNext
                      href="#"
                      onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                      e.preventDefault()
                      if (currentPage < totalPages) setCurrentPage(currentPage + 1)
                      }}
                      className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                    />
                    </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
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

