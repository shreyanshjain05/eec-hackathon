"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Search, Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
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
    { id: 143, title: "Build a platform that aggregates and analyzes ESG data for businesses", category: "Software", theme: "Clean & Green Technology" },
    { id: 31, title: "Microphone array-based direction of arrival for gunshot detection", category: "Software", theme: "Miscellaneous" },
    { id: 32, title: "Extraction and Verification of Information from semi-categorised data", category: "Software", theme: "Smart Automation" },
    { id: 33, title: "Web based Selector-Applicant Simulation Software", category: "Software", theme: "Smart Automation" },
    { id: 34, title: "Determining expert relevance with respect to interview board subject and candidates' area of expertise", category: "Software", theme: "Smart Automation" },
    { id: 35, title: "Detecting oil spills at marine environment using Automatic Identification System (AIS) and satellite datasets", category: "Software", theme: "Smart Automation" },
    { id: 36, title: "Development of a mobile application to provide recreational suitability information of beach locations across India", category: "Software", theme: "Travel & Tourism" },
    { id: 37, title: "Integrated Geo-Referenced Fish Catch Data Repository and Access System", category: "Software", theme: "Transportation & Logistics" },
    { id: 38, title: "Development of a versatile and fast algorithm for the optimal ship routing", category: "Software", theme: "Miscellaneous" },
    { id: 39, title: "Data download Duplication Alert System (DDAS)", category: "Software", theme: "Smart Automation" },
    { id: 40, title: "Interactive gamified approach to Ocean Literacy", category: "Software", theme: "Smart Education" },
    { id: 41, title: "Implement Software Solutions to Reduce Student Dropout Rates at Various Educational Stages", category: "Software", theme: "Smart Education" },
    { id: 42, title: "Develop Software Solutions to Enhance Educational Infrastructure and Connectivity in Rural Areas", category: "Software", theme: "Smart Education" },
    { id: 43, title: "Develop Effective Career Counselling and Guidance Programs in Schools to Enhance Student Career Choices", category: "Software", theme: "Miscellaneous" },
    { id: 44, title: "Integrate Industry-Relevant Vocational Training into Elementary and Secondary Education Curriculum", category: "Software", theme: "Smart Education" },
    { id: 45, title: "Creating an application to identify the presence of government issued personally identifiable information (PII) embedded", category: "Software", theme: "Smart Automation" },
    { id: 46, title: "Transformo Docs Application: Empowering Machine-Readable Document Management System", category: "Software", theme: "Smart Automation" },
    { id: 47, title: "Develop a functional solution that incorporates the security of the ML model", category: "Software", theme: "Smart Automation" },
    { id: 48, title: "Develop a functional solution that demonstrates the face liveness detection", category: "Software", theme: "Smart Automation" },
    { id: 49, title: "Develop a ML Model based solution to refine CAPTCHA", category: "Software", theme: "Smart Automation" },
    { id: 50, title: "Farmers Disease Diagnostic/Reporting Portal - Mobile Portal AI Based", category: "Software", theme: "Agriculture, FoodTech & Rural Development" },
    { id: 51, title: "Software solutions to identify users behind Telegram, WhatsApp and Instagram based drug trafficking", category: "Software", theme: "Blockchain & Cybersecurity" },
    { id: 52, title: "Software solution to identify the end receiver of a cryptocurrency transaction", category: "Software", theme: "Blockchain & Cybersecurity" },
    { id: 53, title: "Web-scrapping tool to be developed to search and report Critical and High Severity Vulnerabilities of OEM equipment (IT and Networking)", category: "Software", theme: "Blockchain & Cybersecurity" },
    { id: 54, title: "Developing a tool to provide for real time feeds of cyber incident pertaining to Indian Cyber Space", category: "Software", theme: "Smart Automation" },
    { id: 55, title: "Development of Audit script for Windows 11 and Linux OS as per CIS (Centre for Internet Security) benchmark", category: "Software", theme: "Smart Automation" },
    { id: 56, title: "Few Shot Language Agnostic Key Word Spotting system (FSLAKWS) for audio files", category: "Software", theme: "Blockchain & Cybersecurity" },
    { id: 57, title: "Identification of algorithm from the given dataset using AI/ML Techniques", category: "Software", theme: "Smart Automation" },
    { id: 58, title: "Centralized Automated Solution for Price Estimation & Reasonability", category: "Software", theme: "Miscellaneous" },
    { id: 59, title: "Development of AI/ML based solution for detection of face-swap based deep fake videos", category: "Software", theme: "Blockchain & Cybersecurity" },
    { id: 60, title: "Agent-less Windows System Vulnerability and Network Scanner", category: "Software", theme: "Smart Automation" },
    { id: 61, title: "Building Offline Parallel AV Pipeline to cater multiple AVs for CII entities", category: "Software", theme: "Smart Automation" },
    { id: 62, title: "Tools and techniques for customisation of GPO as per CIS guidelines to deploy on offline / standalone windows", category: "Software", theme: "Smart Automation" },
    { id: 63, title: "Real-Time Disaster Information Aggregation Software", category: "Software", theme: "Disaster Management" },
    { id: 64, title: "Development of handheld device/Mobile based Operation & Maintenance tool for asset & consumables inventories and field service", category: "Software", theme: "Smart Automation" },
    { id: 65, title: "Use of Digital Technology to calculate Water Footprints for different Agricultural Products", category: "Software", theme: "Clean & Green Technology" },
    { id: 66, title: "Use of Digital Knowledge Sharing Platform like Wikis on sharing of water efficient techniques and methods for minimizing water consumption", category: "Software", theme: "Clean & Green Technology" },
    { id: 67, title: "Adaptation of 'Existing Command Area in Response to Shifting of Agricultural Practices", category: "Software", theme: "Miscellaneous" },
    { id: 68, title: "Forecasting Future Water Requirements and Assessing Storage Capacities in Reservoirs", category: "Software", theme: "Smart Education" },
    { id: 69, title: "Developing a Robust Hydraulic Transient Analysis Model for Hydro Power and Pumped Storage Schemes", category: "Software", theme: "Smart Automation" },
    { id: 70, title: "Real-time Ganga river water quality forecasting using AI-enabled DSS, satellite data, IoT, and dynamic models", category: "Software", theme: "Smart Automation" },
    { id: 71, title: "A software application for analysis of DWLR data and raise alarms in respect of anomalous values, faulty DWLRs etc", category: "Software", theme: "Smart Automation" },
    { id: 72, title: "A software application - Ground Water Level Predictor", category: "Software", theme: "Smart Automation" },
    { id: 73, title: "AI based chatbot for collating and dissemination of information on groundwater", category: "Software", theme: "Smart Automation" },
    { id: 74, title: "Development of an educational game (web-based and mobile-based) on groundwater conservation and management", category: "Software", theme: "Smart Education" },
    { id: 75, title: "Let's Learn Constitution in a Simpler Manner-Institution Perspective", category: "Software", theme: "Smart Education" },
    { id: 76, title: "Developing an AI based interactive Chatbot or virtual assistant for the Department of Justice's Website", category: "Software", theme: "Smart Automation" },
    { id: 77, title: "AI-Driven Research Engine for Commercial Courts", category: "Software", theme: "Smart Automation" },
    { id: 78, title: "Gamification for Rural Planning using Drone land survey maps and GIS data", category: "Software", theme: "Robotics and Drones" },
    { id: 79, title: "Development and Optimization of AI model for Feature identification/ Extraction from drone orthophotos", category: "Software", theme: "Robotics and Drones" },
    { id: 80, title: "Intelligent Enterprise Assistant: Enhancing Organizational Efficiency through AI-driven Chatbot Integration", category: "Software", theme: "Miscellaneous" },
    { id: 81, title: "Development of a Geolocation-Based Attendance Tracking Mobile Application", category: "Software", theme: "Smart Automation" },
    { id: 82, title: "Tool for secure automatic network topology creation", category: "Software", theme: "Smart Automation" },
    { id: 83, title: "Comprehensive Automated Document Verification System for Official Documentation", category: "Software", theme: "Smart Automation" },
    { id: 84, title: "Interactive Skills Enhancer (ISE): A Virtual Reality-Based Learning Tool for Children with ASD and ID", category: "Software", theme: "Smart Education" },
    { id: 85, title: "Software for Speech Language Therapy Clinical Services", category: "Software", theme: "MedTech / BioTech / HealthTech" },
    { id: 86, title: "Indian Version of Nagish App", category: "Software", theme: "Miscellaneous" },
    { id: 87, title: "Capturing Non-manual features of Indian Sign Language and converting it into text", category: "Software", theme: "Miscellaneous" },
    { id: 88, title: "Monitoring System for classroom session in skill training programme", category: "Software", theme: "Smart Education" },
    { id: 89, title: "Education & Awareness - Effective Use of Technology for Dissemination of Anti-Doping Information", category: "Software", theme: "Smart Education" },
    { id: 90, title: "Intelligence and Investigations - Enhancing Anti-Doping Efforts", category: "Software", theme: "Smart Automation" },
    { id: 91, title: "Gamification of Anti-Doping Information", category: "Software", theme: "Smart Education" },
    { id: 92, title: "Prediction of Aluminium wire rod physical properties through AI, ML or any modern technique for better productivity and yield", category: "Software", theme: "Smart Automation" },
    { id: 93, title: "Platform for Inter-departmental cooperation (at city level) in Indian Cities, for sharing data & resources, unified phasing, planning", category: "Software", theme: "Smart Automation" },
    { id: 94, title: "Utilization of images for monitoring of progress of construction activities for building construction projects", category: "Software", theme: "Smart Automation" },
    { id: 95, title: "Utilization of aerial/ drone-based images for monitoring of progress of construction activities for building construction", category: "Software", theme: "Robotics and Drones" },
    { id: 96, title: "Universal Switch Set with Data Encryption and Decryption for Legacy Applications without Cyber Safety Measures", category: "Software", theme: "Blockchain & Cybersecurity" },
    { id: 97, title: "SolarQuest: Innovate to Capture More Sunlight and Boost Energy", category: "Software", theme: "Renewable / Sustainable Energy" },
    { id: 98, title: "Enhancement of Permanently Shadowed Regions (PSR) of Lunar Craters Captured by OHRC of Chandrayaan-2", category: "Software", theme: "Space Technology" },
    { id: 99, title: "SAR Image Colorization for Comprehensive Insight using Deep Learning Model (h)", category: "Software", theme: "Space Technology" },
    { id: 100, title: "Downscaling of Satellite based air quality map using AI/ML", category: "Software", theme: "Clean & Green Technology" },
    { id: 101, title: "On-device semantic segmentation of WMS services with geospatial data export", category: "Software", theme: "Smart Automation" },
    { id: 102, title: "AI based frame interpolation, video generation and display system for WMS services", category: "Software", theme: "Smart Automation" },
    { id: 103, title: "Automatic Modulation Recognition software for DVB -S2X waveforms", category: "Software", theme: "Smart Automation" },
    { id: 104, title: "Innovative applications of cloud-optimized geotiffs for INSAT satellite data", category: "Software", theme: "Smart Automation" },
    { id: 105, title: "Building Integrated Photo-voltaic (BIPV) potential assessment and visualisation using LOD-1 3D City Model", category: "Software", theme: "Smart Automation" },
    { id: 106, title: "Development of map-matching algorithm using AI-ML techniques to distinguish vehicular movement on highway and service road", category: "Software", theme: "Smart Automation" },
    { id: 107, title: "Centralized application-context aware firewall", category: "Software", theme: "Blockchain & Cybersecurity" },
    { id: 108, title: "Parsing of Social Media Feeds", category: "Software", theme: "Blockchain & Cybersecurity" },
    { id: 109, title: "Creating a cyber triage tool to streamline digital forensic investigation", category: "Software", theme: "Blockchain & Cybersecurity" },
    { id: 110, title: "De-anonymizing of entities on the onion sites operating on TOR Network", category: "Software", theme: "Blockchain & Cybersecurity" },
    { id: 111, title: "Improving open source software security using Fuzzing", category: "Software", theme: "Blockchain & Cybersecurity" },
    { id: 112, title: "Improving Android security: Application security for mobile app on Android 14 or higher", category: "Software", theme: "Smart Automation" },
    { id: 113, title: "Creating a Framework for Static Analysis of Vulnerabilities in Android Applications", category: "Software", theme: "Smart Automation" },
    { id: 114, title: "Recovery of Deleted Data and Associated Metadata from XFS and Btrfs Filesystems", category: "Software", theme: "Smart Automation" },
    { id: 115, title: "Creating a Comprehensive Web Application Fuzzer", category: "Software", theme: "Blockchain & Cybersecurity" },
    { id: 116, title: "AI-Powered Chatbot with Web Scraping & RAG Integration", category: "Software", theme: "Miscellaneous" },
    { id: 117, title: "Developing solutions to analyze and predict climate change and seasonal variations affecting agriculture", category: "Software", theme: "Clean & Green Technology" },
    { id: 118, title: "Implementing a scalable system for monitoring and managing mental health in large groups, such as workplaces and families", category: "Software", theme: "MedTech / BioTech / HealthTech" },
    { id: 119, title: "Design a simple yet engaging digital platform or tool that provides financial education to women and girls across Asia, incorporating cultural nuances", category: "Software", theme: "Industry" },
    { id: 120, title: "Develop a secure and automated platform for accrediting, certifying, and validating the quality of work of Micro, Small, and Medium Enterprises", category: "Software", theme: "Blockchain & Cybersecurity" },
    { id: 121, title: "Develop a software application that educates consumers about carbon emissions, major contributors to the carbon footprint", category: "Software", theme: "Clean & Green Technology" },
    { id: 122, title: "Design a mobile-based microfinance and digital payment solution using voice and language translation to provide financial inclusion", category: "Software", theme: "Industry" },
    { id: 123, title: "Design a digital twin platform using IoT and AI to simulate urban environments, optimize energy consumption, and manage infrastructure", category: "Software", theme: "Clean & Green Technology" },
    { id: 124, title: "Build an AI-powered space surveillance system to monitor and predict the movement of space debris, supporting ISRO's space mission", category: "Software", theme: "Space Technology" },
    { id: 125, title: "Create a scalable and automated EV battery swapping solution with real-time availability tracking and predictive maintenance", category: "Software", theme: "Smart Automation" },
    { id: 126, title: "Build a predictive maintenance platform for fleet operators using AI and IoT sensors to reduce downtime and optimize fuel efficiency", category: "Software", theme: "Smart Automation" },
    { id: 127, title: "Develop an AI-powered system that integrates traffic and pollution data to suggest eco-friendly routes, encouraging the use of sustainable transportation", category: "Software", theme: "Clean & Green Technology" },
    { id: 128, title: "Build a telematics-based system using AI to analyze driver behavior, detect aggressive driving, and provide real-time feedback", category: "Software", theme: "Smart Automation" },
    { id: 129, title: "Create an AI-powered gamified learning platform that trains drivers on customer service, road safety, and traffic regulations", category: "Software", theme: "Smart Education" },
    { id: 130, title: "Develop an AI algorithm to predict ride demand in real-time based on historical data, events, and weather patterns, optimizing resource allocation", category: "Software", theme: "Smart Automation" },
    { id: 131, title: "Create a blockchain-based identity verification system to reduce identity theft and ensure secure digital onboarding", category: "Software", theme: "Blockchain & Cybersecurity" },
    { id: 132, title: "Build a browser extension using AI that detects and blocks phishing websites in real time, protecting users from credential theft", category: "Software", theme: "Blockchain & Cybersecurity" },
    { id: 133, title: "Develop an AI model to detect synthetic identities created using stolen personal data for financial fraud", category: "Software", theme: "Blockchain & Cybersecurity" },
    { id: 134, title: "Build a system using natural language processing (NLP) to monitor communications and detect signs of social engineering", category: "Software", theme: "Blockchain & Cybersecurity" },
    { id: 135, title: "Create a fraud detection tool using computer vision to verify the authenticity of digital documents like Aadhar, PAN cards, etc.", category: "Software", theme: "Blockchain & Cybersecurity" },
    { id: 136, title: "Develop a tool that audits AI models for biases in recruitment, lending, and insurance decisions to ensure fairness and transparency", category: "Software", theme: "Miscellaneous" },
    { id: 137, title: "Create an Explainable AI (XAI) system that provides clear justifications for AI-driven decisions in financial services, healthcare, etc.", category: "Software", theme: "Miscellaneous" },
    { id: 138, title: "Design an AI-based hiring platform that anonymizes candidate information to reduce bias in recruitment processes", category: "Software", theme: "Miscellaneous" },
    { id: 139, title: "Create a visual dashboard that tracks AI decision-making patterns, providing insights into model behavior and ensuring accountability", category: "Software", theme: "Miscellaneous" },
    { id: 140, title: "Build a privacy-preserving AI solution using federated learning to ensure user data remains secure while training AI models", category: "Software", theme: "Blockchain & Cybersecurity" },
    { id: 141, title: "Develop AI models that incorporate diverse datasets representing different socioeconomic, gender, and cultural backgrounds", category: "Software", theme: "Miscellaneous" },
    { id: 142, title: "Design a platform using AI and blockchain to provide transparency in supply chain emissions and suggest eco-friendly alternatives", category: "Software", theme: "Clean & Green Technology" },
    { id: 143, title: "Build a platform that aggregates and analyzes Environmental, Social, and Governance (ESG) data to provide actionable insights for businesses", category: "Software", theme: "Clean & Green Technology" }

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

