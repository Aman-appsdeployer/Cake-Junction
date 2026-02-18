import { motion } from "framer-motion";
import { Award, Newspaper, Shield, Star } from "lucide-react";

const awards = [
  {
    icon: Award,
    title: "Best Bakery & Cake Studio",
    description: "Recognized for premium custom cakes and dessert design",
  },
  {
    icon: Newspaper,
    title: "Featured by Local Food Media",
    description: "Highlighted for creative birthday and wedding cakes",
  },
  {
    icon: Shield,
    title: "Quality & Hygiene Certified",
    description: "Certified baking and food safety standards followed",
  },
  {
    icon: Star,
    title: "4.8/5 Customer Rating",
    description: "Based on thousands of happy cake delivery customers",
  },
];

const Awards = () => {
  return (
    <section
      aria-label="Cake Junction awards and bakery recognitions"
      className="py-14 sm:py-16 md:py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ================= HEADER ================= */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <p className="text-rose-600 font-semibold text-sm sm:text-base mb-2">
            Awards & Bakery Recognition
          </p>

          {/* SEO keyword improved */}
          <h2 className="font-bold text-gray-900 leading-tight
                         text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Trusted Online Cake Bakery <br className="hidden sm:block" />
            Known For Quality & Service
          </h2>

          {/* small SEO support text */}
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Our cake bakery is recognized for custom cake design, fresh baking,
            same-day cake delivery, and customer satisfaction across thousands
            of celebration orders.
          </p>
        </motion.header>

        {/* ================= GRID ================= */}

        {/* semantic list */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {awards.map((award, index) => (
            <motion.li
              key={award.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group rounded-2xl border border-rose-100 bg-rose-50/60
                         p-6 text-center shadow-sm hover:shadow-lg
                         hover:-translate-y-1 transition-all duration-300"
            >
              {/* icon */}
              <div
                className="w-16 h-16 mx-auto mb-4 rounded-full
                           bg-rose-100 flex items-center justify-center
                           group-hover:bg-rose-200 transition"
                aria-hidden="true"
              >
                <award.icon className="w-8 h-8 text-rose-600" />
              </div>

              {/* title */}
              <h3 className="font-bold text-gray-900 mb-2 text-base sm:text-lg">
                {award.title}
              </h3>

              {/* description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {award.description}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Awards;








// import { motion } from "framer-motion";
// import { Award, Newspaper, Shield, Star } from "lucide-react";

// const awards = [
//   {
//     icon: Award,
//     title: "Best Event Management Company",
//     description: "Awarded at BGS Business Growth Summit",
//   },
//   {
//     icon: Newspaper,
//     title: "Featured in The New York Times",
//     description: "Recognized for South Indian Kerala weddings",
//   },
//   {
//     icon: Shield,
//     title: "ISO 9001:2015 Certified",
//     description: "Quality management system certified",
//   },
//   {
//     icon: Star,
//     title: "4.8/5 Customer Rating",
//     description: "Based on 2500+ client reviews",
//   },
// ];

// const Awards = () => {
//   return (
//     <section className="py-14 sm:py-16 md:py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">

//         {/* ================= HEADER ================= */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-10 md:mb-14"
//         >
//           <p className="text-rose-600 font-semibold text-sm sm:text-base mb-2">
//             Awards & Recognitions
//           </p>

//           <h2 className="font-bold text-gray-900 leading-tight
//                          text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
//             Trusted & Recognized <br className="hidden sm:block" />
//             For Quality & Service
//           </h2>
//         </motion.div>

//         {/* ================= GRID ================= */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
//           {awards.map((award, index) => (
//             <motion.div
//               key={award.title}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               className="group rounded-2xl border border-rose-100 bg-rose-50/60
//                          p-6 text-center shadow-sm hover:shadow-lg
//                          hover:-translate-y-1 transition-all duration-300"
//             >
//               {/* icon circle */}
//               <div
//                 className="w-16 h-16 mx-auto mb-4 rounded-full
//                            bg-rose-100 flex items-center justify-center
//                            group-hover:bg-rose-200 transition"
//               >
//                 <award.icon className="w-8 h-8 text-rose-600" />
//               </div>

//               {/* title */}
//               <h3 className="font-bold text-gray-900 mb-2 text-base sm:text-lg">
//                 {award.title}
//               </h3>

//               {/* desc */}
//               <p className="text-sm text-gray-600 leading-relaxed">
//                 {award.description}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Awards;




