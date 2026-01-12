import heroImage from "@/assets/img3.jpg";
import { motion } from "framer-motion";
import { CakeSlice, PhoneCall } from "lucide-react";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Cake Junction handcrafted cakes"
          className="w-full h-full object-cover"
        />

        {/* OVERLAY (no blur) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 container mx-auto px-4 pt-28">
        <div className="max-w-3xl text-white">

          {/* BADGE */}
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-4 px-4 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium"
          >
            Freshly Baked Happiness
          </motion.span>

          {/* HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight"
          >
            Delicious Cakes for <br />
            <span className="text-primary">Every Celebration</span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-gray-200 text-base sm:text-lg max-w-xl mb-10 leading-relaxed"
          >
            Handcrafted cakes made with premium ingredients for birthdays,
            weddings, corporate events, and custom celebrations.
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <NavLink
              to="/shop"
              className="btn-gold inline-flex items-center justify-center gap-2"
            >
              <CakeSlice className="w-5 h-5" />
              Explore Cakes
            </NavLink>

            <NavLink
              to="/contact"
              className="btn-outline-gold inline-flex items-center justify-center gap-2"
            >
              Custom Order
            </NavLink>
          </motion.div>

          {/* PHONE CTA */}
          <motion.a
            href="tel:+919999999999"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="inline-flex items-center gap-2 text-sm sm:text-base text-gray-200 hover:text-primary transition"
          >
            <PhoneCall className="w-5 h-5" />
            Call to Order: +91 99999 99999
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
