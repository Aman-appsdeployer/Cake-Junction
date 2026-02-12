import ctaCake from "@/assets/cake1.png";
import { motion } from "framer-motion";
import { ArrowRight, CakeSlice } from "lucide-react";

const CTABanner = () => {
  return (
    <section className=" sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 items-center">

          {/* ================= LEFT ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <p className="text-rose-600 font-semibold text-sm sm:text-base mb-3">
              Order Your Cake
            </p>

            <h2 className="font-bold text-gray-900 leading-tight mb-6
                           text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Make Every Celebration <br />
              <span className="bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
                Sweeter with Cake Junction
              </span>
            </h2>

            <p className="text-gray-600 mb-8 sm:mb-10 leading-relaxed text-sm sm:text-base">
              From birthdays and weddings to custom celebrations,
              our cakes are handcrafted using premium ingredients
              and designed to impress.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">

              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2
                           bg-rose-500 hover:bg-rose-600
                           text-white font-medium
                           px-6 py-3 rounded-full
                           transition shadow"
              >
                <CakeSlice className="w-5 h-5" />
                Order Now
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/917347713573"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2
                           border border-rose-400 text-rose-600
                           hover:bg-rose-50
                           font-medium
                           px-6 py-3 rounded-full
                           transition"
              >
                WhatsApp Order
              </a>

            </div>
          </motion.div>

          {/* ================= RIGHT IMAGE ================= */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">

              <img
                src={ctaCake}
                alt="Custom Cakes by Cake Junction"
                className="w-full 
                           h-[320px] sm:h-[420px] md:h-[500px] lg:h-[560px]
                           object-cover"
              />

              {/* overlay */}
              <div className="absolute inset-0 
                              bg-gradient-to-t 
                              from-black/50 via-transparent to-transparent" />

              {/* badge */}
              <div className="absolute bottom-5 left-5
                              bg-white/95 backdrop-blur
                              px-4 py-2 rounded-full shadow
                              text-xs sm:text-sm font-semibold text-gray-800">
                ⭐ 4.9 Rated Cakes
              </div>

              {/* hover glow */}
              <div className="absolute inset-0 rounded-3xl
                              ring-0 hover:ring-2
                              ring-rose-400/40 transition" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CTABanner;











// import ctaCake from "@/assets/cake1.png";
// import { motion } from "framer-motion";
// import { ArrowRight, CakeSlice } from "lucide-react";

// const CTABanner = () => {
//   return (
//     <section className=" bg-white ">
//       <div className="container mx-auto px-4">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">

//           {/* LEFT CONTENT */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="max-w-xl"
//           >
//             <p className="section-title mb-3">Order Your Cake</p>

//             <h2 className="section-heading mb-6">
//               Make Every Celebration <br />
//               <span className="text-primary">Sweeter with Cake Junction</span>
//             </h2>

//             <p className="text-muted-foreground mb-10 leading-relaxed">
//               From birthdays and weddings to custom celebrations,
//               our cakes are handcrafted using premium ingredients
//               and designed to impress.
//             </p>

//             <div className="flex flex-wrap gap-4">
//               <a
//                 href="/contact"
//                 className="btn-gold inline-flex items-center gap-2"
//               >
//                 <CakeSlice className="w-5 h-5" />
//                 Order Now
//                 <ArrowRight className="w-4 h-4" />
//               </a>

//               <a
//                 href="https://wa.me/917347713573"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="btn-outline-gold"
//               >
//                 WhatsApp Order
//               </a>
//             </div>
//           </motion.div>

//           {/* RIGHT IMAGE (CARD STYLE) */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="relative"
//           >
//             {/* IMAGE CARD */}
//             <div className="relative overflow-hidden rounded-3xl shadow-2xl">
//               <img
//                 src={ctaCake}
//                 alt="Custom Cakes by Cake Junction"
//                 className="w-full h-[580px] object-cover"
//               />

//               {/* SOFT OVERLAY */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

//               {/* BADGE */}
//               <div className="absolute bottom-6 left-6 bg-background px-4 py-2 rounded-full shadow text-sm font-semibold">
//                 ⭐ 4.9 Rated Cakes
//               </div>
//             </div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default CTABanner;






