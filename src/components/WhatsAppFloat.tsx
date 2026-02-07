import { motion } from "framer-motion";
import { Instagram, PhoneCall } from "lucide-react";

const WhatsAppFloat = () => {
  return (
    <div
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6
                 z-[999] flex flex-col gap-3"
    >
      {/* ================= INSTAGRAM ================= */}
      <motion.a
        href="https://www.instagram.com/cakejunction7/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open Instagram"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 140 }}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.95 }}
        className="
          w-11 h-11 sm:w-12 sm:h-12
          rounded-full
          bg-gradient-to-br from-pink-500 via-rose-500 to-yellow-500
          flex items-center justify-center
          shadow-lg hover:shadow-xl
          ring-0 hover:ring-2 ring-rose-300/40
          transition
        "
      >
        <Instagram className="w-5 h-5 text-white" />
      </motion.a>

      {/* ================= WHATSAPP ================= */}
      <motion.a
        href="https://wa.me/917347713573?text=Hello%20I%20want%20to%20order%20a%20cake"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 140 }}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.95 }}
        className="
          relative
          w-11 h-11 sm:w-12 sm:h-12
          rounded-full
          bg-[#25D366]
          flex items-center justify-center
          shadow-lg hover:shadow-xl
          ring-0 hover:ring-2 ring-emerald-300/40
          transition
        "
      >
        {/* pulse */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping" />

        <PhoneCall className="relative w-5 h-5 text-white" />
      </motion.a>
    </div>
  );
};

export default WhatsAppFloat;














// import { motion } from "framer-motion";
// import { Instagram, PhoneCall } from "lucide-react";

// const WhatsAppFloat = () => {
//   return (
//     <div className="fixed bottom-5 right-4 sm:right-6 z-[999] flex flex-col gap-3">
//       {/* ================= INSTAGRAM ================= */}
//       <motion.a
//         href="https://www.instagram.com/cakejunction7/"
//         target="_blank"
//         rel="noopener noreferrer"
//         aria-label="Instagram"
//         initial={{ scale: 0 }}
//         animate={{ scale: 1 }}
//         transition={{ delay: 0.7, type: "spring", stiffness: 140 }}
//         whileHover={{ scale: 1.12 }}
//         whileTap={{ scale: 0.95 }}
//         className="
//           w-11 h-11 sm:w-12 sm:h-12
//           rounded-full
//           bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500
//           flex items-center justify-center
//           shadow-lg hover:shadow-xl
//           transition-shadow
//         "
//       >
//         <Instagram className="w-5 h-5 text-white" />
//       </motion.a>

//       {/* ================= WHATSAPP ================= */}
//       <motion.a
//         href="https://wa.me/917347713573?text=Hello%20I%20would%20like%20to%20enquire%20about%20event%20planning"
//         target="_blank"
//         rel="noopener noreferrer"
//         aria-label="WhatsApp"
//         initial={{ scale: 0 }}
//         animate={{ scale: 1 }}
//         transition={{ delay: 0.9, type: "spring", stiffness: 140 }}
//         whileHover={{ scale: 1.12 }}
//         whileTap={{ scale: 0.95 }}
//         className="
//           relative
//           w-11 h-11 sm:w-12 sm:h-12
//           rounded-full
//           bg-[#25D366]
//           flex items-center justify-center
//           shadow-lg hover:shadow-xl
//         "
//       >
//         {/* soft pulse */}
//         <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping" />

//         <PhoneCall className="relative w-5 h-5 text-white" />
//       </motion.a>
//     </div>
//   );
// };

// export default WhatsAppFloat;
