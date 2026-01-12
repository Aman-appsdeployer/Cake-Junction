import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 140 }}
      className="fixed bottom-6 right-6 z-[999]"
    >
      <div className="group relative">

        {/* Tooltip */}
        <span
          className="absolute right-16 top-1/2 -translate-y-1/2
                     bg-background text-foreground text-sm
                     px-3 py-1 rounded-lg shadow-md
                     opacity-0 group-hover:opacity-100
                     transition-opacity whitespace-nowrap"
        >
          Chat with us on WhatsApp
        </span>

        {/* WhatsApp Button */}
        <motion.a
          href="https://wa.me/917347713573?text=Hello%20Cake%20Junction!%20I%20would%20like%20to%20enquire%20about%20ordering%20a%20cake."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Cake Junction on WhatsApp"
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-14 h-14 rounded-full
                     bg-[#25D366] flex items-center justify-center
                     shadow-xl"
        >
          {/* Pulse Ring (behind button) */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping" />

          {/* Icon */}
          <MessageCircle className="relative w-7 h-7 text-white" />
        </motion.a>

      </div>
    </motion.div>
  );
};

export default WhatsAppFloat;
