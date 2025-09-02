import Image from "next/image";

export default function MakeoverMage() {
  return (
    <section id="makeover-mage" className="bg-white/5 border-y border-white/10">
      <div className="max-w-screen-xl mx-auto px-5 py-16 sm:py-24">
        <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-center font-[family-name:var(--font-old-english)] title-outline-purple-glow text-purple-glow">
          ✨ The Makeover Mage: Elisabeth ✨
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-[3/4] md:aspect-[2/3] rounded-lg overflow-hidden ring-1 ring-white/10">
            <div className="candle-glow" />
            <Image
              src="/liz-makeover-mage.png"
              alt="Elisabeth the Makeover Mage"
              fill
              className="relative z-10 object-contain object-center kenburns-subtle"
              priority
            />
          </div>
          <div className="box-purple-glow rounded-lg p-6 md:p-8">
            <p className="text-lg sm:text-xl font-semibold text-white text-purple-glow">At From Ashes to Angels, transformation isn’t just about the outside—it’s about the spirit within. That’s why we call Elisabeth our Makeover Mage.</p>
            <p className="mt-4 text-white/90">With hands that feel guided by something higher, Elisabeth works more than hair—she works miracles. Every cut, every braid, every wave seems touched with a kind of artistry that can’t be taught, only gifted. Whether it’s a bold new look or the gentlest touch-up, she sees the beauty waiting to be revealed and brings it to life like magic.</p>
            <p className="mt-4 text-white/90">People say she can do almost anything with hair—and it’s true. But what makes Elisabeth special isn’t just skill. It’s the way she turns an ordinary moment in the chair into a spiritual reset. Sitting with Elisabeth feels like being renewed, uplifted, and reminded that no matter where you’ve been, you can rise again—beautiful, strong, and free.</p>
            <p className="mt-4 text-white/90">Elisabeth is proof that transformation is holy work. And when she’s finished, it’s never “just hair.” It’s a crown of confidence, a mantle of self-worth, a reflection of the light inside you.</p>
          </div>
        </div>
      </div>
    </section>
  );
}


