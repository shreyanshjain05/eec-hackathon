'use client'
import Link from "next/link";
import React from "react";
import Image from "next/image";

const SponsorsSection: React.FC = () => {
  interface Sponsor {
    id: number;
    name: string;
    url: string;
    logo: string;
  }

  const sponsors: Sponsor[] = [
    {
      id: 1,
      name: "Taxina",
      url: "https://taxina.com",
      logo: "/taxina.jpeg",
    },
    {
      id: 2,
      name: "SAP",
      url: "https://sap.com",
      logo: "/sap.png",
    },
    {
      id: 3,
      name: "NextGrid",
      url: "https://nextgrid.com",
      logo: "/nextgrid-logo.png",
    },
    {
      id: 4,
      name: "IFIA Bharat",
      url: "https://ifia.org",
      logo: "/ifia_logo.png",
    },
  ];

  // Duplicate sponsors for infinite effect
  const infiniteSponsors = [...sponsors, ...sponsors, ...sponsors];

  return (
    <section className="w-full py-8 md:py-16 lg:py-16 bg-white text-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-center pb-8">
            Our Sponsors
          </h2>
          
          <div className="w-full overflow-hidden">
            <style jsx>{`
              @keyframes slide {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
              
              .sponsor-wrapper {
                width: 100%;
                overflow: hidden;
              }
              
              .sponsor-carousel {
                display: flex;
                width: 100%; /* Exactly double the viewport width */
                animation: slide 15s linear infinite;
              }
              
              .sponsor-carousel:hover {
                animation-play-state: paused;
              }
              
              .sponsor-item {
                flex: 0 0 25%; /* Each item is exactly 25% of the parent width */
                padding: 0 0;
                display: flex;
                justify-content: center;
                align-items: center;
                min-width: 0;
              }
            `}</style>
            
            <div className="sponsor-wrapper">
              <div className="sponsor-carousel">
                {infiniteSponsors.map((sponsor, index) => (
                  <div key={`${sponsor.id}-${index}`} className="sponsor-item">
                    <Link href={sponsor.url} target="_blank" rel="noopener noreferrer">
                      <Image 
                        src={sponsor.logo}
                        alt={sponsor.name}
                        width={200}
                        height={100}
                        className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;