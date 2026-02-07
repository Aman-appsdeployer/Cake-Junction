import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

/* ✅ VALID IMPORT NAMES */
import hero1 from "@/assets/hero1.png";
import hero2 from "@/assets/hero2.png";
import hero3 from "@/assets/hero3.png";

import heroM1 from "@/assets/hero-1.jpeg";
import heroM2 from "@/assets/hero-2.png";
import heroM3 from "@/assets/hero-3.png";

/* ================= IMAGE SETS ================= */

const desktopImages = [hero1, hero2, hero3];
const mobileImages = [heroM1, heroM2, heroM3];

/* ================= BRAND TYPEWRITER ================= */

const BrandTypewriter = () => {
  const brand = "Cake Junction";
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const speed = isDeleting ? 60 : 130;

    const timer = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? brand.substring(0, prev.length - 1)
          : brand.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === brand) {
        setTimeout(() => setIsDeleting(true), 1400);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting]);

  return (
    <span className="text-gradient-cake inline-block">
      {text}
      <span className="ml-1 animate-pulse">|</span>
    </span>
  );
};

/* ================= HERO ================= */

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  /* ✅ Detect screen size */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* ✅ Choose correct image set */
  const images = isMobile ? mobileImages : desktopImages;

  /* background carousel */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center overflow-hidden"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            alt="Cake background"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4 }}
          />
        </AnimatePresence>

        <div className="absolute inset-0 " />
        <div className="absolute inset-0 " />
      </div>

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-28 sm:pt-32 md:pt-36">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.22 } },
          }}
          className="max-w-3xl"
        >
          
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
