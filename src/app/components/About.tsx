import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-white/5 border-y border-white/10">
      <div className="max-w-screen-xl mx-auto px-5 py-16 sm:py-24">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-center font-[family-name:var(--font-old-english)] title-outline-glow text-red-glow">About From Ashes To Angels</h2>
        <div className="mt-8 relative w-full md:mx-[calc(50%-50vw)] md:w-screen aspect-[4/3] md:aspect-[16/9] overflow-hidden ring-1 ring-white/10">
          <div className="candle-glow" />
          <Image
            src="/from-ashes-to-angels-mary.png"
            alt="From Ashes to Angels - Mary"
            fill
            className="relative z-10 object-cover object-center"
          />
        </div>
        <div className="mt-8 box-red-glow rounded-lg border border-white/10 p-6">
          <p className="text-white/90">
            From Ashes To Angels was born out of the fire — a vision to turn pain into power and brokenness into beauty. We believe that every scar tells a story, and every story can rise again. What the world once called ruined, God calls redeemed.
          </p>
          <p className="mt-4 text-white/90">
            Our mission is to walk with women who’ve been beaten down by addiction, trauma, or life’s battles and help them discover the angel within. Through mentorship, creative expression, and transformation, we give them the tools to rebuild their confidence, reclaim their dignity, and step boldly into a new chapter of life.
          </p>
          <p className="mt-4 text-white/90">
            This isn’t just about beauty on the outside — it’s about inner healing, strength, and testimony. From photoshoots to real-life opportunities, we showcase women as living proof that from the ashes of the past, angels can rise.
          </p>
          <p className="mt-4 text-white/90">
            We are more than a brand. We are a movement of resilience, faith, and holy-hood transformation. Every face carries a message: You are not forgotten. You are not broken beyond repair. You are chosen, set free, and radiant with purpose.
          </p>
        </div>
      </div>
    </section>
  );
}


