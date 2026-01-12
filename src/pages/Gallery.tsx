import { motion } from "framer-motion";
import { useState } from "react";

/* ================= IMAGES ================= */
import galleryHeroImage from "@/assets/img4.jpg";

import cake1 from "@/assets/img1.jpg";
import cake2 from "@/assets/img2.jpg";
import cake3 from "@/assets/img3.jpg";
import cake4 from "@/assets/img5.jpg";
import cake5 from "@/assets/img6.jpg";
import cake6 from "@/assets/img2.jpg";

/* ================= FEATURED WORK ================= */
const ourWorkImages = [
  { id: 1, title: "Luxury Wedding Cake", category: "Wedding Cakes", image: cake3 },
  { id: 2, title: "Birthday Celebration Cake", category: "Birthday Cakes", image: cake1 },
  { id: 3, title: "Custom Theme Cake", category: "Custom Cakes", image: cake4 },
  { id: 4, title: "Corporate Event Cake", category: "Corporate Cakes", image: cake6 },
  { id: 5, title: "Dessert Table Setup", category: "Desserts", image: cake5 },
  { id: 6, title: "Cupcake Collection", category: "Desserts", image: cake2 },
];

/* ================= CATEGORY GALLERY ================= */
const categoryImages = [
  { id: 101, title: "Royal Wedding Cake", category: "Wedding Cakes", image: cake3 },
  { id: 102, title: "Chocolate Birthday Cake", category: "Birthday Cakes", image: cake1 },
  { id: 103, title: "Floral Theme Cake", category: "Custom Cakes", image: cake4 },
  { id: 104, title: "Office Celebration Cake", category: "Corporate Cakes", image: cake6 },
  { id: 105, title: "Mini Dessert Cups", category: "Desserts", image: cake5 },
  { id: 106, title: "Premium Cupcakes", category: "Desserts", image: cake2 },
];

const categories = [
  "All",
  "Wedding Cakes",
  "Birthday Cakes",
  "Custom Cakes",
  "Corporate Cakes",
  "Desserts",
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? categoryImages
      : categoryImages.filter((img) => img.category === activeCategory);

  return (
    <main>

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={galleryHeroImage}
            alt="Cake Junction Gallery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="section-title">Our Creations</p>

            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              Cake <span className="text-gradient-gold">Gallery</span>
            </h1>

            <p className="text-muted-foreground max-w-xl mb-10">
              Explore our handcrafted cakes and desserts made for every
              celebration and special moment.
            </p>

            <a href="#category-gallery" className="btn-gold">
              Explore Cakes
            </a>
          </motion.div>
        </div>
      </section>

      {/* ================= FEATURED WORK ================= */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">

          <div className="max-w-2xl mb-14">
            <p className="section-title">Featured</p>
            <h3 className="text-3xl font-semibold mb-4">
              Signature Cake Creations
            </h3>
            <p className="text-muted-foreground">
              A handpicked selection of our finest cake designs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {ourWorkImages.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative h-72 rounded-2xl overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition"
                />

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />

                <div className="absolute bottom-0 p-6 opacity-0 group-hover:opacity-100 transition">
                  <h4 className="text-white font-semibold">{item.title}</h4>
                  <p className="text-white/80 text-sm">{item.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CATEGORY FILTER ================= */}
      <section id="category-gallery" className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4">

          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="section-title">Browse By Category</p>
            <h3 className="text-3xl font-semibold mb-4">
              Choose Your Favourite
            </h3>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-14">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition
                  ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary/40 hover:bg-secondary"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredImages.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="group relative h-72 rounded-2xl overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition"
                />

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />

                <div className="absolute bottom-0 p-6 opacity-0 group-hover:opacity-100 transition">
                  <h4 className="text-white font-semibold">{item.title}</h4>
                  <p className="text-white/80 text-sm">{item.category}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </main>
  );
};

export default Gallery;
