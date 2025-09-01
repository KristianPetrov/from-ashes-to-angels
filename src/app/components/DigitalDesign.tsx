"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const IMAGES = [
  "/holy-hood-elisabeth.png",
  "/kawaii-liz.png",
  "/mother-elisabeth.png",
  "/happy-sad-jester-liz.png",
  "/wizard-liz.png",
  "/elisabeth-from-ashes-to-angels.png",
  "/elisabeth-holy-bling.png",
];

export default function DigitalDesign() {
  const [slideIndex, setSlideIndex] = useState(0);
  const touchStartXRef = useRef<number | null>(null);
  const touchMovedRef = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % IMAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
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
              setSlideIndex((prev) => {
                if (dx < 0) return (prev + 1) % IMAGES.length;
                return (prev - 1 + IMAGES.length) % IMAGES.length;
              });
            }
          }}
          onClick={(e) => {
            if (touchMovedRef.current) {
              e.preventDefault();
              touchMovedRef.current = false;
            }
          }}
        >
          <div className="candle-glow" />
          {IMAGES.map((src, idx) => (
            <Image
              key={src}
              src={src}
              alt={`Digital design example ${idx + 1}`}
              fill
              className={`object-contain transition-opacity duration-700 ease-in-out ${idx === slideIndex ? "opacity-100 kenburns-in" : "opacity-0"}`}
              priority={idx === 0}
            />
          ))}
        </Link>
        <div className="mt-4 grid grid-cols-4 sm:grid-cols-8 gap-2">
          {IMAGES.map((src, idx) => (
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
  );
}


