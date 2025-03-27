import { Calendar, Award, Code, Users } from "lucide-react"

export default function EventTimeline() {
  const timelineEvents = [
    {
      icon: <Users className="h-5 w-5" />,
      phase: "Phase 1: Registration & PPT Submission",
      date: "March 27 - April 01, 2025",
      description: "Teams register and submit a PowerPoint presentation outlining their proposed solution",
    },
    {
      icon: <Calendar className="h-5 w-5" />,
      phase: "Phase 2: Idea Pitching",
      date: "April 2 - April 3, 2025",
      description: "Top 100 teams present their ideas to a jury of industry professionals and mentors",
    },
    {
      icon: <Users className="h-5 w-5" />,
      phase: "Final Team Selection",
      date: "April 03, 2025",
      description: "Final 50 teams selected for the 48-hour hackathon",
    },
    {
      icon: <Code className="h-5 w-5" />,
      phase: "Phase 3: 48-Hour Hackathon",
      date: "April 4-6, 2025",
      description: "48-hour non-stop coding and development marathon at MLCP Labs",
    },
    {
      icon: <Award className="h-5 w-5" />,
      phase: "Final Presentation & Awards",
      date: "April 6, 2025",
      description: "Final presentations, judging, and award ceremony",
    },
  ]

  return (
    <section id="timeline" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2 max-w-[800px]">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
              Event Timeline
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Key dates and milestones for the Zero Gravity Hackathon 2025
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 mt-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/40 before:to-transparent">
          {timelineEvents.map((event, index) => (
            <div
              key={index}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-primary shadow-md shadow-primary/20 text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-all duration-300 group-hover:scale-110">
                {event.icon}
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group-hover:border-primary/20 group-hover:-translate-y-1">
                <div className="font-bold text-gray-900 text-base sm:text-lg">{event.phase}</div>
                <div className="text-sm text-primary font-medium mt-1">{event.date}</div>
                <div className="mt-2 text-gray-600 text-sm sm:text-base">{event.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

