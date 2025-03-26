import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">48 Hrs.(as subscript) of ZERO GRAVITY 2025</h1> 
                <p className="max-w-[600px] text-white/90 md:text-xl">
                  A 48-hour coding marathon to innovate, collaborate, and solve real-world problems
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="https://lu.ma/event/evt-UMPGVObGEy1gPwZ" passHref>
                <Button size="lg" className="bg-white text-blue-600 hover:bg-white/90">
                  Register Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>

                <Link href="/problems">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-white/90">
                  View Problem Statements
                </Button>

                </Link>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-white/80" />
                  <span className="text-white/80">April 4-6, 2025(increase font a size) </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-white/80" />
                  <span className="text-white/80">MLCP Labs, Easwari Engineering College (increase font size)</span>
                </div>
                {/* <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-white/80" />
                  <span className="text-white/80">Teams of 6 members</span>
                </div> */}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600"
                width={600}
                height={400}
                alt="Hackathon"
                className="rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About the Hackathon */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About the Hackathon (at center)</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The Zero Gravity Hackathon 2025 is a 48-hour coding marathon aimed at fostering innovation, collaboration, and
                practical learning among students.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-gray-50">
              <div className="p-3 rounded-full bg-blue-100 text-blue-600">
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
              <h3 className="text-xl font-bold">Innovation</h3>
              <p className="text-center text-gray-500">
                Develop innovative solutions to real-world problems using cutting-edge technologies.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-gray-50">
              <div className="p-3 rounded-full bg-blue-100 text-blue-600">
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
              <h3 className="text-xl font-bold">Collaboration</h3>
              <p className="text-center text-gray-500">
                Work in teams to share knowledge, skills, and perspectives to create better solutions.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-gray-50">
              <div className="p-3 rounded-full bg-blue-100 text-blue-600">
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
              <h3 className="text-xl font-bold">Add 2 more thing</h3>
              <p className="text-center text-gray-500">
                Gain practical experience and mentorship from industry experts throughout the event.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Easwari Engineering College */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
  <div className="container px-4 md:px-6">
    <div className="grid gap-6 lg:grid-cols-[400px_1fr] lg:gap-12 xl:grid-cols-[600px_1fr]">
      <div className="flex items-center justify-center">
        {/* <Image
          src="/easwari-college-image.jpg" // Update with the actual image URL
          width={600}
          height={400}
          alt="Easwari Engineering College"
          className="rounded-xl object-cover"
        /> */}
      </div>
      <div className="flex flex-col justify-center space-y-4">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Easwari Engineering College (At corener) (Add image of building) (Shorten the content and in single paragrpah)
          </h2>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Founded in the academic year 1996–1997, Easwari Engineering College has built a reputation for its commitment to academic excellence, holistic development, and a focus on technical innovation. With approval from the Government of Tamil Nadu and AICTE, New Delhi, the college was initially affiliated with the University of Madras and has been affiliated with Anna University Chennai since 2002. At Easwari, we foster a learning environment that emphasizes continuous development, enabling students to achieve academic success and grow personally and professionally.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-gray-800">
            Our Vision
          </h3>
          <p className="text-gray-500">
            At Easwari Engineering College, we aim to accomplish and maintain international recognition and become a model institution for higher learning. We envision a dynamic environment that cultivates the development of student minds, advances knowledge, and promotes professional skill application to meet global demands.
          </p>
          <ul className="space-y-2 text-gray-500">
            <li>Creating a pluralistic and supportive environment that empowers students, scholars, and staff to contribute to nation-building through partnerships with the community and industry.</li>
            <li>Setting high standards of education that focus on developing intellectual strength and guiding students toward technical advancement.</li>
            <li>Encouraging creativity, excellence, and innovation in teaching and learning.</li>
            <li>Nurturing student`s development in mind, skills, attitude, and core competencies.</li>
            <li>Leading in planning and resource management to enhance the quality and accessibility of technical education.</li>
            <li>Developing graduates who are globally distinguished, committed to integrity, professionalism, and lifelong learning.</li>
            <li>Ensuring students shine in their academic pursuits while being sensitive to the evolving needs of the industrial world.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-gray-800">
            Our Mission
          </h3>
          <p className="text-gray-500">
            Our mission is to empower students with knowledge, skills, and a global perspective to excel in their careers and contribute to societal progress. We work to achieve this by:
          </p>
          <ul className="space-y-2 text-gray-500">
            <li>Fostering strong relationships with faculty, students, and management to promote a nurturing academic environment.</li>
            <li>Implementing total quality management to ensure student-centered teaching and learning processes.</li>
            <li>Ensuring all students succeed in university examinations and are well-prepared for their careers.</li>
            <li>Offering comprehensive placement support through soft skills, technical training, and domain-specific knowledge.</li>
            <li>Enhancing leadership skills and encouraging students to become successful entrepreneurs.</li>
            <li>Providing regular programs in personality development, entrepreneurship, ethics, and extracurricular activities.</li>
            <li>Establishing strong collaborations with industry through MOUs to support student projects, placements, training, and knowledge transfer.</li>
            <li>Working toward becoming a `Deemed to be University` under the UGC Act, offering career-oriented programs for self-motivated employment.</li>
            <li>Aspiring to emerge as a globally recognized Centre of Excellence in Engineering, Technology, and Management through cutting-edge research.</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-gray-800">
            Join Us in Our Journey of Excellence
          </h3>
          <p className="text-gray-500">
            At Easwari Engineering College, we provide an environment that is conducive to learning, innovation, and personal growth. Our rigorous academic programs, state-of-the-art facilities, and a wide array of extracurricular activities aim to prepare students for success in the global job market. Join us in our mission to shape the leaders of tomorrow.
          </p>
        </div>
        <div>
          <Link href="https://srmeaswari.ac.in/" target="_blank">
            <Button variant="outline" className="mt-4">
              Visit College Website
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Timeline */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Event Timeline (center align)</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Key dates and milestones for the Zero Gravity Hackathon 2025
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 mt-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-blue-600 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                1
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded-lg shadow">
                <div className="font-bold text-blue-600">Phase 1: Registration & PPT Submission</div>
                <div className="text-sm text-gray-500">March 1 - March 20, 2025</div>
                <div className="mt-1">
                  Teams register and submit a PowerPoint presentation outlining their proposed solution
                </div>
              </div>
            </div>
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-blue-600 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                2
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded-lg shadow">
                <div className="font-bold text-blue-600">Phase 2: Idea Pitching </div>
                <div className="text-sm text-gray-500">March 25, 2025</div>
                <div className="mt-1">
                  Top 100 teams present their ideas to a jury of industry professionals and mentors
                </div>
              </div>
            </div>
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-blue-600 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                3
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded-lg shadow">
                <div className="font-bold text-blue-600">Final Team Selection</div>
                <div className="text-sm text-gray-500">March 30, 2025</div>
                <div className="mt-1">Final 50 teams selected for the 48-hour hackathon</div>
              </div>
            </div>
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-blue-600 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                4
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded-lg shadow">
                <div className="font-bold text-blue-600">Phase 3: 48-Hour Hackathon</div>
                <div className="text-sm text-gray-500">April 4-6, 2025</div>
                <div className="mt-1">48-hour non-stop coding and development marathon at MLCP Labs</div>
              </div>
            </div>
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-blue-600 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                5
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded-lg shadow">
                <div className="font-bold text-blue-600">Final Presentation & Awards</div>
                <div className="text-sm text-gray-500">April 6, 2025</div>
                <div className="mt-1">Final presentations, judging, and award ceremony</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Innovate?</h2>
              <p className="max-w-[900px] text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join us for 48 hours of coding, collaboration, and creativity
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link href="https://lu.ma/event/evt-UMPGVObGEy1gPwZ" passHref>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-white/90">
                Register Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>

              <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-white/90">
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

