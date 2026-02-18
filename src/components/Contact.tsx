import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

const offices = [
  { city: "Kochi", address: "TV Center, Kakkanad, Kochi, Kerala 682037" },
  { city: "Thrissur", address: "Main Rd, Kuriachira, Thrissur, Kerala 680006" },
  { city: "Calicut", address: "Oorkadavu, Kozhikode, Kerala 673640" },
];

const Contact = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    toast({
      title: "Message Sent!",
      description: "Our cake delivery team will contact you shortly 🎂",
    });

    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      aria-label="Contact Cake Junction bakery for cake orders and delivery"
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
            Contact Our Cake Bakery
          </p>

          {/* SEO heading */}
          <h2 className="font-bold text-gray-900 leading-tight
                         text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Order Custom Cakes & Same-Day Cake Delivery
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Contact Cake Junction for birthday cakes, wedding cakes,
            custom designer cakes, and online cake delivery. Share your
            flavor, theme, and occasion — we’ll bake it fresh for you.
          </p>
        </motion.header>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">

          {/* ================= FORM ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-6 sm:p-8"
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
              aria-label="Cake order contact form"
            >

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Your full name"
                    className="w-full rounded-lg border border-rose-200 px-4 py-3
                               outline-none focus:ring-2 focus:ring-rose-400
                               focus:border-rose-400 text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full rounded-lg border border-rose-200 px-4 py-3
                               outline-none focus:ring-2 focus:ring-rose-400
                               focus:border-rose-400 text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="your@email.com"
                  className="w-full rounded-lg border border-rose-200 px-4 py-3
                             outline-none focus:ring-2 focus:ring-rose-400
                             focus:border-rose-400 text-sm"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Cake Order Details
                </label>
                <textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Describe your cake type, flavor, size, theme and delivery date..."
                  className="w-full rounded-lg border border-rose-200 px-4 py-3
                             outline-none focus:ring-2 focus:ring-rose-400
                             focus:border-rose-400 text-sm
                             min-h-[130px] resize-none"
                />
              </div>

              <button
                type="submit"
                aria-label="Send cake order request"
                className="w-full flex items-center justify-center gap-2
                           bg-rose-500 hover:bg-rose-600
                           text-white font-medium
                           px-6 py-3 rounded-full
                           transition shadow"
              >
                <Send className="w-4 h-4" />
                Send Cake Order Request
              </button>
            </form>
          </motion.div>

          {/* ================= INFO ================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >

            {/* contact methods */}
            <div className="bg-white rounded-2xl shadow-lg p-6 space-y-5">

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-rose-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Call Our Bakery</p>
                  <a
                    href="tel:+918590010011"
                    className="text-base sm:text-lg font-semibold text-gray-900 hover:text-rose-600 transition"
                  >
                    +91-859-001-0011
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-rose-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email Orders</p>
                  <a
                    href="mailto:orders@cakejunction.com"
                    className="text-base sm:text-lg font-semibold text-gray-900 hover:text-rose-600 transition break-all"
                  >
                    orders@cakejunction.com
                  </a>
                </div>
              </div>
            </div>

            {/* locations — semantic */}
            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-4">
                Bakery Locations
              </h3>

              <ul className="space-y-4">
                {offices.map((office) => (
                  <li
                    key={office.city}
                    className="bg-white rounded-xl shadow p-4 flex gap-3"
                  >
                    <MapPin className="w-5 h-5 text-rose-600 mt-1 shrink-0" />
                    <address className="not-italic">
                      <p className="font-semibold text-gray-900">
                        {office.city}
                      </p>
                      <p className="text-sm text-gray-600">
                        {office.address}
                      </p>
                    </address>
                  </li>
                ))}
              </ul>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;








// import { useToast } from "@/hooks/use-toast";
// import { motion } from "framer-motion";
// import { Mail, MapPin, Phone, Send } from "lucide-react";
// import { useState } from "react";

// const offices = [
//   { city: "Kochi", address: "TV Center, Kakkanad, Kochi, Kerala 682037" },
//   { city: "Thrissur", address: "Main Rd, Kuriachira, Thrissur, Kerala 680006" },
//   { city: "Calicut", address: "Oorkadavu, Kozhikode, Kerala 673640" },
// ];

// const Contact = () => {
//   const { toast } = useToast();

//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     message: "",
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     toast({
//       title: "Message Sent!",
//       description: "Our cake team will contact you shortly 🎂",
//     });

//     setFormData({ name: "", phone: "", email: "", message: "" });
//   };

//   return (
//     <section id="contact" className="py-14 sm:py-16 md:py-20 bg-white ">
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
//             Get In Touch
//           </p>

//           <h2 className="font-bold text-gray-900 leading-tight
//                          text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
//             Let’s Plan Your Perfect Cake
//           </h2>

//           <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
//             Tell us your occasion, theme, and flavor — we’ll bake something
//             unforgettable for you.
//           </p>
//         </motion.div>

//         {/* ================= GRID ================= */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">

//           {/* ================= FORM ================= */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="bg-white rounded-2xl shadow-lg p-6 sm:p-8"
//           >
//             <form onSubmit={handleSubmit} className="space-y-5">

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     required
//                     value={formData.name}
//                     onChange={(e) =>
//                       setFormData({ ...formData, name: e.target.value })
//                     }
//                     placeholder="Your name"
//                     className="w-full rounded-lg border border-rose-200 px-4 py-3
//                                outline-none focus:ring-2 focus:ring-rose-400
//                                focus:border-rose-400 text-sm"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Phone
//                   </label>
//                   <input
//                     type="tel"
//                     required
//                     value={formData.phone}
//                     onChange={(e) =>
//                       setFormData({ ...formData, phone: e.target.value })
//                     }
//                     placeholder="+91 XXXXX XXXXX"
//                     className="w-full rounded-lg border border-rose-200 px-4 py-3
//                                outline-none focus:ring-2 focus:ring-rose-400
//                                focus:border-rose-400 text-sm"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   required
//                   value={formData.email}
//                   onChange={(e) =>
//                     setFormData({ ...formData, email: e.target.value })
//                   }
//                   placeholder="your@email.com"
//                   className="w-full rounded-lg border border-rose-200 px-4 py-3
//                              outline-none focus:ring-2 focus:ring-rose-400
//                              focus:border-rose-400 text-sm"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Message
//                 </label>
//                 <textarea
//                   required
//                   value={formData.message}
//                   onChange={(e) =>
//                     setFormData({ ...formData, message: e.target.value })
//                   }
//                   placeholder="Tell us about your cake requirement..."
//                   className="w-full rounded-lg border border-rose-200 px-4 py-3
//                              outline-none focus:ring-2 focus:ring-rose-400
//                              focus:border-rose-400 text-sm
//                              min-h-[130px] resize-none"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="w-full flex items-center justify-center gap-2
//                            bg-rose-500 hover:bg-rose-600
//                            text-white font-medium
//                            px-6 py-3 rounded-full
//                            transition shadow"
//               >
//                 <Send className="w-4 h-4" />
//                 Send Message
//               </button>
//             </form>
//           </motion.div>

//           {/* ================= INFO ================= */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="space-y-6"
//           >
//             {/* phone + email */}
//             <div className="bg-white rounded-2xl shadow-lg p-6 space-y-5">

//               <div className="flex items-start gap-4">
//                 <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center">
//                   <Phone className="w-5 h-5 text-rose-600" />
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Call Us</p>
//                   <a
//                     href="tel:+918590010011"
//                     className="text-base sm:text-lg font-semibold text-gray-900 hover:text-rose-600 transition"
//                   >
//                     +91-859-001-0011
//                   </a>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center">
//                   <Mail className="w-5 h-5 text-rose-600" />
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Email</p>
//                   <a
//                     href="mailto:orders@cakejunction.com"
//                     className="text-base sm:text-lg font-semibold text-gray-900 hover:text-rose-600 transition break-all"
//                   >
//                     orders@cakejunction.com
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* offices */}
//             <div className="space-y-4">
//               <h3 className="font-bold text-lg text-gray-900">
//                 Our Locations
//               </h3>

//               {offices.map((office) => (
//                 <div
//                   key={office.city}
//                   className="bg-white rounded-xl shadow p-4 flex gap-3"
//                 >
//                   <MapPin className="w-5 h-5 text-rose-600 mt-1 shrink-0" />
//                   <div>
//                     <p className="font-semibold text-gray-900">
//                       {office.city}
//                     </p>
//                     <p className="text-sm text-gray-600">
//                       {office.address}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;











