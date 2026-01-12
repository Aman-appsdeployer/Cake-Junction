import { motion, useInView } from "framer-motion";
import {
  CheckCircle,
  HeartHandshake,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

/* ================= IMAGES ================= */
import  heroImage  from "@/assets/img3.jpg";
import about3 from "@/assets/img1.jpg";
import about1 from "@/assets/img3.jpg";
import about2 from "@/assets/img3.jpg";
import about4 from "@/assets/venue-4.jpg"

/* ================= DATA ================= */
const features = [
  "Freshly Baked Every Day",
  "Premium Quality Ingredients",
  "Custom Cake Designs",
  "On-Time Delivery",
];

const stats = [
  { value: 5000, suffix: "+", label: "Cakes Delivered" },
  { value: 1200, suffix: "+", label: "Happy Customers" },
  { value: 50, suffix: "+", label: "Cake Varieties" },
  { value: 5, suffix: "★", label: "Customer Rating" },
];

const values = [
  {
    icon: HeartHandshake,
    title: "Customer First",
    desc: "Every cake is crafted with care, keeping your happiness at the center.",
  },
  {
    icon: Sparkles,
    title: "Creativity",
    desc: "Unique designs and flavors that make every celebration special.",
  },
  {
    icon: ShieldCheck,
    title: "Quality & Trust",
    desc: "Only premium ingredients and hygienic baking standards.",
  },
];

/* ================= COUNT UP ================= */
const CountUp = ({
  end,
  suffix,
  duration = 2,
}: {
  end: number;
  suffix: string;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / (duration * 1000), 1);
      setCount(Math.floor(end * progress));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <div ref={ref} className="text-4xl font-bold text-foreground">
      {count}
      <span className="text-primary">{suffix}</span>
    </div>
  );
};

/* ================= PAGE ================= */
const About = () => {
  return (
    <main className="overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Cake Junction Bakery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 container mx-auto px-4 pt-32">
          <div className="max-w-3xl text-white">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="uppercase tracking-widest text-sm mb-4 text-primary"
            >
              Premium Bakery & Cake Studio
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl xl:text-7xl font-serif font-bold mb-6"
            >
              Baking{" "}
              <span className="text-gradient-cake">
                Sweet Moments
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="max-w-xl mb-10 text-white/90"
            >
              From birthdays and weddings to everyday treats, Cake Junction
              creates handcrafted cakes that taste as beautiful as they look.
            </motion.p>

            <div className="flex gap-4">
              <a href="#contact" className="btn-gold">
                Order Your Cake
              </a>
              <a
                href="https://wa.me/919999999999"
                className="btn-outline-gold"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Order
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OUR STORY ================= */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src={about4}
                alt="Cake Junction Story"
                className="w-full h-[420px] object-cover"
              />
            </div>

            <div className="absolute -bottom-6 left-6 bg-card px-6 py-3 rounded-full shadow-lg text-sm font-medium">
              Baking Happiness Since Day One
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="section-title mb-2">Our Story</p>

            <h2 className="section-heading mb-6">
              Crafted with{" "}
              <span className="text-gradient-cake">
                Love & Passion
              </span>
            </h2>

            <p className="text-muted-foreground mb-6">
              Cake Junction started with a simple idea — to bake cakes that
              bring smiles. What began as a small passion has grown into a
              trusted bakery loved by thousands of customers.
            </p>

            <p className="text-muted-foreground mb-8">
              Every cake is baked fresh, designed thoughtfully, and delivered
              with care. We believe cakes aren’t just desserts — they are
              memories.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="glass-card p-4">
                <p className="font-semibold">Handcrafted Designs</p>
                <p className="text-sm text-muted-foreground">
                  Made uniquely for every customer.
                </p>
              </div>
              <div className="glass-card p-4">
                <p className="font-semibold">Premium Ingredients</p>
                <p className="text-sm text-muted-foreground">
                  Quality you can taste.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">

          <div className="grid grid-cols-2 gap-4">
            {[about1, about2, about3, about4].map((img, i) => (
              <div key={i} className="rounded-2xl overflow-hidden h-56">
                <img
                  src={img}
                  className="w-full h-full object-cover hover:scale-105 transition duration-700"
                />
              </div>
            ))}
          </div>

          <div>
            <p className="section-title">Why Choose Us</p>
            <h2 className="section-heading mb-6">
              What Makes{" "}
              <span className="text-gradient-cake">
                Cake Junction Special
              </span>
            </h2>

            <p className="text-muted-foreground mb-10">
              From simple treats to grand celebration cakes, we focus on taste,
              design, and customer satisfaction.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <p className="section-title">Our Values</p>
            <h2 className="section-heading">
              What We{" "}
              <span className="text-gradient-cake">
                Stand For
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-10 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <v.icon className="text-primary w-7 h-7" />
                </div>
                <h3 className="font-semibold text-xl mb-3">{v.title}</h3>
                <p className="text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-28 bg-secondary/30 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-heading mb-6"
          >
            Ready to Order{" "}
            <span className="text-gradient-cake">
              Your Perfect Cake?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground mb-10"
          >
            Let us make your celebration sweeter with a cake crafted just for you.
          </motion.p>

          <div className="flex justify-center gap-4">
            <a href="#contact" className="btn-gold">
              Contact Us
            </a>
            <a
              href="https://wa.me/919999999999"
              className="btn-outline-gold"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Order
            </a>
          </div>
        </div>
      </section>

    </main>
  );
};

export default About;
