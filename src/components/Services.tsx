import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/* ===== IMAGES ===== */
import cupcakes from "@/assets/butterscotch.jpg";
import corporateCake from "@/assets/corpote.jfif";
import customCake from "@/assets/cutom.jfif";
import dessertTable from "@/assets/dessert.jfif";
import birthdayCake from "@/assets/img3.jpg";
import weddingCake from "@/assets/wedding.jpg";

/* ===== TYPES ===== */
type Service = {
  title: string;
  description: string;
  image: string;
};

/* ===== DATA ===== */
const services: Service[] = [
  {
    title: "Birthday Cakes",
    description:
      "Custom birthday cakes with theme design, premium flavors, and same-day cake delivery options.",
    image: birthdayCake,
  },
  {
    title: "Wedding Cakes",
    description:
      "Elegant multi-tier wedding cakes handcrafted for luxury weddings and grand celebrations.",
    image: weddingCake,
  },
  {
    title: "Custom Cakes",
    description:
      "Fully personalized custom cakes designed to your flavor, size, and decoration requirements.",
    image: customCake,
  },
  {
    title: "Cupcakes & Pastries",
    description:
      "Fresh baked cupcakes and pastries prepared daily by our premium cake bakery.",
    image: cupcakes,
  },
  {
    title: "Dessert Tables",
    description:
      "Complete dessert table setups for birthdays, weddings, and party events.",
    image: dessertTable,
  },
  {
    title: "Corporate Cake Orders",
    description:
      "Bulk corporate cake orders and branded desserts for office events and celebrations.",
    image: corporateCake,
  },
];

const Services: React.FC = () => {
  return (
    <section
      id="services"
      aria-label="Cake Junction bakery services and cake categories"
      className="py-16 sm:py-20 bg-gradient-to-b from-white to-rose-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ================= HEADER ================= */}
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-primary font-semibold text-xl sm:text-2xl mb-2">
            Cake Bakery Services
          </p>

          {/* SEO heading */}
          <h2 className="font-bold text-gray-900 leading-tight
                         text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Birthday, Wedding & Custom Cake Services
          </h2>

          {/* SEO paragraph */}
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            We provide custom birthday cakes, wedding cakes, designer cakes,
            cupcakes, dessert tables, and corporate cake orders with fresh
            baking and fast delivery.
          </p>
        </motion.header>

        {/* ================= GRID ================= */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.li
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="group"
            >
              <article className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">

                {/* IMAGE */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    loading="lazy"
                    alt={`${service.title} from Cake Junction bakery`}
                    className="w-full h-full object-cover
                               transition-transform duration-700
                               group-hover:scale-110"
                  />
                </div>

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

                {/* CONTENT */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-rose-300 transition">
                    {service.title}
                  </h3>

                  <p className="text-sm text-gray-200 mb-4 line-clamp-2 leading-relaxed">
                    {service.description}
                  </p>

                  <button
                    aria-label={`View details for ${service.title}`}
                    className="flex items-center gap-2
                               text-rose-300 font-semibold text-sm
                               hover:text-rose-200 transition group/btn"
                  >
                    View Service Details
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>

                {/* HOVER RING */}
                <div className="absolute inset-0 rounded-2xl
                                ring-0 group-hover:ring-2 ring-rose-300/40
                                transition"
                />
              </article>
            </motion.li>
          ))}
        </ul>

      </div>
    </section>
  );
};

export default Services;





// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";

// /* ===== IMAGES ===== */
// import cupcakes from "@/assets/butterscotch.jpg";
// import corporateCake from "@/assets/corpote.jfif";
// import customCake from "@/assets/cutom.jfif";
// import dessertTable from "@/assets/dessert.jfif";
// import birthdayCake from "@/assets/img3.jpg";
// import weddingCake from "@/assets/wedding.jpg";

// /* ===== TYPES ===== */
// type Service = {
//   title: string;
//   description: string;
//   image: string;
// };

// /* ===== DATA ===== */
// const services: Service[] = [
//   {
//     title: "Birthday Cakes",
//     description:
//       "Celebrate birthdays with beautifully designed cakes crafted to match your theme and taste.",
//     image: birthdayCake,
//   },
//   {
//     title: "Wedding Cakes",
//     description:
//       "Elegant multi-tier wedding cakes designed to make your special day unforgettable.",
//     image: weddingCake,
//   },
//   {
//     title: "Custom Cakes",
//     description:
//       "Personalized cakes made exactly the way you imagine – flavors, design, and size.",
//     image: customCake,
//   },
//   {
//     title: "Cupcakes & Pastries",
//     description:
//       "Delicious cupcakes and pastries baked fresh daily for every sweet craving.",
//     image: cupcakes,
//   },
//   {
//     title: "Dessert Tables",
//     description:
//       "Complete dessert setups for parties, events, and celebrations of all sizes.",
//     image: dessertTable, 
//   },
//   {
//     title: "Corporate Orders",
//     description:
//       "Branded cakes and bulk dessert orders for corporate events and office celebrations.",
//     image: corporateCake,
//   },
// ];

// const Services: React.FC = () => {
//   return (
//     <section id="services" className="py-16 sm:py-20 bg-gradient-to-b from-white to-rose-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">

//         {/* ================= HEADER ================= */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12 md:mb-16"
//         >
//           <p className="text-primary font-semibold text-xl sm:text-2xl mb-2">
//             Our Services
//           </p>

//           <h2 className="font-bold text-gray-900 leading-tight
//                          text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
//             What We Bake at Cake Junction
//           </h2>

//           <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
//             From classic cakes to custom creations, we deliver freshly baked
//             desserts made with premium ingredients and lots of love.
//           </p>
//         </motion.div>

//         {/* ================= GRID ================= */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
//           {services.map((service, index) => (
//             <motion.div
//               key={service.title}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.08 }}
//               whileHover={{ y: -6 }}
//               className="group"
//             >
//               <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">

//                 {/* IMAGE */}
//                 <div className="aspect-[4/3] overflow-hidden">
//                   <img
//                     src={service.image}
//                     alt={service.title}
//                     className="w-full h-full object-cover
//                                transition-transform duration-700
//                                group-hover:scale-110"
//                   />
//                 </div>

//                 {/* OVERLAY */}
//                 <div className="absolute inset-0 
//                                 bg-gradient-to-t 
//                                 from-black/85 via-black/40 to-transparent" />

//                 {/* CONTENT */}
//                 <div className="absolute bottom-0 left-0 right-0 p-6">

//                   <h3 className="text-xl font-bold text-white mb-2
//                                  group-hover:text-rose-300 transition">
//                     {service.title}
//                   </h3>

//                   <p className="text-sm text-gray-200 mb-4 line-clamp-2 leading-relaxed">
//                     {service.description}
//                   </p>

//                   <button
//                     className="flex items-center gap-2
//                                text-rose-300 font-semibold text-sm
//                                hover:text-rose-200 transition group/btn"
//                   >
//                     View Details
//                     <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
//                   </button>

//                 </div>

//                 {/* HOVER RING */}
//                 <div className="absolute inset-0 rounded-2xl
//                                 ring-0 group-hover:ring-2 ring-rose-300/40
//                                 transition" />

//               </div>
//             </motion.div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Services;














