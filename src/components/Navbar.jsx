import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import logo from "../assets/logo.jpeg";

const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-ink/85 backdrop-blur-md border-b border-gold/15 py-2.5"
          : "bg-transparent py-4 md:py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-10">
        <a href="#top" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="AK Sofa Studio"
            className="h-11 w-11 rounded-full object-cover ring-1 ring-gold/40 transition-transform duration-500 group-hover:scale-105"
          />
          <div className="leading-tight">
            <p className="font-display text-lg tracking-wide text-gold-light md:text-xl">
              AK Sofa Studio
            </p>
            <p className="hidden text-[10px] uppercase tracking-[0.25em] text-cream-dim sm:block">
              New Sofas &middot; Repairing &middot; Cushions
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm tracking-wide text-cream/85 transition-colors hover:text-gold-light after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/923452501165"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-gold/50 bg-gold/10 px-5 py-2 text-sm font-medium text-gold-light transition-all duration-300 hover:bg-gold hover:text-ink"
          >
            <MessageCircle size={16} /> WhatsApp
          </a>
        </nav>

        <button
          className="text-gold-light md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-gold/15 bg-ink/95 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-5">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-3 text-base text-cream/90 transition-colors hover:bg-gold/10 hover:text-gold-light"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="https://wa.me/923452501165"
                target="_blank"
                rel="noreferrer"
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-ink"
              >
                <MessageCircle size={16} /> Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
