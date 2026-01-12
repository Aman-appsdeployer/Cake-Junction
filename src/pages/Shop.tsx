import { motion } from "framer-motion";
import {
  ArrowRight,
  CakeSlice,
  Heart,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Users,
} from "lucide-react";

/* ================= IMAGES ================= */
import { default as birthdayCake, default as corporateCake } from "@/assets/img3.jpg";
import dessertTable from "@/assets/img6.jpg";
import { default as cupcakes, default as customCake, default as weddingCake } from "@/assets/venue-4.jpg";

/* ================= DATA ================= */
const shopItems = [
  {
    title: "Birthday Cakes",
    desc: "Fun, colorful cakes customized for all age groups.",
    image: birthdayCake,
    icon: CakeSlice,
  },
  {
    title: "Wedding Cakes",
    desc: "Elegant multi-tier cakes crafted for your big day.",
    image: weddingCake,
    icon: Heart,
  },
  {
    title: "Corporate Cakes",
    desc: "Professional cakes for office events & celebrations.",
    image: corporateCake,
    icon: Users,
  },
  {
    title: "Custom Cakes",
    desc: "Designed exactly the way you imagine it.",
    image: customCake,
    icon: Sparkles,
  },
  {
    title: "Dessert Tables",
    desc: "Complete dessert setups for events & parties.",
    image: dessertTable,
    icon: ShieldCheck,
  },
  {
    title: "Cupcakes & Pastries",
    desc: "Perfect for gifting and small celebrations.",
    image: cupcakes,
    icon: CakeSlice,
  },
];

const Shop = () => {
  return (
    <main className="overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src={birthdayCake}
            alt="Shop Cakes"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 " />
        </div>

        <div className="relative z-10 container mx-auto px-4 pt-28 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 bg-primary/20 px-4 py-1 rounded-full text-sm font-medium mb-5">
              <ShoppingBag className="w-4 h-4" />
              Shop Cakes
            </span>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6">
              Delicious Cakes for <br />
              <span className="text-primary">Every Occasion</span>
            </h1>

            <p className="text-white/80 text-lg mb-10 max-w-xl">
              Explore our wide range of freshly baked cakes made with
              premium ingredients and crafted to perfection.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#cakes" className="btn-gold">
                Browse Cakes
              </a>
              <a href="/contact" className="btn-outline-gold">
                Custom Order
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= GRID ================= */}
      <section id="cakes" className="py-28 bg-background">
        <div className="container mx-auto px-4">

          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="section-title">Our Collection</p>
            <h2 className="section-heading">
              Shop Our <span className="text-primary">Cakes</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {shopItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group bg-card rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-60 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <div className="absolute top-4 left-4 bg-background p-2 rounded-full shadow">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>

                <div className="p-7">
                  <h3 className="font-serif font-bold text-xl mb-2 group-hover:text-primary transition">
                    {item.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-5">
                    {item.desc}
                  </p>

                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 font-medium text-primary"
                  >
                    Order Now
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
};

export default Shop;
