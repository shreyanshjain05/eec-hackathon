import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ProblemsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Problem Statements</h1>
              <p className="max-w-[900px] text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Choose from a variety of challenging problem statements across different domains
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Problem Statement Sources</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our problem statements are sourced from industry-leading organizations and global hackathons
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-gray-50">
              <h3 className="text-lg font-bold text-center">Smart India Hackathon (SIH)</h3>
            </div>
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-gray-50">
              <h3 className="text-lg font-bold text-center">NASSCOM Product Conclave</h3>
            </div>
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-gray-50">
              <h3 className="text-lg font-bold text-center">HackerRank India Challenges</h3>
            </div>
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-gray-50">
              <h3 className="text-lg font-bold text-center">IndiaHacks</h3>
            </div>
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-gray-50">
              <h3 className="text-lg font-bold text-center">IBM Call for Code</h3>
            </div>
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-gray-50">
              <h3 className="text-lg font-bold text-center">Walmart Innovation Challenges</h3>
            </div>
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-gray-50 col-span-2">
              <h3 className="text-lg font-bold text-center">Partnered Industries (IFIA, Avast Digitech, etc.)</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Problem Statement 1 */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>Healthcare Innovation</CardTitle>
                  <Badge>Healthcare</Badge>
                </div>
                <CardDescription>Developing solutions for modern healthcare challenges</CardDescription>
              </CardHeader>
              <CardContent>
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
              <CardFooter>
                <Link href="/register" className="w-full">
                  <Button className="w-full">
                    Select This Problem
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Problem Statement 2 */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>Smart Cities</CardTitle>
                  <Badge>IoT</Badge>
                </div>
                <CardDescription>Building the urban infrastructure of tomorrow</CardDescription>
              </CardHeader>
              <CardContent>
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
              <CardFooter>
                <Link href="/register" className="w-full">
                  <Button className="w-full">
                    Select This Problem
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Problem Statement 3 */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>EdTech Solutions</CardTitle>
                  <Badge>Education</Badge>
                </div>
                <CardDescription>Revolutionizing learning experiences</CardDescription>
              </CardHeader>
              <CardContent>
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
              <CardFooter>
                <Link href="/register" className="w-full">
                  <Button className="w-full">
                    Select This Problem
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Problem Statement 4 */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>Sustainable Agriculture</CardTitle>
                  <Badge>Agriculture</Badge>
                </div>
                <CardDescription>Technology for sustainable food production</CardDescription>
              </CardHeader>
              <CardContent>
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
              <CardFooter>
                <Link href="/register" className="w-full">
                  <Button className="w-full">
                    Select This Problem
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Problem Statement 5 */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>Fintech Innovation</CardTitle>
                  <Badge>Finance</Badge>
                </div>
                <CardDescription>Transforming financial services</CardDescription>
              </CardHeader>
              <CardContent>
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
              <CardFooter>
                <Link href="/register" className="w-full">
                  <Button className="w-full">
                    Select This Problem
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Problem Statement 6 */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>Open Innovation</CardTitle>
                  <Badge>Open</Badge>
                </div>
                <CardDescription>Your idea, your innovation</CardDescription>
              </CardHeader>
              <CardContent>
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
              <CardFooter>
                <Link href="/register" className="w-full">
                  <Button className="w-full">
                    Select This Problem
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Take on a Challenge?
              </h2>
              <p className="max-w-[900px] text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Register now to select your problem statement and start your hackathon journey
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/register">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-white/90">
                  Register Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

