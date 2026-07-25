import { motion } from "framer-motion";
import {
  Sofa,
  Armchair,
  Layers,
  Shirt,
  Scissors,
  Bed,
  PaintRoller,
  Ruler,
} from "lucide-react";
import StitchDivider from "./StitchDivider";

const SERVICES = [
  {
    icon: Sofa,
    title: "New Sofa Sets",
    desc: "Custom-built sofas in modern or classic design, tailored to your room and fabric choice.",
  },
  {
    icon: Layers,
    title: "Sofa Repairing",
    desc: "Frame, spring, and structural repair that brings tired sofas back to full comfort.",
  },
  {
    icon: Ruler,
    title: "Foam Change",
    desc: "Old, sunken foam replaced with dense, long-lasting foam cut to the exact seat size.",
  },
  {
    icon: Shirt,
    title: "Poshish & Upholstery",
    desc: "Fresh fabric and stitching work, matched to your interior in a wide range of textures.",
  },
  {
    icon: Scissors,
    title: "Loose Covers",
    desc: "Removable, washable covers cut and sewn to fit — easy to clean, easy to refresh.",
  },
  {
    icon: Armchair,
    title: "Dining Chair Repair",
    desc: "Seat padding, joints, and upholstery repaired for a matching, sturdy dining set.",
  },
  {
    icon: Bed,
    title: "Bed Making & Repair",
    desc: "New bed builds and repair work, finished with the same care as our sofas.",
  },
  {
    icon: PaintRoller,
    title: "Polish Work",
    desc: "Wood polish and finishing that restores the natural shine of frames and furniture.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 py-24 md:scroll-mt-28 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">What We Do</p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-cream sm:text-5xl">
            Every stitch, done in-house
          </h2>
          <StitchDivider className="mt-6" />
          <p className="mt-6 text-cream-dim">
            One studio for the full furniture lifecycle — from a first sofa
            to years of repair, refoaming, and refresh work.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {SERVICES.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={item}
              className="group relative overflow-hidden rounded-2xl border border-gold/15 bg-charcoal/60 p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/50 hover:bg-charcoal"
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  boxShadow: "inset 0 0 0 1px rgba(201,162,75,0.15)",
                }}
              />
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-gold/25 bg-gold/5 text-gold-light transition-colors duration-500 group-hover:bg-gold group-hover:text-ink">
                <Icon size={22} strokeWidth={1.6} />
              </div>
              <h3 className="font-display text-xl font-semibold text-cream">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-cream-dim">
                {desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
