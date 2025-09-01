"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Home() {
  const slideshowImages = [
    "/holy-hood-elisabeth.png",
    "/kawaii-liz.png",
    "/mother-elisabeth.png",
    "/happy-sad-jester-liz.png",
  ];
  const [slideIndex, setSlideIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const touchStartXRef = useRef<number | null>(null);
  const touchMovedRef = useRef(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slideshowImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isGalleryOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsGalleryOpen(false);
      if (e.key === "ArrowRight") setGalleryIndex((i) => (i + 1) % slideshowImages.length);
      if (e.key === "ArrowLeft") setGalleryIndex((i) => (i - 1 + slideshowImages.length) % slideshowImages.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isGalleryOpen, slideshowImages.length]);
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

          The Vision
        </h1>
        <p className="mt-4 text-xl sm:text-lg text-white/80 max-w-3xl mx-auto text-center text-red-glow">
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
          <div className="mt-8 relative mx-[calc(50%-50vw)] w-screen aspect-[4/3] md:aspect-[16/9] overflow-hidden ring-1 ring-white/10">
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

      <section id="digital-design" className="max-w-screen-xl mx-auto px-5 py-16 sm:py-24">
        <h2 className="text-2xl sm:text-3xl font-bold">Digital Design</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <Link
            href={`/gallery/${slideIndex}`}
            scroll={false}
            className="relative aspect-[4/3] rounded-lg overflow-hidden ring-1 ring-white/10 cursor-zoom-in"
            title="Open gallery"
            onTouchStart={(e) => {
              touchStartXRef.current = e.touches[0]?.clientX ?? null;
              touchMovedRef.current = false;
            }}
            onTouchMove={(e) => {
              if (touchStartXRef.current == null) return;
              const dx = (e.touches[0]?.clientX ?? 0) - touchStartXRef.current;
              if (Math.abs(dx) > 10) {
                touchMovedRef.current = true;
              }
            }}
            onTouchEnd={(e) => {
              const startX = touchStartXRef.current;
              touchStartXRef.current = null;
              if (startX == null) return;
              const endX = e.changedTouches?.[0]?.clientX ?? startX;
              const dx = endX - startX;
              if (Math.abs(dx) > 50) {
                // Swipe
                setSlideIndex((prev) => {
                  if (dx < 0) return (prev + 1) % slideshowImages.length; // left swipe -> next
                  return (prev - 1 + slideshowImages.length) % slideshowImages.length; // right swipe -> prev
                });
              }
            }}
            onClick={(e) => {
              // If the user swiped, don't open modal
              if (touchMovedRef.current) {
                e.preventDefault();
                touchMovedRef.current = false;
              }
            }}
          >
            <div className="candle-glow" />
            {slideshowImages.map((src, idx) => (
              <Image
                key={src}
                src={src}
                alt={`Digital design example ${idx + 1}`}
                fill
                className={`object-cover transition-opacity duration-700 ease-in-out ${idx === slideIndex ? "opacity-100 kenburns-in" : "opacity-0"}`}
                priority={idx === 0}
              />
            ))}
          </Link>
          {/* Full gallery thumbnails under the main image */}
          <div className="mt-4 grid grid-cols-4 sm:grid-cols-8 gap-2">
            {slideshowImages.map((src, idx) => (
              <button
                key={`grid-${src}`}
                type="button"
                className={`relative rounded-md overflow-hidden ring-1 ${idx === slideIndex ? "ring-red-500" : "ring-white/20"}`}
                onClick={() => setSlideIndex(idx)}
                aria-label={`Select image ${idx + 1}`}
                aria-current={idx === slideIndex ? "true" : undefined}
              >
                <Image src={src} alt="Gallery thumbnail" width={160} height={100} className="object-cover w-full h-full" />
              </button>
            ))}
          </div>
          <div className="box-red-glow rounded-lg border border-white/10 p-6 mt-6">
            <p className="text-white/90">
              We create awesome artistic digital styles from their pictures — bold, expressive, and
              uniquely crafted to amplify each story.
            </p>
            <p className="mt-4 text-white/80">
              From surreal composites to stylized portraits, our edits blend resilience, faith, and
              aesthetic edge so every image feels iconic.
            </p>
          </div>
        </div>
      </section>

      {/* Route-driven modal handled by parallel @modal segment */}

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
        <h2 className="text-2xl sm:text-3xl font-bold">Documentary Series</h2>
        <p className="mt-4 text-white/80 max-w-3xl">

          Showing before-and-after transformations, telling their stories, and
          inspiring others who are still struggling. That not only builds the
          brand but also becomes a movement.
        </p>
      </section>


    </div>
  );
}
