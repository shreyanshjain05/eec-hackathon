import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Frequently Asked Questions
              </h1>
              <p className="max-w-[900px] text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find answers to common questions about the Zero Gravity Hackathon 2025
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex items-center justify-center py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-8">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Who can participate in the hackathon?</AccordionTrigger>
                <AccordionContent>
                  The hackathon is open to SRM Easwari Engineering College students. Teams must consist of exactly 6 members, with at least
                  one female participant to ensure diversity. Team members can be from different departments or
                  institutions.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is there a registration fee?</AccordionTrigger>
                <AccordionContent>
                  No, participation in the Zero Gravity Hackathon 2025 is completely free of charge.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>What should I bring to the hackathon?</AccordionTrigger>
                <AccordionContent>
                  Participants should bring their laptops, chargers, and any other devices or equipment they might need
                  for their project. Food and refreshments will be provided.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Will accommodation be provided?</AccordionTrigger>
                <AccordionContent>
                  NO, accommodation will not be provided.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>What are the prizes?</AccordionTrigger>
                <AccordionContent>
                  The hackathon offers exciting prizes for the top teams, including internship
                  opportunities, and more. Detailed prize information will be announced soon.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>How will the projects be evaluated?</AccordionTrigger>
                <AccordionContent>
                  Projects will be evaluated based on innovation, technical complexity, practicality, presentation, and
                  alignment with the chosen problem statement. A panel of industry experts will judge the submissions.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger>Can I work on a project I have already started?</AccordionTrigger>
                <AccordionContent>
                  No, all projects must be started from scratch during the hackathon. You can come with ideas and plans,
                  but the actual development must begin at the event.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8">
                <AccordionTrigger>Will there be mentors available during the hackathon?</AccordionTrigger>
                <AccordionContent>
                  Yes, industry experts and mentors will be available throughout the event to guide participants and
                  provide technical assistance.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-9">
                <AccordionTrigger>What is the selection process for Round 2?</AccordionTrigger>
                <AccordionContent>
                  After Round 1 (idea submission), our panel will evaluate all submissions based on innovation,
                  feasibility, and alignment with the problem statement. Selected teams will be notified via email to
                  participate in Round 2.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-10">
                <AccordionTrigger>Can I change my problem statement after registration?</AccordionTrigger>
                <AccordionContent>
                  No changes to problem statements will be entertained after registration. Please ensure you choose the
                  correct problem statement during registration.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-11">
                <AccordionTrigger>Is it mandatory to have a female team member?</AccordionTrigger>
                <AccordionContent>
                  Yes, each team must have at least one female participant. This requirement is to ensure diversity and
                  inclusivity in the hackathon.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-12">
                <AccordionTrigger>Can I change my team composition after registration?</AccordionTrigger>
                <AccordionContent>
                  No, once registered, team composition cannot be changed. Please ensure all team members are committed
                  to participating before registering.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-13">
                <AccordionTrigger>What are the different phases of the hackathon?</AccordionTrigger>
                <AccordionContent>
                  The hackathon consists of three phases: Phase 1 (Registration & PPT Submission), Phase 2 (Idea
                  Pitching & Refinement), and Phase 3 (48-Hour Hackathon & Prototype Development). Only the top teams
                  from each phase will advance to the next phase.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-14">
                <AccordionTrigger>What are the prizes for the winners?</AccordionTrigger>
                <AccordionContent>
                  The winning teams will receive certificates of achievement. The hackathon focuses on providing a
                  platform for innovation, learning, and networking with industry professionals, which are valuable
                  opportunities for career growth.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="flex justify-center mt-12">
            <div className="max-w-md space-y-4 text-center">
              <h3 className="text-xl font-bold">Still have questions?</h3>
              <p className="text-gray-500">
                If you could not find the answer to your question, feel free to contact our team directly.
              </p>
              <Link href="/contact">
                <Button>
                  Contact Us
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

