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

        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
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
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0 },
            }}
            className="uppercase tracking-widest text-primary font-semibold mb-3 sm:mb-4 text-xs sm:text-sm"
          >
            Freshly Baked Happiness
          </motion.p>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 32 },
              show: { opacity: 1, y: 0 },
            }}
            className="font-serif font-bold text-white leading-tight mb-5 sm:mb-6 text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Delicious Cakes for <br className="hidden xs:block" />
            Every Celebration <BrandTypewriter />
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: { opacity: 1, y: 0 },
            }}
            className="text-white/85 max-w-xl mb-8 sm:mb-10 leading-relaxed text-sm sm:text-base md:text-lg"
          >
            Handcrafted cakes made with premium ingredients for birthdays,
            weddings, corporate events, and custom celebrations.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: { opacity: 1, y: 0 },
            }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="/contact" className="btn-gold text-center w-full sm:w-auto">
              Order Your Cake
            </a>

            <a href="#menu" className="btn-outline-gold text-center w-full sm:w-auto">
              View Menu
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
