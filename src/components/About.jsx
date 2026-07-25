import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import logo from "../assets/logo.jpeg";

const POINTS = [
  "Quality craftsmanship on every sofa, chair, and bed",
  "Clean, careful finishing — no shortcuts on stitching",
  "Reasonable, transparent rates agreed before work starts",
  "Modern and classic designs for home, office, and majlis",
];

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-24 md:scroll-mt-28 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-5 md:grid-cols-2 md:px-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-2 flex items-center justify-center md:order-1"
        >
          <div className="relative flex aspect-square w-full max-w-sm items-center justify-center rounded-3xl border border-gold/20 bg-gradient-to-br from-charcoal via-ink to-charcoal p-10">
            <div className="absolute inset-6 rounded-2xl border border-dashed border-gold/20" />
            <img
              src={logo}
              alt="AK Sofa Studio monogram and sofa emblem"
              className="w-full drop-shadow-[0_0_35px_rgba(201,162,75,0.25)]"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 md:order-2"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-gold">About the Studio</p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-cream sm:text-5xl">
            A Karachi workshop for furniture that lasts
          </h2>
          <p className="mt-6 leading-relaxed text-cream-dim">
            AK Sofa Studio handles every kind of sofa and furniture work,
            done the professional way — building new sofa sets, repairing
            old ones, changing foam and poshish, sewing loose covers, and
            restoring dining chairs, beds, and wood polish. Every piece is
            made to fit your drawing room, bedroom, or office, in a design
            you choose.
          </p>

          <ul className="mt-8 space-y-3.5">
            {POINTS.map((p) => (
              <li key={p} className="flex items-start gap-3 text-cream/90">
                <CheckCircle2
                  size={19}
                  className="mt-0.5 shrink-0 text-gold"
                  strokeWidth={1.7}
                />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
