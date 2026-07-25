import { motion } from "framer-motion";
import StitchDivider from "./StitchDivider";

const STEPS = [
  {
    n: "01",
    title: "Consultation",
    desc: "Call or WhatsApp us with your sofa, cushion, or repair need — we talk fabric, budget, and timeline.",
  },
  {
    n: "02",
    title: "Measure & Select",
    desc: "Our team visits or receives your measurements, and you choose foam density and fabric at the studio.",
  },
  {
    n: "03",
    title: "Craft & Stitch",
    desc: "Frame work, foam cutting, and hand stitching happen in our Clifton studio with close quality checks.",
  },
  {
    n: "04",
    title: "Deliver & Set Up",
    desc: "Finished pieces are delivered and placed in your home, office, or majlis, ready to use.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/8 blur-[130px]" />
      <div className="relative mx-auto max-w-6xl px-5 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">How It Works</p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-cream sm:text-5xl">
            From first call to finished sofa
          </h2>
          <StitchDivider className="mt-6" />
        </div>

        <div className="relative mt-16 grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent md:block" />
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="relative text-center md:text-left"
            >
              <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-ink font-display text-xl text-gold-light md:mx-0">
                {s.n}
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-cream">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-cream-dim">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
