import { motion } from "framer-motion";
import {
  ArrowRight,
  CakeSlice,
  Heart,
  ShieldCheck,
  Sparkles,
  Users,
  ShoppingBag,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/pages/context/CartContext";

/* =================  Hero Section IMAGES ================= */
import heroImg from "@/assets/hero3.png";


/* ================= IMAGES ================= */
import birthdayCake from "@/assets/img3.jpg";
import weddingCake from "@/assets/venue-4.jpg";
import corporateCake from "@/assets/img16.jpg";
import customCake from "@/assets/venue-4.jpg";
import cupcakes from "@/assets/venue-4.jpg";
import dessertTable from "@/assets/img6.jpg";

/* ================= DATA ================= */
const categories = [
  {
    id: 1,
    title: "Birthday Cakes",
    desc: "Colorful cakes for birthdays of all ages.",
    image: birthdayCake,
    icon: CakeSlice,
    price: 799,
  },
  {
    id: 2,
    title: "Wedding Cakes",
    desc: "Elegant cakes for weddings and receptions.",
    image: weddingCake,
    icon: Heart,
    price: 2999,
  },
  {
    id: 3,
    title: "Corporate Cakes",
    desc: "Professional cakes for corporate events.",
    image: corporateCake,
    icon: Users,
    price: 1499,
  },
  {
    id: 4,
    title: "Custom Cakes",
    desc: "Design your own dream cake.",
    image: customCake,
    icon: Sparkles,
    price: 1999,
  },
  {
    id: 5,
    title: "Dessert Tables",
    desc: "Complete dessert setup for events.",
    image: dessertTable,
    icon: ShieldCheck,
    price: 3499,
  },
  {
    id: 6,
    title: "Cupcakes & Pastries",
    desc: "Perfect for gifting and parties.",
    image: cupcakes,
    icon: CakeSlice,
    price: 499,
  },
];

const Categories: React.FC = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleOrderNow = (item: typeof categories[number]) => {
    addToCart(item);       // add to cart
    navigate("/cart");     // redirect to cart
  };

  return (
    <main className="overflow-x-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Cake Categories"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 container mx-auto px-4 pt-24 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 bg-primary/20 px-4 py-1 rounded-full text-sm font-medium mb-5">
              <ShoppingBag className="w-4 h-4" />
              Cake Categories
            </span>

            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              Explore Our <span className="text-primary">Cake Categories</span>
            </h1>

            <p className="text-white/80 text-lg mb-8 max-w-xl">
              Discover delicious cakes crafted for every occasion — birthdays,
              weddings, corporate events, and more.
            </p>

            <div className="flex gap-4">
              <a href="#categories" className="btn-gold">
                Explore Categories
              </a>
              <a href="/shop" className="btn-outline-gold">
                View All Cakes
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= CATEGORIES GRID ================= */}
      <section id="categories" className="py-24 bg-background">
        <div className="container mx-auto px-4">

          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="section-title">Our Categories</p>
            <h2 className="section-heading">
              Choose Your <span className="text-primary">Favorite Cake</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {categories.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group bg-card rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
              >
                {/* IMAGE */}
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

                {/* CONTENT */}
                <div className="p-7">
                  <h3 className="font-serif font-bold text-xl mb-2 group-hover:text-primary transition">
                    {item.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-3">
                    {item.desc}
                  </p>

                  {/* PRICE */}
                  <p className="text-lg font-semibold text-primary mb-5">
                    ₹{item.price}
                  </p>

                  {/* ORDER BUTTON */}
                  <button
                    onClick={() => handleOrderNow(item)}
                    className="btn-gold w-full flex items-center justify-center gap-2"
                  >
                    Order Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
};

export default Categories;
