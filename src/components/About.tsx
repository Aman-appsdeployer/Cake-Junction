import { motion, useInView } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";

/* ================= IMAGES ================= */
/* use relative paths to avoid vite alias errors */
import cake2 from "../assets/img11.jpg";
import cake3 from "../assets/img12.jpg";
import cake5 from "../assets/img14.jpg";
import cake4 from "../assets/img15.jpg";
import cake1 from "../assets/img8.jpg";

/* ================= TYPEWRITER ================= */

const Typewriter = ({ text }: { text: string }) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { amount: 0.4 });

  const [count, setCount] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!isInView) {
      setCount(0);
      setIsDeleting(false);
      return;
    }

    const timeout = setTimeout(
      () => {
        setCount((prev) => {
          if (!isDeleting) {
            if (prev < text.length) return prev + 1;
            setIsDeleting(true);
            return prev;
          } else {
            if (prev > 0) return prev - 1;
            setIsDeleting(false);
            return prev;
          }
        });
      },
      isDeleting ? 70 : 180
    );

    return () => clearTimeout(timeout);
  }, [count, isDeleting, isInView, text]);

  return (
    <span ref={ref}>
      {text.slice(0, count)}
      {isInView && (
        <motion.span
          className="ml-1 text-primary"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
        >
          |
        </motion.span>
      )}
    </span>
  );
};

/* ================= DATA ================= */

const features = [
  "Freshly baked every day",
  "Premium ingredients only",
  "Custom cakes for all occasions",
  "Same-day delivery available",
  "Secure WhatsApp ordering",
  "10,000+ happy customers served",
];

/* ================= COMPONENT ================= */

const About = () => {
  return (
    <section className="py-14 sm:py-18 md:py-20  bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-14 lg:gap-16 items-center">

          {/* ================= SLIDER ================= */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative w-full overflow-hidden"
          >
            {/* glow background */}
            <div className="absolute -inset-6 sm:-inset-8 
                            bg-gradient-to-tr 
                            from-yellow-400/20 
                            via-pink-400/10 
                            to-purple-500/20 
                            blur-3xl rounded-full" />

            <Swiper
              modules={[Autoplay, EffectCoverflow]}
              effect="coverflow"
              centeredSlides
              grabCursor
              loop
              autoplay={{ delay: 2400, disableOnInteraction: false }}

              slidesPerView={1}
              spaceBetween={16}

              breakpoints={{
                560: { slidesPerView: 1 },
                640: { slidesPerView: 1.2 },
                768: { slidesPerView: 1.4 },
                1024: { slidesPerView: 1.6 },
              }}

              coverflowEffect={{
                rotate: 12,
                depth: 120,
                modifier: 1,
                slideShadows: false,
              }}

              className="w-full max-w-[520px] mx-auto relative z-10"
            >
              {[cake1, cake2, cake3, cake4, cake5].map((img, i) => (
                <SwiperSlide key={i}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="rounded-2xl shadow-2xl overflow-hidden
                               h-52 sm:h-60 md:h-72 lg:h-96 w-full"
                  >
                    <img
                      src={img}
                      alt="Cake product"
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>

          {/* ================= CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <p className="section-title text-sm sm:text-base">
              About Cake Junction
            </p>

            <h2 className="section-heading mb-5 leading-tight
                           text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Baking Sweet <br />
              <span className="text-gradient-gold">
                <Typewriter text="Moments & Memories" />
              </span>
            </h2>

            <p className="text-muted-foreground mb-4 text-sm sm:text-base">
              Cake Junction is a premium online bakery delivering handcrafted
              cakes and desserts for birthdays, weddings, anniversaries,
              and special celebrations.
            </p>

            <p className="text-muted-foreground mb-7 text-sm sm:text-base">
              We combine artisan baking, custom design, and fast delivery
              to make every celebration unforgettable.
            </p>

            {/* FEATURES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="font-medium text-sm sm:text-base">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="#menu" className="btn-gold text-center w-full sm:w-auto">
                Explore Cakes
              </a>

              <a
                href="https://wa.me/917347713573"
                className="btn-outline-gold text-center w-full sm:w-auto"
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
