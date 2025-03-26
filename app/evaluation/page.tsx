import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function EvaluationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Evaluation Criteria</h1>
              <p className="max-w-[900px] text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Learn how projects will be evaluated during the Zero Gravity Hackathon 2025
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Shortlisting Criteria</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Projects will be evaluated based on the following criteria during each phase of the hackathon
                </p>
              </div>

              <div className="space-y-6 mt-6">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <h3 className="font-medium">Problem Understanding</h3>
                    <span className="text-blue-600 font-medium">20%</span>
                  </div>
                  <Progress value={20} className="h-2" />
                  <p className="text-sm text-gray-500">
                    Clarity in identifying and explaining the problem statement. Relevance of the proposed solution to
                    the given challenge.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <h3 className="font-medium">Innovation & Creativity</h3>
                    <span className="text-blue-600 font-medium">25%</span>
                  </div>
                  <Progress value={25} className="h-2" />
                  <p className="text-sm text-gray-500">
                    Uniqueness of the idea compared to existing solutions. Novelty in approach, technology, or
                    execution.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <h3 className="font-medium">Technical Feasibility</h3>
                    <span className="text-blue-600 font-medium">25%</span>
                  </div>
                  <Progress value={25} className="h-2" />
                  <p className="text-sm text-gray-500">
                    Practicality and feasibility of the solution within the given timeframe. Appropriate selection of
                    technology stack, algorithms, and tools.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <h3 className="font-medium">Scalability & Business Potential</h3>
                    <span className="text-blue-600 font-medium">20%</span>
                  </div>
                  <Progress value={20} className="h-2" />
                  <p className="text-sm text-gray-500">
                    Potential for real-world implementation. Impact on industry, government, or society.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <h3 className="font-medium">Presentation & Clarity</h3>
                    <span className="text-blue-600 font-medium">10%</span>
                  </div>
                  <Progress value={10} className="h-2" />
                  <p className="text-sm text-gray-500">
                    Quality of PPT submission (Phase 1) and pitch (Phase 2). Clear articulation of objectives,
                    methodology, and expected outcomes.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Participation Guidelines</CardTitle>
                  <CardDescription>Rules and guidelines for participating in the hackathon</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="font-medium">Team Composition</h3>
                    <ul className="list-disc list-inside text-sm text-gray-500 space-y-1">
                      <li>Each team must have six members, with at least one female participant.</li>
                      <li>Team members can be from different departments or institutions.</li>
                      <li>Once registered, team composition cannot be changed.</li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium">Submission Guidelines</h3>
                    <ul className="list-disc list-inside text-sm text-gray-500 space-y-1">
                      <li>
                        All teams must submit a PPT (Phase 1) covering:
                        <ul className="list-disc list-inside ml-4 text-sm text-gray-500 space-y-1">
                          <li>Problem statement & background</li>
                          <li>Proposed solution</li>
                          <li>Technical architecture</li>
                          <li>Expected impact</li>
                          <li>Team roles & contributions</li>
                        </ul>
                      </li>
                      <li>Submissions must be in PDF format and follow the prescribed template.</li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium">Code of Conduct</h3>
                    <ul className="list-disc list-inside text-sm text-gray-500 space-y-1">
                      <li>
                        Participants must adhere to ethical coding practices—plagiarism will lead to disqualification.
                      </li>
                      <li>Usage of open-source libraries and APIs is encouraged but must be acknowledged.</li>
                      <li>The hackathon is a collaborative event—respect and teamwork are expected.</li>
                      <li>Decisions made by the jury and mentors will be final and binding.</li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium">Development & Presentation Guidelines</h3>
                    <ul className="list-disc list-inside text-sm text-gray-500 space-y-1">
                      <li>Teams will work on their solutions during the 48-hour hackathon.</li>
                      <li>
                        Solutions must be developed from scratch during the event—pre-built solutions are not allowed.
                      </li>
                      <li>
                        Final submission must include:
                        <ul className="list-disc list-inside ml-4 text-sm text-gray-500 space-y-1">
                          <li>A working prototype or MVP.</li>
                          <li>A technical document explaining the approach.</li>
                          <li>A presentation for the final pitch.</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* <Card>
                <CardHeader>
                  <CardTitle>Hackathon Structure</CardTitle>
                  <CardDescription>The three phases of the EEC Hackathon 2025</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600">
                        1
                      </div>
                      <h3 className="font-medium">Phase 1: Registration & PPT Submission</h3>
                    </div>
                    <ul className="list-disc list-inside text-sm text-gray-500 space-y-1 ml-10">
                      <li>
                        Teams register online and submit a PowerPoint presentation (PPT) outlining their proposed
                        solution.
                      </li>
                      <li>
                        The PPT must include details about the problem statement, technological approach, feasibility,
                        and expected impact.
                      </li>
                      <li>Target: 150-175 teams</li>
                      <li>
                        Submissions will be reviewed by a panel of experts, and the best ideas will be shortlisted for
                        the next round.
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600">
                        2
                      </div>
                      <h3 className="font-medium">Phase 2: Idea Pitching & Refinement</h3>
                    </div>
                    <ul className="list-disc list-inside text-sm text-gray-500 space-y-1 ml-10">
                      <li>
                        The top 100 teams will present their ideas to a jury of industry professionals and mentors.
                      </li>
                      <li>Each team will receive constructive feedback and guidance to refine their solution.</li>
                      <li>
                        This phase will focus on evaluating the technical feasibility, business potential, and impact of
                        the proposed solutions.
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600">
                        3
                      </div>
                      <h3 className="font-medium">Phase 3: 48-Hour Hackathon & Prototype Development</h3>
                    </div>
                    <ul className="list-disc list-inside text-sm text-gray-500 space-y-1 ml-10">
                      <li>
                        The final 50 teams will participate in a 48-hour non-stop coding and development marathon.
                      </li>
                      <li>Teams will receive mentorship from industry experts throughout the hackathon.</li>
                      <li>
                        Participants will develop a working prototype, MVP (Minimum Viable Product), or software demo
                        within the 48-hour time frame.
                      </li>
                      <li>
                        The hackathon will conclude with a final presentation and judging, where teams will showcase
                        their prototypes, implementation strategies, and future potential.
                      </li>
                      <li>Winning teams will receive certificates.</li>
                    </ul>
                  </div>
                </CardContent>
              </Card> */}
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="max-w-md mx-auto space-y-4">
              <div className="flex justify-center">
                <CheckCircle2 className="h-12 w-12 text-green-500" />
              </div>
              <h3 className="text-xl font-bold">Ready to Showcase Your Skills?</h3>
              <p className="text-gray-500">
                Register now to participate in the Zero Gravity Hackathon 2025 and demonstrate your innovation and
                problem-solving abilities.
              </p>
              <Link href="/register">
                <Button size="lg">
                  Register Your Team
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

