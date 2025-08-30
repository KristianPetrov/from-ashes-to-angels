import Image from "next/image";

export default function Home() {
  return (
    <div id="top" className="font-sans">
      <section className="max-w-screen-xl mx-auto px-5 py-16 sm:py-24">
        <div className="relative mx-auto w-full max-w-4xl aspect-[4/3] sm:aspect-[16/9] rounded-lg overflow-hidden ring-1 ring-white/10">
          <div className="candle-glow" />
          <Image
            src="/from-ashes-to-angels-fire.png"
            alt="From Ashes to Angels - Fire"
            fill
            className="relative z-10 object-contain"
            priority
          />
        </div>
        <h1 className="mt-8 text-4xl sm:text-5xl font-extrabold tracking-tight text-center font-[family-name:var(--font-old-english)] title-outline-glow text-red-glow">
          From Ashes To Angels
        </h1>
        <p className="mt-4 text-xl sm:text-lg text-white/80 max-w-3xl mx-auto text-center text-red-glow">
          The Vision
        </p>
        <p className="mt-2 text-white/70 max-w-3xl mx-auto text-center text-red-glow">
          A modeling and talent agency with a recovery focus. Instead of just
          scouting polished talent, the agency seeks out women who have survived
          addiction, trauma, or hardship. The mission is to help them rebuild
          confidence, reclaim their beauty, and showcase their strength.
        </p>
      </section>

      <section id="about" className="bg-white/5 border-y border-white/10">
        <div className="max-w-screen-xl mx-auto px-5 py-16 sm:py-24">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-center font-[family-name:var(--font-old-english)] title-outline-glow text-red-glow">About From Ashes To Angels</h2>
          <div className="mt-8 box-red-glow rounded-lg border border-white/10 p-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="relative aspect-[3/2] md:aspect-[16/9] rounded-lg overflow-hidden ring-1 ring-white/10 md:col-span-7 lg:col-span-8">
                <Image
                  src="/from-ashes-to-angels-mary.png"
                  alt="From Ashes to Angels - Mary"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="md:col-span-5 lg:col-span-4">
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
          </div>
        </div>
      </section>

      <section id="process" className="max-w-screen-xl mx-auto px-5 py-16 sm:py-24">
        <h2 className="text-2xl sm:text-3xl font-bold">The Process</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-lg border border-white/10 p-6 bg-white/5">
            <h3 className="font-semibold">Intake & Mentorship</h3>
            <p className="mt-2 text-white/80">
              Work with women in recovery programs, shelters, or sober living
              homes. Offer mentorship, coaching, and wellness support.
            </p>
          </div>
          <div className="rounded-lg border border-white/10 p-6 bg-white/5">
            <h3 className="font-semibold">Makeover & Self-Care</h3>
            <p className="mt-2 text-white/80">
              Professional stylists, fitness trainers, and nutritionists help
              each woman clean up her appearance in healthy, sustainable ways.
            </p>
          </div>
          <div className="rounded-lg border border-white/10 p-6 bg-white/5">
            <h3 className="font-semibold">Portfolio & Branding</h3>
            <p className="mt-2 text-white/80">
              Give them professional photoshoots, model training, and media kits
              so they can book real jobs.
            </p>
          </div>
        </div>
        <div className="mt-6 rounded-lg border border-white/10 p-6 bg-white/5">
          <h3 className="font-semibold">Opportunities</h3>
          <p className="mt-2 text-white/80">
            Partner with fashion brands, lifestyle companies, and
            recovery-minded organizations that want to represent real, authentic
            stories of resilience and transformation.
          </p>
        </div>
      </section>

      <section id="impact" className="bg-white/5 border-y border-white/10">
        <div className="max-w-screen-xl mx-auto px-5 py-16 sm:py-24 grid gap-6 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-semibold">For the women</h3>
            <p className="mt-2 text-white/80">
              It’s not just about modeling; it’s about rebuilding dignity and
              opportunity.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">For society</h3>
            <p className="mt-2 text-white/80">
              It changes the perception of what beauty looks like, showing that
              recovery is powerful and inspiring.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">For business</h3>
            <p className="mt-2 text-white/80">
              Brands are hungry for authenticity and diverse stories — this
              gives them that while also supporting a meaningful cause.
            </p>
          </div>
        </div>
      </section>

      <section id="twist" className="max-w-screen-xl mx-auto px-5 py-16 sm:py-24">
        <h2 className="text-2xl sm:text-3xl font-bold">Extra Twist</h2>
        <p className="mt-4 text-white/80 max-w-3xl">
          The agency could also build a social media documentary series:
          showing before-and-after transformations, telling their stories, and
          inspiring others who are still struggling. That not only builds the
          brand but also becomes a movement.
        </p>
      </section>


    </div>
  );
}
