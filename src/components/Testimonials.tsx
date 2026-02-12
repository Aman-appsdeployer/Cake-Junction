import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Arun & Priya",
    occasion: "Birthday Celebration",
    rating: 5,
    review:
      "The cake was absolutely delicious and beautifully designed! Everyone at the party loved it. Cake Junction exceeded our expectations.",
  },
  {
    name: "Rajesh Kumar",
    occasion: "Corporate Order",
    rating: 5,
    review:
      "We ordered custom cakes for our office event and the quality was outstanding. Timely delivery and amazing taste. Highly recommended!",
  },
  {
    name: "Meera Anand",
    occasion: "Wedding Cake",
    rating: 5,
    review:
      "Our wedding cake looked stunning and tasted even better. Cake Junction truly knows how to make special moments sweeter.",
  },
];

const Testimonials = () => {
  return (
    <section className=" sm:py-16 md:py-20 bg-white">
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
            Testimonials
          </p>

          <h2 className="font-bold text-gray-900 leading-tight
                         text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            What Our Customers Say
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            We bake happiness into every cake. Here’s what our happy customers
            say about Cake Junction.
          </p>
        </motion.div>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className="relative bg-white rounded-2xl
                         border border-rose-100
                         p-6 sm:p-7
                         shadow-sm hover:shadow-xl
                         transition-all duration-300"
            >
              {/* Quote icon */}
              <Quote className="w-9 h-9 text-rose-200 absolute top-5 right-5" />

              {/* rating */}
              <div className="flex gap-1 mb-4">
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
              <div className="flex items-center gap-3">
                {/* <div
                  className="w-11 h-11 rounded-full
                             bg-gradient-to-br from-rose-500 to-pink-500
                             flex items-center justify-center
                             text-white font-bold text-sm"
                >
                  {testimonial.name.charAt(0)}
                </div> */}

                <div>
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">
                    {testimonial.name}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {testimonial.occasion}
                  </p>
                </div>
              </div>

              {/* hover ring */}
              <div className="absolute inset-0 rounded-2xl
                              ring-0 hover:ring-2
                              ring-rose-400/30 transition pointer-events-none" />
            </motion.div>
          ))}

        </div>

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
//     <section className=" bg-white">
//       <div className="container mx-auto px-4">

//         {/* ================= HEADER ================= */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <p className="section-title">Testimonials</p>
//           <h2 className="section-heading">
//             What Our Customers Say
//           </h2>
//           <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
//             We bake happiness into every cake. Here’s what our happy customers
//             have to say about Cake Junction.
//           </p>
//         </motion.div>

//         {/* ================= TESTIMONIALS GRID ================= */}
//         <div className="grid md:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <motion.div
//               key={testimonial.name}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.15 }}
//               className="glass-card p-8 relative"
//             >
//               {/* Quote Icon */}
//               <Quote className="w-10 h-10 text-primary/30 absolute top-6 right-6" />

//               {/* Rating */}
//               <div className="flex gap-1 mb-4">
//                 {[...Array(testimonial.rating)].map((_, i) => (
//                   <Star
//                     key={i}
//                     className="w-4 h-4 text-primary fill-current"
//                   />
//                 ))}
//               </div>

//               {/* Review */}
//               <p className="text-foreground/90 mb-6 leading-relaxed">
//                 “{testimonial.review}”
//               </p>

//               {/* Author */}
//               <div className="flex items-center gap-3">
//                 <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
//                   {testimonial.name.charAt(0)}
//                 </div>
//                 <div>
//                   <p className="font-semibold text-foreground">
//                     {testimonial.name}
//                   </p>
//                   <p className="text-sm text-muted-foreground">
//                     {testimonial.occasion}
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Testimonials;
