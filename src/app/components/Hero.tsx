import Image from "next/image";

export default function Hero() {
  return (
    <section className="max-w-screen-xl mx-auto px-5 py-16 sm:py-24">
      <div className="flex justify-center">
        <div className="relative mx-auto w-full max-w-8xl aspect-[4/3] sm:aspect-[16/9]">
          <div className="candle-glow-strong" />
          <div className="absolute inset-0 breathe">
            <Image
              src="/elisabeth-from-ashes-to-angels.png"
              alt="From Ashes to Angels - Elisabeth"
              fill
              className="relative z-10 object-contain"
              priority
            />
            <div className="edge-wave-layer absolute inset-0 flag-wave-edges">
              <Image
                src="/elisabeth-from-ashes-to-angels.png"
                alt="From Ashes to Angels - Elisabeth edge wave"
                fill
                className="relative z-20 object-contain edge-mask"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <h1 className="mt-8 text-5xl sm:text-6xl font-extrabold tracking-tight text-center font-[family-name:var(--font-old-english)] title-outline-glow text-red-glow">
        The Vision
      </h1>
      <p className="mt-4 text-xl sm:text-lg text-white/90 font-bold max-w-4xl mx-auto text-center text-red-glow">
        A modeling and talent agency with a recovery focus. Instead of just
        scouting polished talent, the agency seeks out women who have survived
        addiction, trauma, or hardship. The mission is to help them rebuild
        confidence, reclaim their beauty, and showcase their strength.
      </p>
    </section>
  );
}


