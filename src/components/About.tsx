import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

/* ===== IMAGES ===== */
import cake1 from "@/assets/img1.jpg";
import cake2 from "@/assets/img2.jpg";
import cake3 from "@/assets/img3.jpg";
import cake4 from "@/assets/img4.jpg";

const features = [
  "Freshly baked every day",
  "Premium quality ingredients",
  "Custom cakes for all occasions",
  "Trusted by 10,000+ happy customers",
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/40">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ================= IMAGE GRID ================= */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src={cake1}
                  alt="Chocolate cake"
                  className="h-48 w-full object-cover rounded-2xl shadow-lg"
                />
                <img
                  src={cake2}
                  alt="Birthday cake"
                  className="h-64 w-full object-cover rounded-2xl shadow-lg"
                />
              </div>

              <div className="space-y-4 pt-8">
                <img
                  src={cake3}
                  alt="Cupcakes"
                  className="h-64 w-full object-cover rounded-2xl shadow-lg"
                />
                <img
                  src={cake4}
                  alt="Wedding cake"
                  className="h-48 w-full object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>

            {/* ===== EXPERIENCE BADGE ===== */}
            {/* <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring" }}
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-card border border-primary/30 rounded-full px-6 py-3 flex items-center gap-3 shadow-lg"
            >
              <Award className="w-8 h-8 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Experience</p>
                <p className="font-semibold text-foreground">
                  15+ Years of Baking
                </p>
              </div>
            </motion.div> */}
          </motion.div>

          {/* ================= CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-title">About Cake Junction</p>

            <h2 className="section-heading mb-6">
              Baking Happiness, One Cake at a Time
            </h2>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              At <strong>Cake Junction</strong>, we believe every celebration
              deserves a delicious centerpiece. From birthdays and weddings to
              everyday treats, our cakes are baked fresh with love and care.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Using only premium ingredients and time-tested recipes, we craft
              cakes that not only look beautiful but taste unforgettable.
              Custom designs, rich flavors, and timely delivery — we do it all.
            </p>

            {/* ===== FEATURES ===== */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* ===== CTA ===== */}
            <div className="flex flex-wrap gap-4">
              <a href="#menu" className="btn-gold">
                Explore Cakes
              </a>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold"
              >
                WhatsApp Order
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
