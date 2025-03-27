import { Mail, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2 md:ml-7">
              <h1 className="text-3xl text-center font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
              <p className="max-w-[900px] text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Have questions about the hackathon? Get in touch with our team
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex items-center justify-center py-12 md:py-24 lg:py-32 bg-white">
        <div className="container flex items-center justify-center px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get in Touch</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We are here to help with any questions you might have about the Zero Gravity Hackathon 2025.
                </p>
              </div>
              <div className="grid gap-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-blue-600" />
                  <div>
                    <h3 className="font-bold">Address</h3>
                    <p className="text-sm text-gray-500">
                      Easwari Engineering College
                      <br />
                      Bharathi Salai, Ramapuram
                      <br />
                      Chennai - 600 089, Tamil Nadu, India
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="text-sm text-gray-500">iie@srmrmp.edu.in</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  {/* <Phone className="h-6 w-6 text-blue-600" /> */}
                  <div>
                    {/* <h3 className="font-bold">Phone</h3>
                    <p className="text-sm text-gray-500">+91 44 2249 0853</p> */}
                  </div>
                </div>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we will get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First name</Label>
                    <Input id="first-name" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input id="last-name" placeholder="Enter your last name" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Enter the subject" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Enter your message" className="min-h-[120px]" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Send Message</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full flex items-center justify-center py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find answers to common questions about the hackathon
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 mt-12">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Who can participate in the hackathon?</h3>
              <p className="text-gray-500">
              The hackathon is open to SRM Easwari Engineering College students. Teams must consist of exactly 6 members, with at least one female participant to ensure diversity. Team members can be from different departments or institutions.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Is there a registration fee?</h3>
              <p className="text-gray-500">No, participation in the Zero Gravity Hackathon 2025 is completely free of charge.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">What should I bring to the hackathon?</h3>
              <p className="text-gray-500">
                Participants should bring their laptops, chargers, and any other devices or equipment they might need
                for their project. Food and refreshments will be provided.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Will accommodation be provided?</h3>
              <p className="text-gray-500">
                No, accommodation will not be provided.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">What are the prizes?</h3>
              <p className="text-gray-500">
                The hackathon offers exciting prizes for the top teams,internship opportunities,
                and more. Detailed prize information will be announced soon.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">How will the projects be evaluated?</h3>
              <p className="text-gray-500">
                Projects will be evaluated based on innovation, technical complexity, practicality, presentation, and
                alignment with the chosen problem statement. A panel of industry experts will judge the submissions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

