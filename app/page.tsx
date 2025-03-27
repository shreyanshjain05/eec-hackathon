'use client'
import Link from "next/link";
import { ArrowRight, Clock, MapPin} from "lucide-react";
import { Button } from "@/components/ui/button";
import EventTimeline from "@/event-timeline";
import SponsorsSection from "@/components/sponsorSection";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-delayed-fade-in {
          opacity: 0;
          animation: fadeIn 1.5s ease-in-out forwards;
          animation-delay: 7s;
        }
      `}</style>

      

      {/* Hero Section */}
      <section
        className="w-full h-screen relative flex items-end justify-center bg-cover bg-center pt-16 md:pt-20 pb-8 md:pb-12"
        style={{ backgroundImage: "url('/hackathon_intro.mp4')" }}
      >
        <video
          autoPlay
          muted
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/hackathon_intro.mp4" 
        />
        <div className="container mx-auto px-4 md:px-6 relative z-20 h-full flex items-end justify-center">
          <div className="flex flex-col items-center text-center space-y-8 animate-delayed-fade-in">
            <h2 className="max-w-[600px] text-white text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter drop-shadow-2xl">
              {/* A 48-hour coding marathon to innovate, collaborate, and solve real-world problems */}
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="https://lu.ma/t1vip5g5" passHref>
                <Button
                  className="bg-white text-black hover:bg-gray-200 transition-all duration-300 font-semibold w-full sm:w-auto text-lg py-3 px-6"
                >
                  Register Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/problems">
                <Button
                  className="bg-transparent border border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-semibold w-full sm:w-auto text-lg py-3 px-6"
                >
                  View Problem Statements
                </Button>
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center">
              <div className="flex items-center gap-2">
                <Clock className="h-6 w-6 text-white" />
                <span className="text-white text-lg sm:text-xl drop-shadow-2xl">April 4-6, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-6 w-6 text-white" />
                <span className="text-white text-lg sm:text-xl drop-shadow-2xl">MLCP Labs, Easwari Engineering College</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Hackathon */}
      <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-white text-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter">About the Hackathon</h2>
              <p className="max-w-[900px] text-gray-600 text-base sm:text-lg md:text-xl">
                The Zero Gravity Hackathon 2025 is a 48-hour coding marathon aimed at fostering innovation, collaboration, and practical learning among students.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-12">
            <div className="flex flex-col items-center space-y-3 border rounded-lg p-6 bg-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="p-3 rounded-full bg-gray-200 text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold">Innovation</h3>
              <p className="text-center text-gray-600 text-sm sm:text-base">
                Develop innovative solutions to real-world problems using cutting-edge technologies.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-3 border rounded-lg p-6 bg-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="p-3 rounded-full bg-gray-200 text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold">Collaboration</h3>
              <p className="text-center text-gray-600 text-sm sm:text-base">
                Work in teams to share knowledge, skills, and perspectives to create better solutions.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-3 border rounded-lg p-6 bg-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="p-3 rounded-full bg-gray-200 text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold">Learning & Mentorship</h3>
              <p className="text-center text-gray-600 text-sm sm:text-base">
                Gain practical experience and mentorship from industry experts throughout the event.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SponsorsSection />

      {/* About Easwari Engineering College */}
      <section
        className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-white bg-cover bg-center relative"
        style={{ backgroundImage: "url('/eec.png')" }} 
      >
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-left drop-shadow-lg">
                Easwari Engineering College
              </h2>
              <p className="max-w-[600px] text-gray-400 text-base sm:text-lg md:text-xl drop-shadow-md text-justify">
                Established in 1996–1997, Easwari Engineering College is renowned for academic excellence and technical innovation.
              </p>
              <p className="max-w-[600px] text-gray-400 text-base sm:text-lg md:text-xl drop-shadow-md text-justify">
                Approved by the Government of Tamil Nadu and AICTE, it has been affiliated with Anna University Chennai since 2002.
              </p>
              <p className="max-w-[600px] text-gray-400 text-base sm:text-lg md:text-xl drop-shadow-md text-justify">
                The college fosters a dynamic environment for learning, personal growth, and professional development.
              </p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-bold drop-shadow-md">Join Us in Our Journey of Excellence</h3>
              <p className="max-w-[600px] text-gray-400 text-base sm:text-lg md:text-xl drop-shadow-md text-justify">
                We provide an environment for learning, innovation, and growth, preparing students for success in the global job market.
              </p>
            </div>
            <div>
              <Link href="https://srmeaswari.ac.in/" target="_blank">
                <Button
                  variant="outline"
                  className="mt-4 border-white text-black hover:bg-white hover:text-black transition-all duration-300 w-full sm:w-auto cursor-pointer"
                >
                  Visit College Website
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="timeline" className="w-full py-12 md:py-24 lg:py-32 bg-white text-black">
        <EventTimeline />
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="w-full py-12 md:py-24 lg:py-32 relative bg-cover bg-center"
        style={{ backgroundImage: "url('/video-bg.mp4')" }}
      >
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/video-bg.mp4"
        />
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-20">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter drop-shadow-lg">
                Ready to Innovate?
              </h2>
              <p className="max-w-[900px] text-gray-200 text-base sm:text-lg md:text-xl drop-shadow-md">
                Join us for 48 hours of coding, collaboration, and creativity
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="https://lu.ma/t1vip5g5" passHref>
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-gray-200 transition-all duration-300 font-semibold w-full sm:w-auto"
                >
                  Register Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-transparent border border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-semibold w-full sm:w-auto"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Home
