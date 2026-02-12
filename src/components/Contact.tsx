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
      description: "Our cake team will contact you shortly 🎂",
    });

    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-14 sm:py-16 md:py-20 bg-white ">
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
            Get In Touch
          </p>

          <h2 className="font-bold text-gray-900 leading-tight
                         text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Let’s Plan Your Perfect Cake
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Tell us your occasion, theme, and flavor — we’ll bake something
            unforgettable for you.
          </p>
        </motion.div>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">

          {/* ================= FORM ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-6 sm:p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-5">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Your name"
                    className="w-full rounded-lg border border-rose-200 px-4 py-3
                               outline-none focus:ring-2 focus:ring-rose-400
                               focus:border-rose-400 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    required
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
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
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
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell us about your cake requirement..."
                  className="w-full rounded-lg border border-rose-200 px-4 py-3
                             outline-none focus:ring-2 focus:ring-rose-400
                             focus:border-rose-400 text-sm
                             min-h-[130px] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2
                           bg-rose-500 hover:bg-rose-600
                           text-white font-medium
                           px-6 py-3 rounded-full
                           transition shadow"
              >
                <Send className="w-4 h-4" />
                Send Message
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
            {/* phone + email */}
            <div className="bg-white rounded-2xl shadow-lg p-6 space-y-5">

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-rose-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Call Us</p>
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
                  <p className="text-sm text-gray-500">Email</p>
                  <a
                    href="mailto:orders@cakejunction.com"
                    className="text-base sm:text-lg font-semibold text-gray-900 hover:text-rose-600 transition break-all"
                  >
                    orders@cakejunction.com
                  </a>
                </div>
              </div>
            </div>

            {/* offices */}
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-gray-900">
                Our Locations
              </h3>

              {offices.map((office) => (
                <div
                  key={office.city}
                  className="bg-white rounded-xl shadow p-4 flex gap-3"
                >
                  <MapPin className="w-5 h-5 text-rose-600 mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      {office.city}
                    </p>
                    <p className="text-sm text-gray-600">
                      {office.address}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;












// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Phone, Mail, MapPin, Send } from 'lucide-react';
// import { useToast } from '@/hooks/use-toast';

// const offices = [
//   { city: 'Kochi', address: 'TV Center, Kakkanad, Kochi, Kerala 682037' },
//   { city: 'Thrissur', address: 'Flamon Complex, Main Rd, Kuriachira, Thrissur, Kerala 680006' },
//   { city: 'Calicut', address: 'Oorkadavu, Kozhikode, Kerala 673640' },
// ];

// const Contact = () => {
//   const { toast } = useToast();
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     email: '',
//     message: '',
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     toast({
//       title: 'Message Sent!',
//       description: 'We will get back to you within 24 hours.',
//     });
//     setFormData({ name: '', phone: '', email: '', message: '' });
//   };

//   return (
//     <section id="contact" className="py-20 bg-background">
//       <div className="container mx-auto px-4">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <p className="section-title">Get In Touch</p>
//           <h2 className="section-heading">
//             Looking for the Most Creative Event Planners?
//           </h2>
//           <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
//             Contact us today to bring your vision to life and create unforgettable memories!
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="glass-card p-8"
//           >
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid sm:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium text-foreground mb-2">
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     value={formData.name}
//                     onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                     className="input-elegant w-full"
//                     placeholder="Your name"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-foreground mb-2">
//                     Phone Number
//                   </label>
//                   <input
//                     type="tel"
//                     value={formData.phone}
//                     onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//                     className="input-elegant w-full"
//                     placeholder="+91 XXXXX XXXXX"
//                     required
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-foreground mb-2">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   value={formData.email}
//                   onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                   className="input-elegant w-full"
//                   placeholder="your@email.com"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-foreground mb-2">
//                   Message
//                 </label>
//                 <textarea
//                   value={formData.message}
//                   onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                   className="input-elegant w-full min-h-[120px] resize-none"
//                   placeholder="Tell us about your event..."
//                   required
//                 />
//               </div>

//               <button type="submit" className="btn-gold w-full flex items-center justify-center gap-2">
//                 <Send className="w-4 h-4" />
//                 Send Message
//               </button>
//             </form>
//           </motion.div>

//           {/* Contact Info */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="space-y-8"
//           >
//             {/* Phone & Email */}
//             <div className="glass-card p-6">
//               <div className="flex items-center gap-4 mb-4">
//                 <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
//                   <Phone className="w-5 h-5 text-primary" />
//                 </div>
//                 <div>
//                   <p className="text-sm text-muted-foreground">Call Us</p>
//                   <a href="tel:+918590010011" className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
//                     +91-859-001-0011
//                   </a>
//                 </div>
//               </div>
//               <div className="flex items-center gap-4">
//                 <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
//                   <Mail className="w-5 h-5 text-primary" />
//                 </div>
//                 <div>
//                   <p className="text-sm text-muted-foreground">Email Us</p>
//                   <a href="mailto:melodiaeventmanagement@gmail.com" className="text-lg font-semibold text-foreground hover:text-primary transition-colors break-all">
//                     melodiaeventmanagement@gmail.com
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* Office Locations */}
//             <div className="space-y-4">
//               <h3 className="text-lg font-serif font-bold text-foreground">Our Offices</h3>
//               {offices.map((office) => (
//                 <div key={office.city} className="glass-card p-4 flex items-start gap-3">
//                   <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
//                   <div>
//                     <p className="font-semibold text-foreground">{office.city}</p>
//                     <p className="text-sm text-muted-foreground">{office.address}</p>
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
