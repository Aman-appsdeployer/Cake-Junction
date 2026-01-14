import ctaCake from "@/assets/img1.jpg";
import { motion } from "framer-motion";
import { ArrowRight, CakeSlice } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="py-28 bg-secondary/20 ">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <p className="section-title mb-3">Order Your Cake</p>

            <h2 className="section-heading mb-6">
              Make Every Celebration <br />
              <span className="text-primary">Sweeter with Cake Junction</span>
            </h2>

            <p className="text-muted-foreground mb-10 leading-relaxed">
              From birthdays and weddings to custom celebrations,
              our cakes are handcrafted using premium ingredients
              and designed to impress.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/contact"
                className="btn-gold inline-flex items-center gap-2"
              >
                <CakeSlice className="w-5 h-5" />
                Order Now
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/917347713573"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold"
              >
                WhatsApp Order
              </a>
            </div>
          </motion.div>

          {/* RIGHT IMAGE (CARD STYLE) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* IMAGE CARD */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={ctaCake}
                alt="Custom Cakes by Cake Junction"
                className="w-full h-[420px] object-cover"
              />

              {/* SOFT OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {/* BADGE */}
              <div className="absolute bottom-6 left-6 bg-background px-4 py-2 rounded-full shadow text-sm font-semibold">
                ⭐ 4.9 Rated Cakes
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CTABanner;






