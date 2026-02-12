import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

/* ================= IMAGES ================= */
import blueberry from "@/assets/blueberry.jpg";
import butterScotch from "@/assets/butterscotch.jpg";
import cake1 from "@/assets/img1.jpg";
import cake2 from "@/assets/img2.jpg";
import cake3 from "@/assets/img3.jpg";
import cake4 from "@/assets/img4.jpg";
import redvalvet from "@/assets/red-velvet-cake.jpg";
import oreocake from "@/assets/oreo.jpeg";

/* ================= TYPES ================= */
type Cake = {
  name: string;
  category: string;
  rating: number;
  image: string;
};

/* ================= DATA ================= */
const cakes: Cake[] = [
  {
    name: "Chocolate Truffle Cake",
    category: "Best Seller",
    rating: 4.9,
    image: cake1,
  },
  {
    name: "Birthday Special Cake",
    category: "Birthday Collection",
    rating: 4.8,
    image: cake2,
  },
  {
    name: "Elegant Wedding Cake",
    category: "Wedding Collection",
    rating: 5.0,
    image: cake3,
  },
  {
    name: "Cupcakes Box",
    category: "Desserts",
    rating: 4.7,
    image: cake4,
  },
  {
    name: "Red Velvet Cake",
    category: "Best Seller",
    rating: 4.8,
    image: redvalvet,
  },
  {
    name: "butter scotch cake ",
    category: "Seasonal",
    rating: 4.6,
    image: butterScotch,
  },
  {
    name: "Blueberry Cake",
    category: "Seasonal",
    rating: 4.7,
    image: blueberry,
  },
  {
    name: "Oreo Cake",
    category: "Seasonal",
    rating: 4.5,
    image: oreocake,
  },
];

const PopularCakes: React.FC = () => {
  return (
    <section
      id="popular-cakes"
      className="py-10 sm:py-20 bg-gradient-to-b from-white to-rose-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-primary font-semibold text-sm sm:text-base mb-2">
            Our Cakes
          </p>

          <h2
            className="font-bold text-gray-900 leading-tight
                         text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
          >
            Customer Favorite Cakes
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Discover our most loved cakes, baked fresh using premium
            ingredients.
          </p>
        </motion.div>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {cakes.map((cake, index) => (
            <motion.div
              key={cake.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl overflow-hidden
                         border border-rose-100 bg-white
                         shadow-md hover:shadow-2xl
                         transition-all duration-500"
            >
              {/* IMAGE */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={cake.image}
                  alt={cake.name}
                  loading="lazy"
                  className="w-full h-full object-cover
                             transition-transform duration-700
                             group-hover:scale-110"
                />

                {/* gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* category badge */}
                <div
                  className="absolute top-4 left-4 bg-white/90 backdrop-blur
                                px-3 py-1 rounded-full text-xs font-semibold text-primary shadow"
                >
                  {cake.category}
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-3">
                  {cake.name}
                </h3>

                {/* rating */}
                <div className="flex items-center gap-2">
                  <div
                    className="flex items-center gap-1
                                  bg-rose-50 border border-rose-200
                                  px-3 py-1.5 rounded-full"
                  >
                    <Star className="w-4 h-4 text-rose-500 fill-rose-500" />
                    <span className="text-sm font-semibold text-rose-600">
                      {cake.rating}
                    </span>
                    <span className="text-xs text-gray-500 ml-1">rating</span>
                  </div>
                </div>
              </div>

              {/* hover ring */}
              <div
                className="absolute inset-0 rounded-2xl
                              ring-0 group-hover:ring-2
                              ring-rose-400/40 transition pointer-events-none"
              />
            </motion.div>
          ))}
        </div>

        {/* ================= CTA ================= */}
        <div className="text-center mt-14">
          <Link
            to="/shop"
            className="inline-flex items-center justify-center
                       bg-primary hover:brightness-110
                       text-white font-semibold
                       px-8 py-3 rounded-full
                       transition shadow-lg hover:shadow-xl"
          >
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularCakes;
