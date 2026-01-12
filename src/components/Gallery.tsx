import { motion } from "framer-motion";

import cake2 from "@/assets/img3.jpg";
import cake3 from "@/assets/img4.jpg";
import { default as cake4, default as cake5 } from "@/assets/venue-1.jpg";
import { default as cake1, default as cake6 } from "@/assets/venue-4.jpg";

const images = [
  { src: cake1, alt: "Chocolate Cake" },
  { src: cake2, alt: "Birthday Cake" },
  { src: cake3, alt: "Wedding Cake" },
  { src: cake4, alt: "Cupcakes" },
  { src: cake5, alt: "Fresh Pastries" },
  { src: cake6, alt: "Custom Designed Cake" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-title">Our Creations</p>
          <h2 className="section-heading">
            Sweet Moments by Cake Junction
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Take a look at some of our handcrafted cakes and desserts,
            baked with love and designed to delight every celebration.
          </p>
        </motion.div>

        {/* ================= MASONRY GRID ================= */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {images.map((image, index) => (
            <motion.div
              key={image.alt}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="break-inside-avoid overflow-hidden rounded-2xl group cursor-pointer shadow-lg"
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">
                    {image.alt}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;
