"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Particle component for magical floating elements
const Particle = () => {
  const randomX = Math.random() * 100
  const randomY = Math.random() * 100
  const size = Math.random() * 10 + 2
  const duration = Math.random() * 20 + 10
  const delay = Math.random() * 5

  return (
    <motion.div
      className="absolute rounded-full bg-white/20 backdrop-blur-md"
      style={{ width: size, height: size }}
      initial={{ x: `${randomX}%`, y: `${randomY}%`, opacity: 0 }}
      animate={{
        x: [`${randomX}%`, `${randomX + (Math.random() * 20 - 10)}%`],
        y: [`${randomY}%`, `${randomY + (Math.random() * 20 - 10)}%`],
        opacity: [0, 0.7, 0],
      }}
      transition={{
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        duration,
        delay,
        ease: "easeInOut",
      }}
    />
  )
}

export default function EvaluationPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [progressValues, setProgressValues] = useState({
    problemUnderstanding: 0,
    innovation: 0,
    technicalFeasibility: 0,
    scalability: 0,
    presentation: 0,
  })
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  // Transform values for parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])

  // Generate particles with unique keys
  const particles = Array.from({ length: 20 }).map((_, i) => <Particle key={`particle-${i}`} />)

  useEffect(() => {
    setIsLoaded(true)

    // Animate progress bars when component mounts
    const timer = setTimeout(() => {
      setProgressValues({
        problemUnderstanding: 20,
        innovation: 25,
        technicalFeasibility: 25,
        scalability: 20,
        presentation: 10,
      })
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 24 } },
  }


  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Hero section with magical elements */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {isLoaded && (
            <>
              <motion.div
                className="absolute top-0 left-0 w-full h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                {particles}
              </motion.div>
              <motion.div
                className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
                animate={{
                  x: ["-50%", "-30%", "-50%"],
                  y: ["-50%", "-30%", "-50%"],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 15,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
              <motion.div
                className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
                animate={{
                  x: ["50%", "30%", "50%"],
                  y: ["50%", "30%", "50%"],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 18,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
              <motion.div
                className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-500/20 rounded-full blur-2xl"
                animate={{
                  x: ["-50%", "-40%", "-60%", "-50%"],
                  y: ["-50%", "-60%", "-40%", "-50%"],
                  scale: [1, 1.1, 0.9, 1],
                }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
            </>
          )}
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center space-y-4 text-center"
          >
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.1,
              }}
              className="flex items-center justify-center mb-2"
            >
              <div className="relative">
                <Sparkles className="h-8 w-8 text-yellow-300" />
                <motion.div
                  className="absolute inset-0 rounded-full bg-yellow-300/30"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.7, 0, 0.7] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
              </div>
            </motion.div>

            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-100 drop-shadow-sm"
              >
                Evaluation Criteria
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="max-w-[900px] text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
              >
                Learn how projects will be evaluated during the Zero Gravity Hackathon 2025
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Button
                className="mt-4 bg-white text-indigo-700 hover:bg-white/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
                size="lg"
              >
                <span>Explore Criteria</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                  className="ml-2"
                >
                  <ArrowRight className="h-4 w-4 group-hover:text-indigo-500 transition-colors" />
                </motion.div>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative wave divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            className="relative block w-full h-[50px] md:h-[70px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              fill="#ffffff"
              opacity="0.25"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              fill="#ffffff"
              opacity="0.5"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              fill="#ffffff"
            ></path>
          </svg>
        </div>
      </section>

      {/* Main content section with scroll animations */}
      <section ref={sectionRef} className="w-full py-12 md:py-24 lg:py-32 bg-white relative">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center space-y-4"
            >
              <div className="space-y-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="inline-block rounded-lg bg-indigo-100 px-3 py-1 text-sm text-indigo-700 mb-2"
                >
                  Evaluation Framework
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="text-3xl font-bold tracking-tighter sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600"
                >
                  Shortlisting Criteria
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                >
                  Projects will be evaluated based on the following criteria during each phase of the hackathon
                </motion.p>
              </div>

              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-6 mt-6"
              >
                <motion.div
                  variants={item}
                  className="space-y-2 p-4 rounded-lg hover:bg-indigo-50 transition-colors duration-300"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 10px 30px -15px rgba(79, 70, 229, 0.15)",
                  }}
                >
                  <div className="flex justify-between">
                    <h3 className="font-medium">Problem Understanding</h3>
                    <span className="text-indigo-600 font-medium">20%</span>
                  </div>
                  <div className="relative h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: `${progressValues.problemUnderstanding}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                  </div>
                  <p className="text-sm text-gray-500 hover:text-indigo-600 transition-colors duration-300">
                    Clarity in identifying and explaining the problem statement. Relevance of the proposed solution to
                    the given challenge.
                  </p>
                </motion.div>

                <motion.div
                  variants={item}
                  className="space-y-2 p-4 rounded-lg hover:bg-indigo-50 transition-colors duration-300"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 10px 30px -15px rgba(79, 70, 229, 0.15)",
                  }}
                >
                  <div className="flex justify-between">
                    <h3 className="font-medium">Innovation & Creativity</h3>
                    <span className="text-indigo-600 font-medium">25%</span>
                  </div>
                  <div className="relative h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: `${progressValues.innovation}%` }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.1 }}
                    />
                  </div>
                  <p className="text-sm text-gray-500 hover:text-indigo-600 transition-colors duration-300">
                    Uniqueness of the idea compared to existing solutions. Novelty in approach, technology, or
                    execution.
                  </p>
                </motion.div>

                <motion.div
                  variants={item}
                  className="space-y-2 p-4 rounded-lg hover:bg-indigo-50 transition-colors duration-300"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 10px 30px -15px rgba(79, 70, 229, 0.15)",
                  }}
                >
                  <div className="flex justify-between">
                    <h3 className="font-medium">Technical Feasibility</h3>
                    <span className="text-indigo-600 font-medium">25%</span>
                  </div>
                  <div className="relative h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: `${progressValues.technicalFeasibility}%` }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                    />
                  </div>
                  <p className="text-sm text-gray-500 hover:text-indigo-600 transition-colors duration-300">
                    Practicality and feasibility of the solution within the given timeframe. Appropriate selection of
                    technology stack, algorithms, and tools.
                  </p>
                </motion.div>

                <motion.div
                  variants={item}
                  className="space-y-2 p-4 rounded-lg hover:bg-indigo-50 transition-colors duration-300"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 10px 30px -15px rgba(79, 70, 229, 0.15)",
                  }}
                >
                  <div className="flex justify-between">
                    <h3 className="font-medium">Scalability & Business Potential</h3>
                    <span className="text-indigo-600 font-medium">20%</span>
                  </div>
                  <div className="relative h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: `${progressValues.scalability}%` }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                    />
                  </div>
                  <p className="text-sm text-gray-500 hover:text-indigo-600 transition-colors duration-300">
                    Potential for real-world implementation. Impact on industry, government, or society.
                  </p>
                </motion.div>

                <motion.div
                  variants={item}
                  className="space-y-2 p-4 rounded-lg hover:bg-indigo-50 transition-colors duration-300"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 10px 30px -15px rgba(79, 70, 229, 0.15)",
                  }}
                >
                  <div className="flex justify-between">
                    <h3 className="font-medium">Presentation & Clarity</h3>
                    <span className="text-indigo-600 font-medium">10%</span>
                  </div>
                  <div className="relative h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: `${progressValues.presentation}%` }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
                    />
                  </div>
                  <p className="text-sm text-gray-500 hover:text-indigo-600 transition-colors duration-300">
                    Quality of PPT submission (Phase 1) and pitch (Phase 2). Clear articulation of objectives,
                    methodology, and expected outcomes.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                style={{ y: y1 }}
              >
                <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-500 bg-gradient-to-br from-white to-indigo-50/50">
                  <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50 relative overflow-hidden">
                    <div className="absolute inset-0 bg-grid-indigo/10 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]" />
                    <CardTitle className="relative z-10">Participation Guidelines</CardTitle>
                    <CardDescription className="relative z-10">
                      Rules and guidelines for participating in the hackathon
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6 pt-6 relative">
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 -mt-6 -mr-6 w-24 h-24 bg-indigo-100 rounded-full opacity-20 blur-xl" />
                    <div className="absolute bottom-0 left-0 -mb-6 -ml-6 w-32 h-32 bg-purple-100 rounded-full opacity-20 blur-xl" />

                    <AnimatePresence>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-2 relative z-10"
                      >
                        <motion.h3 whileHover={{ x: 5 }} className="font-medium text-indigo-700 flex items-center">
                          <span className="inline-block w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                          Team Composition
                        </motion.h3>
                        <ul className="list-disc list-inside text-sm text-gray-500 space-y-1">
                          <motion.li
                            whileHover={{ x: 5, color: "#4f46e5" }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="hover:text-indigo-600 transition-colors duration-300"
                          >
                            Each team must have six members, with at least one female participant.
                          </motion.li>
                          <motion.li
                            whileHover={{ x: 5, color: "#4f46e5" }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="hover:text-indigo-600 transition-colors duration-300"
                          >
                            Team members can be from different departments or institutions.
                          </motion.li>
                          <motion.li
                            whileHover={{ x: 5, color: "#4f46e5" }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="hover:text-indigo-600 transition-colors duration-300"
                          >
                            Once registered, team composition cannot be changed.
                          </motion.li>
                        </ul>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="space-y-2 relative z-10"
                      >
                        <motion.h3 whileHover={{ x: 5 }} className="font-medium text-indigo-700 flex items-center">
                          <span className="inline-block w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                          Submission Guidelines
                        </motion.h3>
                        <ul className="list-disc list-inside text-sm text-gray-500 space-y-1">
                          <motion.li
                            whileHover={{ x: 5, color: "#4f46e5" }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="hover:text-indigo-600 transition-colors duration-300"
                          >
                            All teams must submit a PPT (Phase 1) covering:
                            <ul className="list-disc list-inside ml-4 text-sm text-gray-500 space-y-1">
                              {[
                                "Problem statement & background",
                                "Proposed solution",
                                "Technical architecture",
                                "Expected impact",
                                "Team roles & contributions",
                              ].map((item, index) => (
                                <motion.li
                                  key={`submission-item-${index}`}
                                  whileHover={{ x: 5, color: "#4f46e5" }}
                                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                  className="hover:text-indigo-600 transition-colors duration-300"
                                >
                                  {item}
                                </motion.li>
                              ))}
                            </ul>
                          </motion.li>
                          <motion.li
                            whileHover={{ x: 5, color: "#4f46e5" }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="hover:text-indigo-600 transition-colors duration-300"
                          >
                            Submissions must be in PDF format and follow the prescribed template.
                          </motion.li>
                        </ul>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="space-y-2 relative z-10"
                      >
                        <motion.h3 whileHover={{ x: 5 }} className="font-medium text-indigo-700 flex items-center">
                          <span className="inline-block w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                          Code of Conduct
                        </motion.h3>
                        <ul className="list-disc list-inside text-sm text-gray-500 space-y-1">
                          {[
                            "Participants must adhere to ethical coding practices—plagiarism will lead to disqualification.",
                            "Usage of open-source libraries and APIs is encouraged but must be acknowledged.",
                            "The hackathon is a collaborative event—respect and teamwork are expected.",
                            "Decisions made by the jury and mentors will be final and binding.",
                          ].map((item, index) => (
                            <motion.li
                              key={`conduct-item-${index}`}
                              whileHover={{ x: 5, color: "#4f46e5" }}
                              transition={{ type: "spring", stiffness: 300, damping: 20 }}
                              className="hover:text-indigo-600 transition-colors duration-300"
                            >
                              {item}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="space-y-2 relative z-10"
                      >
                        <motion.h3 whileHover={{ x: 5 }} className="font-medium text-indigo-700 flex items-center">
                          <span className="inline-block w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                          Development & Presentation Guidelines
                        </motion.h3>
                        <ul className="list-disc list-inside text-sm text-gray-500 space-y-1">
                          <motion.li
                            whileHover={{ x: 5, color: "#4f46e5" }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="hover:text-indigo-600 transition-colors duration-300"
                          >
                            Teams will work on their solutions during the 48-hour hackathon.
                          </motion.li>
                          <motion.li
                            whileHover={{ x: 5, color: "#4f46e5" }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="hover:text-indigo-600 transition-colors duration-300"
                          >
                            Solutions must be developed from scratch during the event—pre-built solutions are not
                            allowed.
                          </motion.li>
                          <motion.li
                            whileHover={{ x: 5, color: "#4f46e5" }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="hover:text-indigo-600 transition-colors duration-300"
                          >
                            Final submission must include:
                            <ul className="list-disc list-inside ml-4 text-sm text-gray-500 space-y-1">
                              {[
                                "A working prototype or MVP",
                                "A technical document explaining the approach",
                                "A presentation for the final pitch",
                              ].map((item, index) => (
                                <motion.li
                                  key={`final-submission-${index}`}
                                  whileHover={{ x: 5, color: "#4f46e5" }}
                                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                  className="hover:text-indigo-600 transition-colors duration-300"
                                >
                                  {item}
                                </motion.li>
                              ))}
                            </ul>
                          </motion.li>
                        </ul>
                      </motion.div>
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-12 text-center"
          >
            <div className="max-w-md mx-auto space-y-4">
              <div className="flex justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 1,
                  }}
                  className="relative"
                >
                  <CheckCircle2 className="h-12 w-12 text-green-500" />
                  <motion.div
                    className="absolute inset-0 rounded-full bg-green-500/30"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.7, 0, 0.7] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                </motion.div>
              </div>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600"
              >
                Ready to Showcase Your Skills?
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
                className="text-gray-500"
              >
                Register now to participate in the Zero Gravity Hackathon 2025 and demonstrate your innovation and
                problem-solving abilities.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="https://lu.ma/event/evt-UMPGVObGEy1gPwZ" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group relative overflow-hidden"
                  >
                    <span className="relative z-10">Register Your Team</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "loop",
                        duration: 1.5,
                        ease: "easeInOut",
                      }}
                      className="relative z-10 ml-2"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.div>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ x: "100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.5 }}
                    />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

