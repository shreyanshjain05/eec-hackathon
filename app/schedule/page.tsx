"use client"

import Link from "next/link"
import { ArrowRight, Clock, MapPin, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useState } from "react"

export default function SchedulePage() {
  const [activeDay, setActiveDay] = useState<number | null>(null)

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  // Day 1 events
  const day1Events = [
    {
      time: "13:00 - 14:30",
      title: "Registration & Check-in",
      desc: "Team registration, ID verification, and kit distribution.",
      location: "MLCP Labs, Easwari Engineering College",
    },
    {
      time: "14:30 - 15:00",
      title: "Inauguration Ceremony",
      desc: "Welcome address, keynote speech, and event kickoff.",
      location: "MLCP Labs, Easwari Engineering College",
    },
    {
      time: "15:00",
      title: "Hackathon Begins",
      desc: "Official start of the 48-hour hackathon.",
    },
    {
      time: "18:00 - 19:00",
      title: "Mentor Session 1",
      desc: "Industry mentors available for guidance and technical support.",
    },
    {
      time: "20:00 - 21:00",
      title: "Dinner",
      desc: "Dinner will be provided for all participants at the hostel.",
    },
  ]

  // Day 2 events
  const day2Events = [
    {
      time: "8:00 - 09:00",
      title: "Breakfast",
    },
    {
      time: "12:00 - 13:00",
      title: "Lunch",
    },
    {
      time: "15:00",
      title: "24-hour milestone check-in",
      desc: "Progress review and feedback.",
    },
    {
      time: "17:00 - 18:00",
      title: "Mentor Session 2",
      desc: "Industry mentors available for guidance and technical support.",
    },
    {
      time: "20:00 - 21:00",
      title: "Dinner",
      desc: "Dinner will be provided for all participants at the hostel.",
    },
  ]

  // Day 3 events
  const day3Events = [
    {
      time: "8:00 - 09:00",
      title: "Breakfast",
    },
    {
      time: "12:00 - 13:00",
      title: "Lunch",
    },
    {
      time: "14:00",
      title: "1-hour warning",
    },
    {
      time: "15:00",
      title: "Hackathon Ends - Code Freeze",
    },
    {
      time: "15:00 - 16:00",
      title: "Project Submission & Preparation",
    },
    {
      time: "16:00 - 17:30",
      title: "Project Presentations & Judging",
    },
    {
      time: "17:30 - 18:30",
      title: "Closing Ceremony & Prize Distribution",
    },
  ]

  // Function to scroll to a day section
  const scrollToDay = (index: number) => {
    const element = document.getElementById(`day-${index + 1}`)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setActiveDay(index)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
      {/* Tech grid background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0,rgba(99,102,241,0)_50%)]"></div>
        <div className="absolute w-full h-screen bg-[linear-gradient(to_right,rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[size:14px_14px]"></div>
      </div>

      <section className="w-full flex items-center justify-center py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-indigo-700 text-white relative overflow-hidden">
        {/* Background tech pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZ2LTRoLTJ2NGgyek0zMCAzNGgtMnYtNGgydjR6bTAtNnYtNGgtMnY0aDJ6TTI0IDM0aC0ydi00aDJ2NHptMC02di00aC0ydjRoMnoiLz48L2c+PC9nPjwvc3ZnPg==')] bg-repeat"></div>
        </div>

        <div className="container flex items-center justify-center px-4 md:px-6 relative z-10">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium text-white mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              EEC Hackathon 2025
            </motion.div>

            <div className="space-y-2">
              <motion.h1
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Event Schedule
              </motion.h1>
              <motion.p
                className="max-w-[900px] text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Detailed timeline and schedule for the EEC Hackathon 2025
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap justify-center gap-2 mt-6"
            >
              {["Day 1", "Day 2", "Day 3"].map((day, index) => (
                <button
                  key={day}
                  onClick={() => scrollToDay(index)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeDay === index ? "bg-white text-indigo-700" : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  {day}
                </button>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
          <svg
            className="absolute bottom-0 w-full h-24 fill-white dark:fill-slate-900"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
            />
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
            />
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" />
          </svg>
        </div>
      </section>

      <section className="w-full py-12 flex items-center justify-center md:py-24 lg:py-32 bg-white dark:bg-slate-900 relative z-10">
        <div className="container px-4 md:px-6">
          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Day 1 Card */}
            <motion.div variants={itemVariants} id="day-1">
              <Card className="group border-none shadow-lg hover:shadow-xl transition-all duration-300 dark:bg-slate-800 dark:text-slate-100 h-full overflow-hidden rounded-xl">
                <CardHeader className="relative pb-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2)_0,rgba(255,255,255,0)_60%)]"></div>
                  <CardTitle className="text-xl md:text-2xl font-bold">Hackathon Day 1</CardTitle>
                  <CardDescription className="text-blue-100">April 4, 2025</CardDescription>
                </CardHeader>
                <CardContent className="pt-6 relative z-10">
                  <div className="space-y-4">
                    {day1Events.map((event, i) => (
                      <div
                        key={i}
                        className="group/item border-l-2 border-blue-600 pl-4 space-y-2 hover:border-indigo-500 transition-all duration-300 relative"
                      >
                        <div className="absolute -left-[5px] top-0 h-2 w-2 rounded-full bg-blue-600 group-hover/item:bg-indigo-500 group-hover/item:scale-150 transition-all duration-300"></div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-blue-600 group-hover/item:text-indigo-500 transition-colors duration-300" />
                          <span className="text-sm font-medium">{event.time}</span>
                        </div>
                        <h3 className="font-medium group-hover/item:text-indigo-600 dark:group-hover/item:text-indigo-400 transition-colors duration-300">
                          {event.title}
                        </h3>
                        {event.desc && <p className="text-sm text-gray-500 dark:text-gray-400">{event.desc}</p>}
                        {event.location && (
                          <div className="flex items-center gap-2 mt-1">
                            <MapPin className="h-4 w-4 text-blue-600 group-hover/item:text-indigo-500 transition-colors duration-300" />
                            <span className="text-xs text-gray-500 dark:text-gray-400">{event.location}</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Day 2 Card */}
            <motion.div variants={itemVariants} id="day-2">
              <Card className="group border-none shadow-lg hover:shadow-xl transition-all duration-300 dark:bg-slate-800 dark:text-slate-100 h-full overflow-hidden rounded-xl">
                <CardHeader className="relative pb-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2)_0,rgba(255,255,255,0)_60%)]"></div>
                  <CardTitle className="text-xl md:text-2xl font-bold">Hackathon Day 2</CardTitle>
                  <CardDescription className="text-blue-100">April 5, 2025</CardDescription>
                </CardHeader>
                <CardContent className="pt-6 relative z-10">
                  <div className="space-y-4">
                    {day2Events.map((event, i) => (
                      <div
                        key={i}
                        className="group/item border-l-2 border-blue-600 pl-4 space-y-2 hover:border-indigo-500 transition-all duration-300 relative"
                      >
                        <div className="absolute -left-[5px] top-0 h-2 w-2 rounded-full bg-blue-600 group-hover/item:bg-indigo-500 group-hover/item:scale-150 transition-all duration-300"></div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-blue-600 group-hover/item:text-indigo-500 transition-colors duration-300" />
                          <span className="text-sm font-medium">{event.time}</span>
                        </div>
                        <h3 className="font-medium group-hover/item:text-indigo-600 dark:group-hover/item:text-indigo-400 transition-colors duration-300">
                          {event.title}
                        </h3>
                        {event.desc && <p className="text-sm text-gray-500 dark:text-gray-400">{event.desc}</p>}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Day 3 Card */}
            <motion.div variants={itemVariants} id="day-3">
              <Card className="group border-none shadow-lg hover:shadow-xl transition-all duration-300 dark:bg-slate-800 dark:text-slate-100 h-full overflow-hidden rounded-xl">
                <CardHeader className="relative pb-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2)_0,rgba(255,255,255,0)_60%)]"></div>
                  <CardTitle className="text-xl md:text-2xl font-bold">Hackathon Day 3</CardTitle>
                  <CardDescription className="text-blue-100">April 6, 2025</CardDescription>
                </CardHeader>
                <CardContent className="pt-6 relative z-10">
                  <div className="space-y-4">
                    {day3Events.map((event, i) => (
                      <div
                        key={i}
                        className="group/item border-l-2 border-blue-600 pl-4 space-y-2 hover:border-indigo-500 transition-all duration-300 relative"
                      >
                        <div className="absolute -left-[5px] top-0 h-2 w-2 rounded-full bg-blue-600 group-hover/item:bg-indigo-500 group-hover/item:scale-150 transition-all duration-300"></div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-blue-600 group-hover/item:text-indigo-500 transition-colors duration-300" />
                          <span className="text-sm font-medium">{event.time}</span>
                        </div>
                        <h3 className="font-medium group-hover/item:text-indigo-600 dark:group-hover/item:text-indigo-400 transition-colors duration-300">
                          {event.title}
                        </h3>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="inline-block rounded-lg bg-blue-50 dark:bg-blue-900/30 px-4 py-2 text-sm text-blue-700 dark:text-blue-300 mb-6 shadow-sm backdrop-blur-sm border border-blue-100 dark:border-blue-800">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Note: Schedule is subject to minor changes. All participants will be notified of any updates.
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="https://lu.ma/t1vip5g5" target="_blank" rel="noopener noreferrer">
                <Button className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                  <span className="absolute top-0 left-0 w-full h-full bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-[150%] transition-transform duration-1000 ease-out"></span>
                  <span className="relative z-10 flex items-center">
                    Register Now
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Button>
              </Link>

              <Link href="/contact" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="group relative overflow-hidden border-blue-600 text-blue-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative z-10 flex items-center">
                    Contact Us
                    <ChevronRight className="ml-1 h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </span>
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

