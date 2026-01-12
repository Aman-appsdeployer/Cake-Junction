import ctaCake from "@/assets/img1.jpg";
import { motion } from "framer-motion";
import { ArrowRight, CakeSlice } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="py-28 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <p className="section-title mb-3">Order Your Cake</p>

            <h2 className="section-heading mb-6">
              Make Every Celebration <br />
              <span className="text-primary">Sweeter with Cake Junction</span>
            </h2>

            <p className="text-muted-foreground mb-10 leading-relaxed">
              From birthdays and weddings to custom celebrations,
              our cakes are handcrafted using premium ingredients
              and designed to impress.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/contact"
                className="btn-gold inline-flex items-center gap-2"
              >
                <CakeSlice className="w-5 h-5" />
                Order Now
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold"
              >
                WhatsApp Order
              </a>
            </div>
          </motion.div>

          {/* RIGHT IMAGE (CARD STYLE) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* IMAGE CARD */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={ctaCake}
                alt="Custom Cakes by Cake Junction"
                className="w-full h-[420px] object-cover"
              />

              {/* SOFT OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {/* BADGE */}
              <div className="absolute bottom-6 left-6 bg-background px-4 py-2 rounded-full shadow text-sm font-semibold">
                ⭐ 4.9 Rated Cakes
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CTABanner;





// import { motion } from "framer-motion";
// import { ArrowRight, CakeSlice } from "lucide-react";

// import ctaCake from "@/assets/img1.jpg";

// const CTABanner = () => {
//   return (
//     <section className="relative overflow-hidden py-24 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10">
//       {/* Soft decorative blobs */}
//       <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
//       <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />

//       <div className="container mx-auto px-4 relative z-10">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">

//           {/* ================= LEFT CONTENT ================= */}
//           <div className="max-w-xl">
//             <motion.span
//               initial={{ opacity: 0, y: 12 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="inline-block mb-4 px-4 py-1 rounded-full bg-primary/15 text-primary text-sm font-semibold"
//             >
//               Fresh • Handmade • Delicious
//             </motion.span>

//             <motion.h2
//               initial={{ opacity: 0, y: 24 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.1 }}
//               className="section-heading mb-6 leading-tight"
//             >
//               Make Every Celebration <br />
//               <span className="text-gradient-cake">
//                 Sweeter with Cake Junction
//               </span>
//             </motion.h2>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.2 }}
//               className="text-muted-foreground mb-10 text-lg leading-relaxed"
//             >
//               From birthdays and weddings to everyday cravings, Cake Junction
//               crafts beautiful, handcrafted cakes using premium ingredients and
//               custom designs that taste as good as they look.
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.3 }}
//               className="flex flex-wrap gap-5"
//             >
//               <a
//                 href="#menu"
//                 className="btn-gold inline-flex items-center gap-2 text-base"
//               >
//                 <CakeSlice className="w-5 h-5" />
//                 Order Your Cake
//                 <ArrowRight className="w-4 h-4" />
//               </a>

//               <a
//                 href="https://wa.me/919999999999"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="btn-outline-gold text-base"
//               >
//                 WhatsApp Order
//               </a>
//             </motion.div>
//           </div>

//           {/* ================= RIGHT IMAGE ================= */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.85 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, ease: "easeOut" }}
//             className="flex justify-center lg:justify-end"
//           >
//             <div className="relative">
//               {/* Soft glow */}
//               <div className="absolute inset-0 rounded-full bg-primary/25 blur-2xl scale-110" />

//               {/* Image container */}
//               <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-8 border-white">
//                 <img
//                   src={ctaCake}
//                   alt="Delicious Cake"
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               {/* Floating badge */}
//               <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-5 py-2 rounded-full shadow-lg text-sm font-semibold text-primary">
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
