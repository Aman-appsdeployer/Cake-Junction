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
    <section id="cakes" className="py-24 bg-background">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-title">Our Cakes</p>
          <h2 className="section-heading">Customer Favorite Cakes</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Discover our most loved cakes, baked fresh using premium ingredients.
          </p>
        </motion.div>

        {/* CAKES GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cakes.map((cake, index) => (
            <motion.div
              key={cake.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl shadow-lg overflow-hidden"
            >
              {/* IMAGE */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={cake.image}
                  alt={cake.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <h3 className="text-lg font-serif font-bold">
                  {cake.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {cake.category}
                </p>

                <div className="flex items-center gap-1 mt-2">
                  <Star className="w-4 h-4 text-primary fill-current" />
                  <span className="text-sm font-medium">
                    {cake.rating}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a href="/service" className="btn-gold">
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

// import cake1 from "@/assets/img1.jpg";
// import cake2 from "@/assets/img2.jpg";
// import cake3 from "@/assets/img3.jpg";
// import cake4 from "@/assets/img4.jpg";

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
//     <section id="cakes" className="py-24 bg-background">
//       <div className="container mx-auto px-4">

//         {/* ================= HEADER ================= */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <p className="section-title">Our Cakes</p>
//           <h2 className="section-heading">
//             Customer Favorite Cakes
//           </h2>
//           <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
//             Discover our most loved cakes, baked fresh using premium ingredients
//             and crafted to perfection.
//           </p>
//         </motion.div>

//         {/* ================= CAKES GRID ================= */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {cakes.map((cake, index) => (
//             <motion.div
//               key={cake.name}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               className="group card-hover"
//             >
//               <div className="relative overflow-hidden rounded-2xl bg-card shadow-lg">

//                 {/* Image */}
//                 <div className="aspect-[4/3] overflow-hidden">
//                   <img
//                     src={cake.image}
//                     alt={cake.name}
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                   />
//                 </div>

//                 {/* Rating Badge */}
//                 <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 shadow">
//                   <Star className="w-3.5 h-3.5 text-primary fill-current" />
//                   <span className="text-sm font-medium text-foreground">
//                     {cake.rating}
//                   </span>
//                 </div>

//                 {/* Content */}
//                 <div className="p-5">
//                   <h3 className="text-lg font-serif font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
//                     {cake.name}
//                   </h3>
//                   <p className="text-sm text-muted-foreground">
//                     {cake.category}
//                   </p>
//                 </div>

//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* ================= CTA ================= */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mt-14"
//         >
//           <a href="#menu" className="btn-gold">
//             View Full Menu
//           </a>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default PopularCakes;
