import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Arun & Priya",
    occasion: "Birthday Cake Order",
    rating: 5,
    review:
      "The birthday cake was absolutely delicious and beautifully designed. Fast cake delivery and premium taste — Cake Junction exceeded our expectations.",
  },
  {
    name: "Rajesh Kumar",
    occasion: "Corporate Cake Order",
    rating: 5,
    review:
      "We ordered custom cakes for our office event and the quality was outstanding. Timely delivery and amazing flavor. Highly recommended bakery service.",
  },
  {
    name: "Meera Anand",
    occasion: "Wedding Cake",
    rating: 5,
    review:
      "Our wedding cake looked stunning and tasted even better. Cake Junction truly makes custom cakes perfect for special celebrations.",
  },
];

const Testimonials = () => {
  return (
    <section
      aria-label="Customer reviews for Cake Junction bakery"
      className="sm:py-16 md:py-20 bg-white"
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
          <p className="text-rose-600 font-semibold text-xl sm:text-2xl mb-2">
            Cake Bakery Reviews
          </p>

          {/* SEO heading */}
          <h2 className="font-bold text-gray-900 leading-tight
                         text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Customer Reviews for Our Custom Cakes
          </h2>

          {/* SEO paragraph */}
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            See what customers say about our birthday cakes, wedding cakes,
            and custom cake delivery service from Cake Junction bakery.
          </p>
        </motion.header>

        {/* ================= GRID ================= */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.li
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
            >
              <article
                className="relative bg-white rounded-2xl
                           border border-rose-100
                           p-6 sm:p-7
                           shadow-sm hover:shadow-xl
                           transition-all duration-300"
                aria-label={`Review from ${testimonial.name}`}
              >
                {/* Quote icon */}
                <Quote
                  className="w-9 h-9 text-rose-200 absolute top-5 right-5"
                  aria-hidden="true"
                />

                {/* rating */}
                <div
                  className="flex gap-1 mb-4"
                  aria-label={`${testimonial.rating} star rating`}
                >
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-rose-500 fill-rose-500"
                    />
                  ))}
                </div>

                {/* review */}
                <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
                  “{testimonial.review}”
                </p>

                {/* author */}
                <div>
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">
                    {testimonial.name}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {testimonial.occasion}
                  </p>
                </div>

                {/* hover ring */}
                <div className="absolute inset-0 rounded-2xl
                                ring-0 hover:ring-2
                                ring-rose-400/30 transition pointer-events-none"
                />
              </article>
            </motion.li>
          ))}
        </ul>

      </div>
    </section>
  );
};

export default Testimonials;









// import { motion } from "framer-motion";
// import { Quote, Star } from "lucide-react";

// const testimonials = [
//   {
//     name: "Arun & Priya",
//     occasion: "Birthday Celebration",
//     rating: 5,
//     review:
//       "The cake was absolutely delicious and beautifully designed! Everyone at the party loved it. Cake Junction exceeded our expectations.",
//   },
//   {
//     name: "Rajesh Kumar",
//     occasion: "Corporate Order",
//     rating: 5,
//     review:
//       "We ordered custom cakes for our office event and the quality was outstanding. Timely delivery and amazing taste. Highly recommended!",
//   },
//   {
//     name: "Meera Anand",
//     occasion: "Wedding Cake",
//     rating: 5,
//     review:
//       "Our wedding cake looked stunning and tasted even better. Cake Junction truly knows how to make special moments sweeter.",
//   },
// ];

// const Testimonials = () => {
//   return (
//     <section className=" sm:py-16 md:py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">

//         {/* ================= HEADER ================= */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-10 md:mb-14"
//         >
//           <p className="text-rose-600 font-semibold text-xl sm:text-2xl mb-2">
//             Testimonials
//           </p>

//           <h2 className="font-bold text-gray-900 leading-tight
//                          text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
//             What Our Customers Say
//           </h2>

//           <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
//             We bake happiness into every cake. Here’s what our happy customers
//             say about Cake Junction.
//           </p>
//         </motion.div>

//         {/* ================= GRID ================= */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

//           {testimonials.map((testimonial, index) => (
//             <motion.div
//               key={testimonial.name}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.12 }}
//               className="relative bg-white rounded-2xl
//                          border border-rose-100
//                          p-6 sm:p-7
//                          shadow-sm hover:shadow-xl
//                          transition-all duration-300"
//             >
//               {/* Quote icon */}
//               <Quote className="w-9 h-9 text-rose-200 absolute top-5 right-5" />

//               {/* rating */}
//               <div className="flex gap-1 mb-4">
//                 {[...Array(testimonial.rating)].map((_, i) => (
//                   <Star
//                     key={i}
//                     className="w-4 h-4 text-rose-500 fill-rose-500"
//                   />
//                 ))}
//               </div>

//               {/* review */}
//               <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
//                 “{testimonial.review}”
//               </p>

//               {/* author */}
//               <div className="flex items-center gap-3">
//                 {/* <div
//                   className="w-11 h-11 rounded-full
//                              bg-gradient-to-br from-rose-500 to-pink-500
//                              flex items-center justify-center
//                              text-white font-bold text-sm"
//                 >
//                   {testimonial.name.charAt(0)}
//                 </div> */}

//                 <div>
//                   <p className="font-semibold text-gray-900 text-sm sm:text-base">
//                     {testimonial.name}
//                   </p>
//                   <p className="text-xs sm:text-sm text-gray-500">
//                     {testimonial.occasion}
//                   </p>
//                 </div>
//               </div>

//               {/* hover ring */}
//               <div className="absolute inset-0 rounded-2xl
//                               ring-0 hover:ring-2
//                               ring-rose-400/30 transition pointer-events-none" />
//             </motion.div>
//           ))}

//         </div>

//       </div>
//     </section>
//   );
// };

// export default Testimonials;













