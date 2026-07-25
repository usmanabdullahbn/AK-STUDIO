import { motion } from "framer-motion";
import { MessageCircle, Phone, MapPin } from "lucide-react";
import StitchDivider from "./StitchDivider";

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-7.9h2.65l.4-3.08h-3.05V8.05c0-.89.25-1.5 1.52-1.5h1.63V3.85C15.9 3.78 14.9 3.7 13.75 3.7c-2.4 0-4.05 1.47-4.05 4.15v2.17H7.05v3.08h2.65V21h3.8z" />
    </svg>
  );
}
function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TikTokIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14.4 3h2.3c.4 1.7 1.3 2.8 3 3.7v2.4c-1.1-.2-2.2-.6-3.2-1.3v7.7c0 2.8-2.2 5-5 5s-5-2.2-5-5 2.2-5 5-5c.4 0 .8.1 1.2.2v2.6c-.3-.1-.6-.2-.9-.2-1.7 0-3.1 1.3-3.1 3.1s1.4 3.1 3.1 3.1 3.1-1.3 3.1-3.1V3Z" />
    </svg>
  );
}

const PHONES = [
  { label: "0345 2501165", tel: "+923452501165", wa: "923452501165" },
  { label: "0305 2608889", tel: "+923052608889", wa: "923052608889" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Get In Touch</p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-cream sm:text-5xl">
            Let&apos;s talk about your sofa
          </h2>
          <StitchDivider className="mt-6" />
          <p className="mt-6 text-cream-dim">
            Message us on WhatsApp for the fastest reply, or call directly —
            our studio in Clifton is open for walk-ins.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-gold/15 bg-charcoal/60 p-8"
          >
            <h3 className="font-display text-2xl font-semibold text-cream">
              Call or WhatsApp
            </h3>
            <div className="mt-6 space-y-4">
              {PHONES.map((p) => (
                <div
                  key={p.tel}
                  className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-gold/10 bg-ink/40 px-5 py-4"
                >
                  <a
                    href={`tel:${p.tel}`}
                    className="flex items-center gap-2.5 text-cream transition-colors hover:text-gold-light"
                  >
                    <Phone size={17} className="text-gold" /> {p.label}
                  </a>
                  <a
                    href={`https://wa.me/${p.wa}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-full bg-gold/10 px-4 py-2 text-xs font-medium text-gold-light transition-colors hover:bg-gold hover:text-ink"
                  >
                    <MessageCircle size={14} /> Chat
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61563059807389"
                target="_blank"
                rel="noreferrer"
                aria-label="AK Sofa Studio on Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/25 text-gold-light transition-all duration-300 hover:border-gold hover:bg-gold hover:text-ink"
              >
                <FacebookIcon className="h-[18px] w-[18px]" />
              </a>
              <a
                href="https://www.instagram.com/ak_sofa_studio"
                target="_blank"
                rel="noreferrer"
                aria-label="AK Sofa Studio on Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/25 text-gold-light transition-all duration-300 hover:border-gold hover:bg-gold hover:text-ink"
              >
                <InstagramIcon className="h-[18px] w-[18px]" />
              </a>
              <a
                href="https://www.tiktok.com/@ak_sofa_studio?_r=1&_t=ZS-95fCEW6AoRc"
                target="_blank"
                rel="noreferrer"
                aria-label="AK Sofa Studio on TikTok"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/25 text-gold-light transition-all duration-300 hover:border-gold hover:bg-gold hover:text-ink"
              >
                <TikTokIcon className="h-[18px] w-[18px]" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-gold/15 bg-charcoal/60 p-8"
          >
            <h3 className="font-display text-2xl font-semibold text-cream">
              Visit the Studio
            </h3>
            <div className="mt-6 flex items-start gap-3 text-cream/90">
              <MapPin size={19} className="mt-0.5 shrink-0 text-gold" />
              <p className="leading-relaxed">
                Samwood Shopping Mall, Block 2, Clifton, Karachi
              </p>
            </div>
            <a
              href="https://share.google/ALhG7qNIw6MlBeCu8"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold/40 px-6 py-3 text-sm font-medium text-cream transition-all duration-300 hover:border-gold hover:text-gold-light"
            >
              <MapPin size={16} /> Get Directions
            </a>

            <div className="mt-8 border-t border-gold/10 pt-6">
              <p className="text-sm text-cream-dim">
                Ghar, office, majlis, drawing room, or bedroom — bring the
                design you have in mind and we&apos;ll bring it to life.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
