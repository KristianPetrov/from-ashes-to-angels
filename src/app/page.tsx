import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import MakeoverMage from "./components/MakeoverMage";
import DigitalDesign from "./components/DigitalDesign";
import Process from "./components/Process";
import Impact from "./components/Impact";
import Twist from "./components/Twist";

export default function Home() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "From Ashes To Angels",
    url: siteUrl,
    logo: "/elisabeth-from-ashes-to-angels.png",
    sameAs: ["https://setfreedigitaldisciples.com"],
  };
  const seriesLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWorkSeries",
    name: "From Ashes To Angels: Documentary Series",
    url: `${siteUrl}#twist`,
    about: {
      "@type": "Thing",
      name: "Transformational stories of recovery and renewal",
    },
  };

  return (
    <div id="top" className="font-sans">
      <Hero />
      <About />
      <MakeoverMage />
      <DigitalDesign />
      <Process />
      <Impact />
      <Twist />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seriesLd) }}
      />
    </div>
  );
}
