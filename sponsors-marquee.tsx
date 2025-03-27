"use client"

import Image from "next/image"
import { useRef } from "react"

export default function SponsorsMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null)

  // Sponsors data
  const sponsors = [
    { name: "Taxina", image: "/taxina.jpeg?height=100&width=200" },
    { name: "Next Grid", image: "/nextgrid-logo.png?height=100&width=200" },
    { name: "Sap", image: "/sap.png?height=100&width=200" },
    { name: "IFIA Bharat", image: "/ifia_logo.png?height=100&width=200" },
    // Duplicate sponsors to create continuous scrolling effect
    { name: "Taxina", image: "/taxina.jpeg?height=100&width=200" },
    { name: "Next Grid", image: "/nextgrid-logo.png?height=100&width=200" },
    { name: "Sap", image: "/sap.png?height=100&width=200" },
    { name: "IFIA Bharat", image: "/ifia_logo.png?height=100&width=200" },
  ]

  return (
    <section className="w-full py-12 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Sponsors</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            We&apos;re proud to be supported by these amazing organizations
          </p>
        </div>

        <div className="relative w-full overflow-hidden mt-10">
          <div ref={marqueeRef} className="flex animate-marquee items-center space-x-12 py-4">
            {sponsors.map((sponsor, index) => (
              <div key={index} className="flex flex-col items-center justify-center space-y-2 min-w-[180px]">
                <div className="relative h-24 w-40 overflow-hidden rounded-lg border bg-background p-2">
                  <Image
                    src={sponsor.image || "/placeholder.svg"}
                    alt={`${sponsor.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-medium">{sponsor.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

