"use client";

import { motion } from "framer-motion";
import { whatsappHref } from "@/config/site";

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.43 9.43 0 0 1-1.45-5.02C2.6 6.86 6.84 2.62 12.06 2.62c2.52 0 4.9.99 6.68 2.77a9.37 9.37 0 0 1 2.76 6.68c0 5.22-4.24 9.43-9.45 9.43zm8.04-17.47A11.3 11.3 0 0 0 12.05.7C5.78.7.68 5.8.67 12.07c0 2 .52 3.96 1.52 5.69L.57 23.7l6.08-1.6a11.36 11.36 0 0 0 5.4 1.38h.01c6.27 0 11.37-5.1 11.38-11.37 0-3.04-1.19-5.9-3.35-8.05z" />
    </svg>
  );
}

export function WhatsAppFloat() {
  return (
    <motion.a
      href={whatsappHref()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.5 }}
      whileHover={{ scale: 1.06 }}
      className="fixed bottom-5 right-5 z-30 flex size-14 items-center justify-center rounded-full bg-jade text-bone shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] ring-1 ring-bone/15 transition-colors hover:bg-[#25d366] md:bottom-8 md:right-8"
    >
      <span aria-hidden className="absolute inset-0 animate-ping rounded-full bg-jade/40 [animation-duration:2.8s]" />
      <WhatsAppIcon className="relative size-7" />
    </motion.a>
  );
}
