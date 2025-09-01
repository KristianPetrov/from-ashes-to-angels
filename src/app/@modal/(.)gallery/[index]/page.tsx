"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useMemo } from "react";

const IMAGES = [
  "/excorcism-baddie.png",
  "/excorcism-baddie-death.png",
  "/excorcism-baddie-bw.png",
  "/sanctified-desire.png",
];

export default function GalleryModal({ params }: { params: { index: string } }) {
  const router = useRouter();
  const idx = Math.max(0, Math.min(IMAGES.length - 1, Number(params.index) || 0));
  const src = useMemo(() => IMAGES[idx], [idx]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") router.back();
      if (e.key === "ArrowRight") router.push(`/gallery/${(idx + 1) % IMAGES.length}`);
      if (e.key === "ArrowLeft") router.push(`/gallery/${(idx - 1 + IMAGES.length) % IMAGES.length}`);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [router, idx]);

  return (
    <div
      className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      onClick={() => router.back()}
    >
      <div className="relative w-screen max-w-5xl h-[80vh] mx-4" onClick={(e) => e.stopPropagation()}>
        <div className="candle-glow" />
        <Image src={src} alt="Gallery image" fill className="relative z-10 object-contain" priority />
        <button
          aria-label="Previous image"
          className="absolute left-2 top-1/2 -translate-y-1/2 nav-button-glow"
          onClick={() => router.push(`/gallery/${(idx - 1 + IMAGES.length) % IMAGES.length}`)}
        >
          ‹
        </button>
        <button
          aria-label="Next image"
          className="absolute right-2 top-1/2 -translate-y-1/2 nav-button-glow"
          onClick={() => router.push(`/gallery/${(idx + 1) % IMAGES.length}`)}
        >
          ›
        </button>
        <button aria-label="Close" className="absolute top-2 right-2 nav-button-glow" onClick={() => router.back()}>
          ✕
        </button>
      </div>
    </div>
  );
}


