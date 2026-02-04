import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/* ===== IMAGES ===== */
import birthdayCake from "@/assets/img1.jpg";
import desserts from "@/assets/img2.jpg";
import weddingCake from "@/assets/img3.jpg";
import customCake from "@/assets/img4.jpg";
import cupcakes from "@/assets/img5.jpg";
import corporateCake from "@/assets/img16.jpg";

const services = [
  {
    title: "Birthday Cakes",
    description:
      "Celebrate birthdays with beautifully designed cakes crafted to match your theme and taste.",
    image: birthdayCake,
  },
  {
    title: "Wedding Cakes",
    description:
      "Elegant multi-tier wedding cakes designed to make your special day unforgettable.",
    image: weddingCake,
  },
  {
    title: "Custom Cakes",
    description:
      "Personalized cakes made exactly the way you imagine – flavors, design, and size.",
    image: customCake,
  },
  {
    title: "Cupcakes & Pastries",
    description:
      "Delicious cupcakes and pastries baked fresh daily for every sweet craving.",
    image: cupcakes,
  },
  {
    title: "Dessert Tables",
    description:
      "Complete dessert setups for parties, events, and celebrations of all sizes.",
    image: desserts,
  },
  {
    title: "Corporate Orders",
    description:
      "Branded cakes and bulk dessert orders for corporate events and office celebrations.",
    image: corporateCake,
  },
];

const Services = () => {
  return (
    <section id="services" className=" bg-white">
      <div className="container mx-auto px-4">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-title">Our Services</p>
          <h2 className="section-heading">
            What We Bake at Cake Junction
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            From classic cakes to custom creations, Cake Junction offers freshly
            baked desserts made with premium ingredients and lots of love.
          </p>
        </motion.div>

        {/* ================= SERVICES GRID ================= */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-card shadow-lg card-hover">
                
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-90" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-200 mb-4 line-clamp-2">
                    {service.description}
                  </p>
                  <button className="flex items-center gap-2 text-primary font-semibold text-sm group/btn">
                    View Details
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
