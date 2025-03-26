"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Check, CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function RegisterPage() {
  const [step, setStep] = useState(1)
  const [registrationComplete, setRegistrationComplete] = useState(false)

  const nextStep = () => {
    setStep(step + 1)
  }

  const prevStep = () => {
    setStep(step - 1)
  }

  const completeRegistration = () => {
    setRegistrationComplete(true)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Registration</h1>
              <p className="max-w-[900px] text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Complete the registration process to participate in the EEC Hackathon 2025
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          {!registrationComplete ? (
            <>
              <div className="mb-10">
                <div className="flex items-center justify-center">
                  <ol className="flex items-center w-full max-w-3xl">
                    <li className={`flex items-center ${step >= 1 ? "text-blue-600" : "text-gray-500"}`}>
                      <span
                        className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 1 ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-500"}`}
                      >
                        {step > 1 ? <Check className="w-6 h-6" /> : "1"}
                      </span>
                      <span className="ml-2 text-sm font-medium">Team Details</span>
                    </li>
                    <div className={`flex-1 h-0.5 mx-2 ${step >= 2 ? "bg-blue-600" : "bg-gray-200"}`}></div>
                    <li className={`flex items-center ${step >= 2 ? "text-blue-600" : "text-gray-500"}`}>
                      <span
                        className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 2 ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-500"}`}
                      >
                        {step > 2 ? <Check className="w-6 h-6" /> : "2"}
                      </span>
                      <span className="ml-2 text-sm font-medium">Problem Selection</span>
                    </li>
                    <div className={`flex-1 h-0.5 mx-2 ${step >= 3 ? "bg-blue-600" : "bg-gray-200"}`}></div>
                    <li className={`flex items-center ${step >= 3 ? "text-blue-600" : "text-gray-500"}`}>
                      <span
                        className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 3 ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-500"}`}
                      >
                        3
                      </span>
                      <span className="ml-2 text-sm font-medium">Idea Submission</span>
                    </li>
                  </ol>
                </div>
              </div>

              <Card className="max-w-3xl mx-auto">
                {step === 1 && (
                  <>
                    <CardHeader>
                      <CardTitle>Team Details</CardTitle>
                      <CardDescription>Provide information about your team and team members</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="team-name">Team Name</Label>
                        <Input id="team-name" placeholder="Enter your team name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="team-size">Team Size</Label>
                        <Select defaultValue="6">
                          <SelectTrigger id="team-size">
                            <SelectValue placeholder="Select team size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="6">6 Members (Required)</SelectItem>
                          </SelectContent>
                        </Select>
                        <p className="text-xs text-muted-foreground">
                          Each team must have exactly 6 members, with at least one female participant.
                        </p>
                      </div>
                      <div className="space-y-4">
                        <Label>Team Leader Details</Label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="leader-name">Full Name</Label>
                            <Input id="leader-name" placeholder="Enter full name" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="leader-email">Email</Label>
                            <Input id="leader-email" type="email" placeholder="Enter email address" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="leader-phone">Phone Number</Label>
                            <Input id="leader-phone" placeholder="Enter phone number" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="leader-college">College/Institution</Label>
                            <Input id="leader-college" placeholder="Enter college name" />
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <Label>Team Member 1 Details</Label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="member1-name">Full Name</Label>
                            <Input id="member1-name" placeholder="Enter full name" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="member1-email">Email</Label>
                            <Input id="member1-email" type="email" placeholder="Enter email address" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="member1-gender">Gender</Label>
                            <Select>
                              <SelectTrigger id="member1-gender">
                                <SelectValue placeholder="Select gender" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="male">Male</SelectItem>
                                <SelectItem value="female">Female</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <Label>Team Member 2 Details</Label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="member2-name">Full Name</Label>
                            <Input id="member2-name" placeholder="Enter full name" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="member2-email">Email</Label>
                            <Input id="member2-email" type="email" placeholder="Enter email address" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="member2-gender">Gender</Label>
                            <Select>
                              <SelectTrigger id="member2-gender">
                                <SelectValue placeholder="Select gender" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="male">Male</SelectItem>
                                <SelectItem value="female">Female</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <Label>Team Member 3 Details</Label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="member3-name">Full Name</Label>
                            <Input id="member3-name" placeholder="Enter full name" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="member3-email">Email</Label>
                            <Input id="member3-email" type="email" placeholder="Enter email address" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="member3-gender">Gender</Label>
                            <Select>
                              <SelectTrigger id="member3-gender">
                                <SelectValue placeholder="Select gender" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="male">Male</SelectItem>
                                <SelectItem value="female">Female</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <Label>Team Member 4 Details</Label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="member4-name">Full Name</Label>
                            <Input id="member4-name" placeholder="Enter full name" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="member4-email">Email</Label>
                            <Input id="member4-email" type="email" placeholder="Enter email address" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="member4-gender">Gender</Label>
                            <Select>
                              <SelectTrigger id="member4-gender">
                                <SelectValue placeholder="Select gender" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="male">Male</SelectItem>
                                <SelectItem value="female">Female</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <Label>Team Member 5 Details</Label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="member5-name">Full Name</Label>
                            <Input id="member5-name" placeholder="Enter full name" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="member5-email">Email</Label>
                            <Input id="member5-email" type="email" placeholder="Enter email address" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="member5-gender">Gender</Label>
                            <Select>
                              <SelectTrigger id="member5-gender">
                                <SelectValue placeholder="Select gender" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="male">Male</SelectItem>
                                <SelectItem value="female">Female</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-end">
                      <Button onClick={nextStep}>
                        Next Step
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </>
                )}

                {step === 2 && (
                  <>
                    <CardHeader>
                      <CardTitle>Problem Statement Selection</CardTitle>
                      <CardDescription>Select a problem statement for your hackathon project</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-2">
                        <Label>Choose a Problem Statement</Label>
                        <RadioGroup defaultValue="healthcare">
                          <div className="flex items-start space-x-2 border p-4 rounded-md">
                            <RadioGroupItem value="healthcare" id="healthcare" className="mt-1" />
                            <div className="grid gap-1.5">
                              <Label htmlFor="healthcare" className="font-medium">
                                Healthcare Innovation
                              </Label>
                              <p className="text-sm text-muted-foreground">
                                Design and develop innovative solutions to address challenges in healthcare delivery,
                                patient monitoring, or medical data management.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-2 border p-4 rounded-md">
                            <RadioGroupItem value="smartcities" id="smartcities" className="mt-1" />
                            <div className="grid gap-1.5">
                              <Label htmlFor="smartcities" className="font-medium">
                                Smart Cities
                              </Label>
                              <p className="text-sm text-muted-foreground">
                                Create innovative solutions for smart city infrastructure, urban mobility, waste
                                management, or energy efficiency.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-2 border p-4 rounded-md">
                            <RadioGroupItem value="edtech" id="edtech" className="mt-1" />
                            <div className="grid gap-1.5">
                              <Label htmlFor="edtech" className="font-medium">
                                EdTech Solutions
                              </Label>
                              <p className="text-sm text-muted-foreground">
                                Develop innovative educational technology solutions to enhance learning experiences,
                                accessibility, or educational outcomes.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-2 border p-4 rounded-md">
                            <RadioGroupItem value="agriculture" id="agriculture" className="mt-1" />
                            <div className="grid gap-1.5">
                              <Label htmlFor="agriculture" className="font-medium">
                                Sustainable Agriculture
                              </Label>
                              <p className="text-sm text-muted-foreground">
                                Create solutions for sustainable agriculture, precision farming, supply chain
                                optimization, or food security.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-2 border p-4 rounded-md">
                            <RadioGroupItem value="fintech" id="fintech" className="mt-1" />
                            <div className="grid gap-1.5">
                              <Label htmlFor="fintech" className="font-medium">
                                Fintech Innovation
                              </Label>
                              <p className="text-sm text-muted-foreground">
                                Develop innovative solutions for financial inclusion, digital payments, investment
                                platforms, or financial literacy.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-2 border p-4 rounded-md">
                            <RadioGroupItem value="open" id="open" className="mt-1" />
                            <div className="grid gap-1.5">
                              <Label htmlFor="open" className="font-medium">
                                Open Innovation
                              </Label>
                              <p className="text-sm text-muted-foreground">
                                Have a unique idea that does not fit into the other categories? Choose the open
                                innovation track to work on your own problem statement.
                              </p>
                            </div>
                          </div>
                        </RadioGroup>
                      </div>
                      {/* For Open Innovation */}
                      <div className="space-y-2">
                        <Label htmlFor="custom-problem">Custom Problem Statement (if selecting Open Innovation)</Label>
                        <Textarea id="custom-problem" placeholder="Describe your problem statement in detail" />
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" onClick={prevStep}>
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Previous Step
                      </Button>
                      <Button onClick={nextStep}>
                        Next Step
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </>
                )}

                {step === 3 && (
                  <>
                    <CardHeader>
                      <CardTitle>Idea Submission</CardTitle>
                      <CardDescription>Submit your initial idea for the selected problem statement</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="idea-title">Idea Title</Label>
                        <Input id="idea-title" placeholder="Enter a title for your idea" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="idea-description">Idea Description</Label>
                        <Textarea
                          id="idea-description"
                          placeholder="Describe your idea in detail"
                          className="min-h-[150px]"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="technologies">Technologies to be Used</Label>
                        <Textarea
                          id="technologies"
                          placeholder="List the technologies, frameworks, or tools you plan to use"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Upload Presentation (PPT)</Label>
                        <div className="border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center">
                          <p className="text-sm text-muted-foreground mb-2">
                            Upload your idea presentation (PPT format)
                          </p>
                          <Input id="ppt-upload" type="file" className="max-w-sm" />
                          <p className="text-xs text-muted-foreground mt-2">Max file size: 10MB</p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" onClick={prevStep}>
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Previous Step
                      </Button>
                      <Button onClick={completeRegistration}>
                        Submit Registration
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </>
                )}
              </Card>
            </>
          ) : (
            <Card className="max-w-3xl mx-auto">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <CheckCircle2 className="h-16 w-16 text-green-500" />
                </div>
                <CardTitle className="text-2xl">Registration Successful!</CardTitle>
                <CardDescription>Your registration has been submitted successfully</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-center">
                <p>
                  Thank you for registering for the EEC Hackathon 2025. Your application has been received and is being
                  reviewed.
                </p>
                <div className="bg-gray-50 p-4 rounded-md">
                  <h3 className="font-medium mb-2">Next Steps:</h3>
                  <ol className="list-decimal list-inside text-sm text-gray-600 text-left">
                    <li className="mb-2">You will receive a confirmation email with your registration details.</li>
                    <li className="mb-2">Your problem statement selection will be reviewed by our team.</li>
                    <li className="mb-2">Once approved, you will be notified to proceed with the idea submission.</li>
                    <li>After the idea evaluation, qualified teams will receive an invitation for Round 2.</li>
                  </ol>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Link href="/">
                  <Button>Return to Home</Button>
                </Link>
              </CardFooter>
            </Card>
          )}
        </div>
      </section>
    </div>
  )
}

