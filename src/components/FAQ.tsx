import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How much does a cake cost at Cake Junction?",
    answer:
      "Cake prices depend on the size, flavor, design, and customization. Our cakes typically start from ₹600 and vary based on your requirements. Contact us for an exact quote.",
  },
  {
    question: "Do you make custom cakes?",
    answer:
      "Yes! We specialize in custom-designed cakes for birthdays, weddings, anniversaries, and special occasions. You can choose the flavor, theme, and size as per your preference.",
  },
  {
    question: "How early should I place my cake order?",
    answer:
      "For regular cakes, we recommend ordering at least 24–48 hours in advance. For custom or large cakes, placing your order 3–5 days earlier helps us deliver the best quality.",
  },
  {
    question: "Do you offer home delivery?",
    answer:
      "Yes, we provide home delivery within selected areas. Delivery charges may vary depending on distance and order size. Store pickup is also available.",
  },
  {
    question: "What cake flavors are available?",
    answer:
      "We offer chocolate, vanilla, red velvet, black forest, butterscotch, fruit cakes, and more. Seasonal and special flavors are also available.",
  },
  {
    question: "Do you take bulk or corporate orders?",
    answer:
      "Absolutely! We accept bulk and corporate orders for office events and celebrations. Please contact us in advance for bulk pricing and customization.",
  },
];

const FAQ = () => {
  return (
    <section className="py-14 sm:py-16 md:py-20 bg-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 items-start">

          {/* ================= LEFT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-rose-600 font-semibold text-sm sm:text-base mb-2">
              Need Help?
            </p>

            <h2 className="font-bold text-gray-900 leading-tight mb-6
                           text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Frequently Asked Questions
            </h2>

            <p className="text-gray-600 mb-8 text-sm sm:text-base leading-relaxed">
              Got questions about our cakes, custom orders, or delivery?
              Here are answers to what customers usually ask.
              Still need help? We’re just one message away.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center justify-center
                         bg-rose-500 hover:bg-rose-600
                         text-white font-medium
                         px-6 py-3 rounded-full
                         transition shadow"
            >
              Contact Cake Junction
            </a>
          </motion.div>

          {/* ================= RIGHT ================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-xl shadow-sm border border-rose-100 px-5"
                >
                  <AccordionTrigger
                    className="text-left font-semibold
                               text-gray-900 hover:text-rose-600
                               transition py-5 text-sm sm:text-base"
                  >
                    {faq.question}
                  </AccordionTrigger>

                  <AccordionContent
                    className="text-gray-600 pb-5
                               leading-relaxed text-sm sm:text-base"
                  >
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;










// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import { motion } from "framer-motion";

// const faqs = [
//   {
//     question: "How much does a cake cost at Cake Junction?",
//     answer:
//       "Cake prices depend on the size, flavor, design, and customization. Our cakes typically start from ₹600 and can vary based on your requirements. Contact us for an exact quote.",
//   },
//   {
//     question: "Do you make custom cakes?",
//     answer:
//       "Yes! We specialize in custom-designed cakes for birthdays, weddings, anniversaries, and special occasions. You can choose the flavor, theme, and size as per your preference.",
//   },
//   {
//     question: "How early should I place my cake order?",
//     answer:
//       "For regular cakes, we recommend ordering at least 24–48 hours in advance. For custom or large cakes, placing your order 3–5 days earlier helps us deliver the best quality.",
//   },
//   {
//     question: "Do you offer home delivery?",
//     answer:
//       "Yes, we provide home delivery within selected areas. Delivery charges may vary depending on distance and order size. You can also opt for store pickup.",
//   },
//   {
//     question: "What cake flavors are available?",
//     answer:
//       "We offer a wide variety of flavors including chocolate, vanilla, red velvet, black forest, butterscotch, fruit cakes, and more. Seasonal and special flavors are also available.",
//   },
//   {
//     question: "Do you take bulk or corporate orders?",
//     answer:
//       "Absolutely! We accept bulk and corporate orders for office events, celebrations, and special occasions. Please contact us in advance for bulk pricing and customization.",
//   },
// ];

// const FAQ = () => {
//   return (
//     <section className="py-24 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="grid lg:grid-cols-2 gap-12 items-start">

//           {/* ================= LEFT CONTENT ================= */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//           >
//             <p className="section-title">Need Help?</p>
//             <h2 className="section-heading mb-6">
//               Frequently Asked Questions
//             </h2>
//             <p className="text-muted-foreground mb-8">
//               Got questions about our cakes, orders, or delivery? Here are some
//               common questions our customers ask. Still need help? We’re just a
//               message away!
//             </p>
//             <a href="#contact" className="btn-gold">
//               Contact Cake Junction
//             </a>
//           </motion.div>

//           {/* ================= RIGHT ACCORDION ================= */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//           >
//             <Accordion type="single" collapsible className="space-y-4">
//               {faqs.map((faq, index) => (
//                 <AccordionItem
//                   key={index}
//                   value={`item-${index}`}
//                   className="glass-card px-6 border-none"
//                 >
//                   <AccordionTrigger className="text-foreground font-medium text-left hover:text-primary hover:no-underline py-5">
//                     {faq.question}
//                   </AccordionTrigger>
//                   <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
//                     {faq.answer}
//                   </AccordionContent>
//                 </AccordionItem>
//               ))}
//             </Accordion>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default FAQ;
