import heroImage from "@/assets/img3.jpg";
import { motion } from "framer-motion";
import { CakeSlice, Phone, Star } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Cake Junction Cakes"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-24">
        <div className="max-w-3xl text-white">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="uppercase tracking-widest text-primary font-medium mb-4"
          >
            Freshly Baked Happiness
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6"
          >
            Delicious Cakes for <br /> Every Celebration
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-200 text-lg mb-8"
          >
            Handcrafted cakes made with premium ingredients for birthdays,
            weddings, and special moments.
          </motion.p>

          <div className="flex flex-wrap items-center gap-6 mb-8">
            <a
              href="/service"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-primary/90 font-semibold"
            >
              <CakeSlice className="w-5 h-5" />
              Explore Cakes
            </a>

            <div className="flex items-center gap-3">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-sm text-gray-200">
                4.9/5 Customer Rating
              </span>
            </div>
          </div>

          <a
            href="tel:+919999999999"
            className="inline-flex items-center gap-2 hover:text-primary"
          >
            <Phone className="w-5 h-5" />
            Order Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;





// import heroImage from "@/assets/img3.jpg";
// import { motion } from "framer-motion";
// import { CakeSlice, Phone, Star } from "lucide-react";

// const Hero = () => {
//   return (
//     <section id="home" className="relative min-h-screen flex items-center">
//       {/* Background Image */}
//       <div className="absolute inset-0 z-0">
//         <img
//           src={heroImage}
//           alt="Delicious Cakes at Cake Junction"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
//       </div>

//       {/* Content */}
//       <div className="container mx-auto px-4 relative z-10 pt-24">
//         <div className="max-w-3xl text-white">
          
//           {/* Tagline */}
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="uppercase tracking-widest text-pink-400 font-medium mb-4"
//           >
//             Freshly Baked Happiness 
//           </motion.p>

//           {/* Heading */}
//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
//           >
//             Delicious Cakes for <br />
//             Every Celebration
//           </motion.h1>

//           {/* Description */}
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             className="text-gray-200 text-lg mb-8"
//           >
//             From birthdays to weddings, Cake Junction brings you freshly baked,
//             handcrafted cakes made with love and premium ingredients.
//           </motion.p>

//           {/* CTA + Rating */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className="flex flex-wrap items-center gap-6 mb-8"
//           >
//             <a
//               href="#menu"
//               className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-pink-500 hover:bg-pink-600 transition font-semibold"
//             >
//               <CakeSlice className="w-5 h-5" />
//               Explore Cakes
//             </a>

//             {/* Rating */}
//             <div className="flex items-center gap-3">
//               <div className="flex text-yellow-400">
//                 {[...Array(5)].map((_, i) => (
//                   <Star key={i} className="w-4 h-4 fill-current" />
//                 ))}
//               </div>
//               <span className="text-sm text-gray-200">
//                 4.9/5 Loved by Customers
//               </span>
//             </div>
//           </motion.div>

//           {/* Phone */}
//           <motion.a
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.6 }}
//             href="tel:+919999999999"
//             className="inline-flex items-center gap-2 text-white hover:text-pink-400 transition"
//           >
//             <Phone className="w-5 h-5" />
//             <span className="font-medium">Order Now</span>
//           </motion.a>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1, duration: 1 }}
//         className="absolute bottom-8 left-1/2 -translate-x-1/2"
//       >
//         <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
//           <motion.div
//             animate={{ y: [0, 12, 0] }}
//             transition={{ duration: 1.5, repeat: Infinity }}
//             className="w-1.5 h-1.5 bg-pink-400 rounded-full"
//           />
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;
