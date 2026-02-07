import { motion } from "framer-motion";
import { Star } from "lucide-react";

/* ================= IMAGES ================= */
import cake1 from "@/assets/img1.jpg";
import cake2 from "@/assets/img2.jpg";
import cake3 from "@/assets/img3.jpg";
import cake4 from "@/assets/img4.jpg";

/* ================= DATA ================= */
const cakes = [
  {
    name: "Chocolate Truffle Cake",
    category: "Best Seller",
    rating: 4.9,
    image: cake1,
  },
  {
    name: "Birthday Special Cake",
    category: "Birthday Collection",
    rating: 4.8,
    image: cake2,
  },
  {
    name: "Elegant Wedding Cake",
    category: "Wedding Collection",
    rating: 5.0,
    image: cake3,
  },
  {
    name: "Cupcakes Box",
    category: "Desserts",
    rating: 4.7,
    image: cake4,
  },
];

const PopularCakes = () => {
  return (
    <section id="cakes" className="py-14 sm:py-16 md:py-20 bg-white">
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
            Our Cakes
          </p>

          <h2 className="font-bold text-gray-900 leading-tight
                         text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Customer Favorite Cakes
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Discover our most loved cakes, baked fresh using premium ingredients.
          </p>
        </motion.div>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
          {cakes.map((cake, index) => (
            <motion.div
              key={cake.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group rounded-2xl overflow-hidden
                         border border-rose-100 bg-white
                         shadow-sm hover:shadow-xl
                         transition-all duration-300"
            >
              {/* IMAGE */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={cake.image}
                  alt={cake.name}
                  loading="lazy"
                  className="w-full h-full object-cover
                             transition-transform duration-700
                             group-hover:scale-110"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <h3 className="font-bold text-gray-900 text-base sm:text-lg">
                  {cake.name}
                </h3>

                <p className="text-sm text-gray-500 mb-3">
                  {cake.category}
                </p>

                {/* rating */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1
                                  bg-rose-50 border border-rose-200
                                  px-2.5 py-1 rounded-full">
                    <Star className="w-4 h-4 text-rose-500 fill-rose-500" />
                    <span className="text-sm font-semibold text-rose-600">
                      {cake.rating}
                    </span>
                  </div>
                </div>
              </div>

              {/* hover ring */}
              <div className="absolute inset-0 rounded-2xl
                              ring-0 group-hover:ring-2
                              ring-rose-400/40 transition pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* ================= CTA ================= */}
        <div className="text-center mt-12 md:mt-14">
          <a
            href="/shop"
            className="inline-flex items-center justify-center
                       bg-rose-500 hover:bg-rose-600
                       text-white font-medium
                       px-7 py-3 rounded-full
                       transition shadow"
          >
            View Full Menu
          </a>
        </div>

      </div>
    </section>
  );
};

export default PopularCakes;









// import { motion } from "framer-motion";
// import { Star } from "lucide-react";

// /* ================= IMAGES ================= */
// import cake1 from "@/assets/img1.jpg";
// import cake2 from "@/assets/img2.jpg";
// import cake3 from "@/assets/img3.jpg";
// import cake4 from "@/assets/img4.jpg";

// /* ================= DATA ================= */
// const cakes = [
//   {
//     name: "Chocolate Truffle Cake",
//     category: "Best Seller",
//     rating: 4.9,
//     image: cake1,
//   },
//   {
//     name: "Birthday Special Cake",
//     category: "Birthday Collection",
//     rating: 4.8,
//     image: cake2,
//   },
//   {
//     name: "Elegant Wedding Cake",
//     category: "Wedding Collection",
//     rating: 5.0,
//     image: cake3,
//   },
//   {
//     name: "Cupcakes Box",
//     category: "Desserts",
//     rating: 4.7,
//     image: cake4,
//   },
// ];

// const PopularCakes = () => {
//   return (
//     <section id="cakes" className=" bg-white">
//       <div className="container mx-auto px-4">

//         {/* HEADER */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <p className="section-title">Our Cakes</p>
//           <h2 className="section-heading">Customer Favorite Cakes</h2>
//           <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
//             Discover our most loved cakes, baked fresh using premium ingredients.
//           </p>
//         </motion.div>

//         {/* CAKES GRID */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {cakes.map((cake, index) => (
//             <motion.div
//               key={cake.name}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               className="bg-card rounded-2xl shadow-lg overflow-hidden"
//             >
//               {/* IMAGE */}
//               <div className="aspect-[4/3] overflow-hidden">
//                 <img
//                   src={cake.image}
//                   alt={cake.name}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               {/* CONTENT */}
//               <div className="p-5">
//                 <h3 className="text-lg font-serif font-bold">
//                   {cake.name}
//                 </h3>
//                 <p className="text-sm text-muted-foreground">
//                   {cake.category}
//                 </p>

//                 <div className="flex items-center gap-1 mt-2">
//                   <Star className="w-4 h-4 text-primary fill-current" />
//                   <span className="text-sm font-medium">
//                     {cake.rating}
//                   </span>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* CTA */}
//         <div className="text-center mt-14">
//           <a href="/service" className="btn-gold">
//             View Full Menu
//           </a>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default PopularCakes;







