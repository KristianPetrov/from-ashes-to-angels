import Image from "next/image";

const IMAGES = [
  "/holy-hood-elisabeth.png",
  "/kawaii-liz.png",
  "/mother-elisabeth.png",
  "/happy-sad-jester-liz.png",
];

export default function GalleryPage({ params }: { params: { index: string } }) {
  const idx = Math.max(0, Math.min(IMAGES.length - 1, Number(params.index) || 0));
  const src = IMAGES[idx];

  return (
    <main className="max-w-screen-xl mx-auto px-5 py-16 sm:py-24">
      <h1 className="text-2xl sm:text-3xl font-bold">Gallery</h1>
      <div className="mt-6 relative aspect-[16/9] rounded-lg overflow-hidden ring-1 ring-white/10">
        <Image src={src} alt="Gallery image" fill className="object-contain" />
      </div>
    </main>
  );
}


