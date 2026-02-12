import { motion } from "framer-motion";
import {
  CakeSlice,
  Heart,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

/* ================= HERO IMAGE ================= */
import heroImg from "@/assets/hero3.png";

/* ================= CATEGORY IMAGES ================= */
import cupcakes from "@/assets/butterscotch.jpg";
import corporateCake from "@/assets/corpote.jfif";
import customCake from "@/assets/cutom.jfif";
import dessertTable from "@/assets/dessert.jfif";
import birthdayCake from "@/assets/img3.jpg";
import weddingCake from "@/assets/wedding.jpg";

/* ================= TYPES ================= */
type Category = {
  id: number;
  title: string;
  desc: string;
  image: string;
  icon: React.ElementType;
};

/* ================= DATA ================= */
const categories: Category[] = [
  {
    id: 1,
    title: "Birthday Cakes",
    desc: "Colorful cakes for birthdays of all ages",
    image: birthdayCake,
    icon: CakeSlice,
  },
  {
    id: 2,
    title: "Wedding Cakes",
    desc: "Elegant cakes for weddings and receptions",
    image: weddingCake,
    icon: Heart,
  },
  {
    id: 3,
    title: "Corporate Cakes",
    desc: "Professional cakes for corporate events",
    image: corporateCake,
    icon: Users,
  },
  {
    id: 4,
    title: "Custom Cakes",
    desc: "Design your own dream cake",
    image: customCake,
    icon: Sparkles,
  },
  {
    id: 5,
    title: "Dessert Tables",
    desc: "Complete dessert setup for events",
    image: dessertTable,
    icon: ShieldCheck,
  },
  {
    id: 6,
    title: "Cupcakes & Pastries",
    desc: "Perfect for gifting and parties",
    image: cupcakes,
    icon: CakeSlice,
  },
];

const Categories: React.FC = () => {
  const navigate = useNavigate();

  /*  correct click handler */
  const handleCategoryClick = (category: Category) => {
    // navigate with category filter param
    navigate(`/shop?category=${encodeURIComponent(category.title)}`);
  };

  return (
    <main className="overflow-x-hidden bg-white">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[110vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Cake Categories"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        
      </section>

      {/* ================= CATEGORY GRID ================= */}
      <section className="py-24 bg-gradient-to-b from-white to-rose-50">
        <div className="container mx-auto px-4">

          {/* HEADER */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="section-title">Our Categories</p>
            <h2 className="section-heading">
              Choose Your <span className="text-primary">Favorite Cake</span>
            </h2>
            <p className="text-muted-foreground mt-3">
              Explore our delicious cake collections by category
            </p>
          </div>

          {/* GRID */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

            {categories.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -8 }}
                onClick={() => handleCategoryClick(item)}
                className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >

                {/* IMAGE */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>

                {/* ICON BADGE */}
                <div className="absolute top-5 left-5 bg-white/90 backdrop-blur p-3 rounded-full shadow-lg">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>

                {/* TEXT OVERLAY */}
                <div className="absolute bottom-0 p-7 text-white">
                  <h3 className="font-serif text-2xl font-bold mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-white/90 mb-4 max-w-xs">
                    {item.desc}
                  </p>

                  <span className="bg-white text-primary font-semibold px-5 py-2 rounded-full inline-block hover:scale-105 transition">
                    View Cakes →
                  </span>
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
