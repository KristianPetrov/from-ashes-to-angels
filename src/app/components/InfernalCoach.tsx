import Image from "next/image";

export default function InfernalCoach() {
  return (
    <section id="infernal-coach" className="bg-white/5 border-y border-white/10">
      <div className="max-w-screen-xl mx-auto px-5 py-16 sm:py-24">
        <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-center font-[family-name:var(--font-old-english)] title-outline-glow text-red-glow">
          Liz the Workout Queen — The Infernal Coach
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-[3/4] md:aspect-[2/3] rounded-lg overflow-hidden ring-1 ring-white/10">
            <div className="candle-glow" />
            <Image
              src="/infernal-trainer-liz.png"
              alt="Liz the Infernal Coach"
              fill
              className="relative z-10 object-contain object-center kenburns-subtle"
              priority
            />
          </div>
          <div className="box-red-glow rounded-lg p-6 md:p-8">
            <p className="text-white/90">
              When Liz enters, the air itself bends to her presence. She is both prophecy and punishment — a holy-hood queen draped in fire, commanding iron and sweat like weapons of war. To train with her is to step into the furnace, where weakness burns away and only strength survives.
            </p>
            <p className="mt-4 text-white/90">
              The Infernal Coach doesn’t ask — she demands. Her voice is both scripture and commandment, pulling the warrior out of your bones. Around her, men fall with trembling noodle legs, drenched in sweat, wrecked by her relentless fire. Yet in their collapse, there is reverence — because they know she is carving out something greater.
            </p>
            <p className="mt-4 text-white/90">
              Liz doesn’t just reshape bodies; she resurrects souls. Under her gaze, the ordinary dissolves, and what remains is divine: sculpted lines, iron will, and the aura of a Greek goddess reborn from battle.
            </p>
            <p className="mt-4 text-white/90">
              To follow her is to embrace transformation. From ashes to angels, from mortal to myth, Liz will not only resculpt your body — she will ignite your spirit. She is the Infernal Queen of the gym, and in her kingdom of sweat and steel, you will rise as living proof that fire can sanctify.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


