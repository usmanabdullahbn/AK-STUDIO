import { motion } from "framer-motion";
import { MessageCircle, Phone, ArrowDown } from "lucide-react";
import logo from "../assets/logo.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16 md:pt-32"
    >
      {/* ambient gold glow */}
      <div className="pointer-events-none absolute left-1/2 top-[-10%] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-gold/15 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-[-15%] right-[-10%] h-[420px] w-[420px] rounded-full bg-gold-deep/10 blur-[130px]" />

      {/* stitched seam lines running across the hero, like piping on a sofa cushion */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.16]"
        preserveAspectRatio="none"
        viewBox="0 0 1440 800"
      >
        <path
          d="M-50 620 C 300 560, 500 700, 800 600 S 1300 520, 1500 600"
          stroke="var(--color-gold)"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="6 8"
        />
        <path
          d="M-50 120 C 250 60, 550 190, 850 110 S 1250 40, 1500 130"
          stroke="var(--color-gold)"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="6 8"
        />
      </svg>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 md:grid-cols-[1.15fr_0.85fr] md:gap-10 md:px-10">
        <div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold-light"
          >
            Karachi&apos;s Craft Upholstery Studio
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="font-display text-[2.6rem] font-semibold leading-[1.08] text-cream sm:text-6xl lg:text-[4.2rem]"
          >
            Sofas built by hand,
            <br />
            <span className="bg-gradient-to-r from-gold-deep via-gold to-gold-light bg-clip-text text-transparent">
              repaired with care.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-6 max-w-lg text-base leading-relaxed text-cream-dim sm:text-lg"
          >
            From brand-new sofa sets to foam, poshish, and loose-cover
            repairs — AK Sofa Studio brings tailor-made comfort to your
            ghar, office, and majlis, finished by hand and delivered on
            time.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="https://wa.me/923452501165"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-ink shadow-[0_0_30px_-8px_rgba(201,162,75,0.6)] transition-all duration-300 hover:shadow-[0_0_40px_-6px_rgba(201,162,75,0.85)]"
            >
              <MessageCircle size={18} className="transition-transform group-hover:rotate-12" />
              Get a Free Quote
            </a>
            <a
              href="tel:+923452501165"
              className="flex items-center gap-2 rounded-full border border-gold/40 px-7 py-3.5 text-sm font-medium text-cream transition-all duration-300 hover:border-gold hover:text-gold-light"
            >
              <Phone size={17} /> Call Now
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-wider text-cream-dim/80"
          >
            {["New Sofas", "Repairing", "Cushions", "Foam Change", "Bed Making"].map(
              (t) => (
                <span key={t} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-gold" /> {t}
                </span>
              )
            )}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative mx-auto flex aspect-square w-64 items-center justify-center rounded-full border border-gold/25 bg-gradient-to-b from-charcoal to-ink sm:w-80 md:w-full md:max-w-sm"
        >
          <div className="absolute inset-4 rounded-full border border-dashed border-gold/25" />
          <img
            src={logo}
            alt="AK Sofa Studio logo — gold monogram with sofa icon"
            className="w-[72%] drop-shadow-[0_0_40px_rgba(201,162,75,0.35)]"
          />
        </motion.div>
      </div>

      <motion.a
        href="#services"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gold/60 md:bottom-8"
        aria-label="Scroll to services"
      >
        <ArrowDown size={22} />
      </motion.a>
    </section>
  );
}
