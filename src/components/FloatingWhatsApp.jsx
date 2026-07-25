import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/923452501165"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with AK Sofa Studio on WhatsApp"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.08 }}
      className="fixed bottom-6 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gold text-ink shadow-[0_0_25px_-4px_rgba(201,162,75,0.7)] md:bottom-8 md:right-8"
    >
      <MessageCircle size={24} strokeWidth={2} />
    </motion.a>
  );
}
