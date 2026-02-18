import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CakeSlice } from "lucide-react";
import { useEffect, useState } from "react";

/* IMAGES */
import hero1 from "@/assets/hero1.png";
import hero2 from "@/assets/hero2.png";
import hero3 from "@/assets/hero3.png";

import heroM1 from "@/assets/hero-1.jpeg";
import heroM2 from "@/assets/hero-2.png";
import heroM3 from "@/assets/hero-3.png";

/* IMAGE SETS */

const desktopImages = [hero1, hero2, hero3];
const mobileImages = [heroM1, heroM2, heroM3];

/* ================= HERO ================= */

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  /* screen detect */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const images = isMobile ? mobileImages : desktopImages;

  /* carousel */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      id="home"
      aria-label="Cake Junction online cake delivery hero section"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center overflow-hidden"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            alt="Custom birthday and wedding cakes from Cake Junction bakery"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4 }}
          />
        </AnimatePresence>

        {/* dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/45" />
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
          className="max-w-3xl text-white"
        >
          {/* small label */}
          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="text-rose-300 font-semibold mb-3 text-sm sm:text-base"
          >
            Online Cake Delivery & Custom Bakery
          </motion.p>

          {/* ✅ MAIN SEO H1 */}
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="font-bold leading-tight mb-6
                       text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Fresh Custom Cakes for
            <span className="block text-rose-400">
              Birthdays, Weddings & Celebrations
            </span>
          </motion.h1>

          {/* SEO paragraph */}
          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="text-gray-100 mb-8 text-sm sm:text-base leading-relaxed max-w-xl"
          >
            Order handcrafted birthday cakes, wedding cakes, and designer cakes
            online from Cake Junction. Premium ingredients, custom designs,
            and same-day cake delivery available.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="/shop"
              aria-label="Shop cakes online"
              className="inline-flex items-center justify-center gap-2
                         bg-rose-500 hover:bg-rose-600
                         text-white font-semibold
                         px-6 py-3 rounded-full transition shadow-lg"
            >
              <CakeSlice className="w-5 h-5" />
              Shop Cakes
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="/contact"
              aria-label="Order custom cake"
              className="inline-flex items-center justify-center gap-2
                         bg-white/90 hover:bg-white
                         text-gray-900 font-semibold
                         px-6 py-3 rounded-full transition shadow"
            >
              Order Custom Cake
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;




// import { AnimatePresence, motion } from "framer-motion";
// import { useEffect, useState } from "react";

// /* ✅ VALID IMPORT NAMES */
// import hero1 from "@/assets/hero1.png";
// import hero2 from "@/assets/hero2.png";
// import hero3 from "@/assets/hero3.png";

// import heroM1 from "@/assets/hero-1.jpeg";
// import heroM2 from "@/assets/hero-2.png";
// import heroM3 from "@/assets/hero-3.png";

// /* ================= IMAGE SETS ================= */

// const desktopImages = [hero1, hero2, hero3];
// const mobileImages = [heroM1, heroM2, heroM3];

// /* ================= BRAND TYPEWRITER ================= */

// const BrandTypewriter = () => {
//   const brand = "Cake Junction";
//   const [text, setText] = useState("");
//   const [isDeleting, setIsDeleting] = useState(false);

//   useEffect(() => {
//     const speed = isDeleting ? 60 : 130;

//     const timer = setTimeout(() => {
//       setText((prev) =>
//         isDeleting
//           ? brand.substring(0, prev.length - 1)
//           : brand.substring(0, prev.length + 1)
//       );

//       if (!isDeleting && text === brand) {
//         setTimeout(() => setIsDeleting(true), 1400);
//       } else if (isDeleting && text === "") {
//         setIsDeleting(false);
//       }
//     }, speed);

//     return () => clearTimeout(timer);
//   }, [text, isDeleting]);

//   return (
//     <span className="text-gradient-cake inline-block">
//       {text}
//       <span className="ml-1 animate-pulse">|</span>
//     </span>
//   );
// };

// /* ================= HERO ================= */

// const Hero = () => {
//   const [index, setIndex] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);

//   /* ✅ Detect screen size */
//   useEffect(() => {
//     const check = () => setIsMobile(window.innerWidth < 768);
//     check();
//     window.addEventListener("resize", check);
//     return () => window.removeEventListener("resize", check);
//   }, []);

//   /* ✅ Choose correct image set */
//   const images = isMobile ? mobileImages : desktopImages;

//   /* background carousel */
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % images.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <section
//       id="home"
//       className="relative min-h-[92vh] sm:min-h-screen flex items-center overflow-hidden"
//     >
//       {/* ================= BACKGROUND ================= */}

//       <div className="absolute inset-0 z-0">
//         <AnimatePresence mode="wait">
//           <motion.img
//             key={index}
//             src={images[index]}
//             alt="Cake background"
//             className="absolute inset-0 w-full h-full object-cover"
//             initial={{ opacity: 0, scale: 1.06 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 1.4 }}
//           />
//         </AnimatePresence>

//         <div className="absolute inset-0 " />
//         <div className="absolute inset-0 " />
//       </div>

//       {/* ================= CONTENT ================= */}

//       <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-28 sm:pt-32 md:pt-36">
//         <motion.div
//           initial="hidden"
//           animate="show"
//           variants={{
//             hidden: {},
//             show: { transition: { staggerChildren: 0.22 } },
//           }}
//           className="max-w-3xl"
//         >
          
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
