import { motion } from "framer-motion";

import cake1 from "@/assets/img2.jpg";
import cake2 from "@/assets/img3.jpg";
import cake3 from "@/assets/img4.jpg";
import cake6 from "@/assets/img6.jpg";
import cake7 from "@/assets/img7.jpg";
import cake8 from "@/assets/img8.jpg";
import cake4 from "@/assets/venue-1.jpg";
import cake5 from "@/assets/venue-4.jpg";

const images = [
  { src: cake1, alt: "Chocolate Cake" },
  { src: cake2, alt: "Birthday Cake" },
  { src: cake3, alt: "Wedding Cake" },
  { src: cake4, alt: "Cupcakes" },
  { src: cake5, alt: "Fresh Pastries" },
  { src: cake6, alt: "Custom Designed Cake" },
  { src: cake7, alt: "Fruit Tart" },
  { src: cake8, alt: "Layered Cake" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-14 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <p className="text-rose-600 font-semibold text-sm sm:text-base mb-2">
            Our Creations
          </p>

          <h2 className="font-bold text-gray-900 leading-tight
                         text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Sweet Moments by Cake Junction
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Take a look at some of our handcrafted cakes and desserts,
            baked with love and designed to delight every celebration.
          </p>
        </motion.div>

        {/* ================= MASONRY ================= */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">

          {images.map((image, index) => (
            <motion.div
              key={image.alt}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="break-inside-avoid group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition">

                {/* IMAGE */}
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-auto object-cover
                             transition-transform duration-700
                             group-hover:scale-110"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0
                                bg-gradient-to-t
                                from-black/70 via-black/20 to-transparent
                                opacity-0 group-hover:opacity-100
                                transition duration-300
                                flex items-end">

                  <div className="p-5">
                    <span className="inline-block
                                     bg-rose-500/90 text-white
                                     text-xs sm:text-sm font-semibold
                                     px-3 py-1 rounded-full">
                      {image.alt}
                    </span>
                  </div>
                </div>

                {/* hover ring */}
                <div className="absolute inset-0 rounded-2xl
                                ring-0 group-hover:ring-2
                                ring-rose-400/40 transition" />
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Gallery;






// import { motion } from "framer-motion";

// import cake1 from "@/assets/img2.jpg";
// import cake2 from "@/assets/img3.jpg";
// import cake3 from "@/assets/img4.jpg";
// import cake6 from "@/assets/img6.jpg";
// import cake7 from "@/assets/img7.jpg";
// import cake8 from "@/assets/img8.jpg";
// import cake4 from "@/assets/venue-1.jpg";
// import cake5 from "@/assets/venue-4.jpg";

// const images = [
//   { src: cake1, alt: "Chocolate Cake" },
//   { src: cake2, alt: "Birthday Cake" },
//   { src: cake3, alt: "Wedding Cake" },
//   { src: cake4, alt: "Cupcakes" },
//   { src: cake5, alt: "Fresh Pastries" },
//   { src: cake6, alt: "Custom Designed Cake" },
//   { src: cake7, alt: "Fruit Tart" },
//   { src: cake8, alt: "Layered Cake" },
// ];

// const Gallery = () => {
//   return (
//     <section id="gallery" className=" bg-white">
//       <div className="container mx-auto px-4">

//         {/* ================= HEADER ================= */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <p className="section-title">Our Creations</p>
//           <h2 className="section-heading">
//             Sweet Moments by Cake Junction
//           </h2>
//           <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
//             Take a look at some of our handcrafted cakes and desserts,
//             baked with love and designed to delight every celebration.
//           </p>
//         </motion.div>

//         {/* ================= MASONRY GRID ================= */}
//         <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
//           {images.map((image, index) => (
//             <motion.div
//               key={image.alt}
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.08 }}
//               className="break-inside-avoid overflow-hidden rounded-2xl group cursor-pointer shadow-lg"
//             >
//               <div className="relative overflow-hidden">
//                 <img
//                   src={image.src}
//                   alt={image.alt}
//                   className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
//                 />

//                 {/* Hover Overlay */}
//                 <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//                   <span className="text-white text-lg font-semibold">
//                     {image.alt}
//                   </span>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Gallery;
