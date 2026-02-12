import { motion, useInView } from "framer-motion";
import {
  CakeSlice,
  CheckCircle,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

/* ================= IMAGES ================= */
import aboutMain from "@/assets/cake.png";
import heroImage from "@/assets/hero3.png";
import about3 from "@/assets/img1.jpg";
import about1 from "@/assets/img14.jpg";
import about2 from "@/assets/img8.jpg";

/* ================= DATA ================= */

const features = [
  "Freshly baked every single day",
  "Premium imported ingredients",
  "100% hygienic baking process",
  "Custom theme cake specialists",
  "Same-day delivery available",
  "Loved by thousands of customers",
];

const stats = [
  { value: 5000, suffix: "+", label: "Cakes Delivered", icon: CakeSlice },
  { value: 1200, suffix: "+", label: "Happy Customers", icon: Users },
  { value: 50, suffix: "+", label: "Cake Designs", icon: Sparkles },
  { value: 5, suffix: "★", label: "Avg Rating", icon: Star },
];

const values = [
  {
    icon: HeartHandshake,
    title: "Made With Care",
    desc: "Every cake is crafted like it’s for our own celebration.",
  },
  {
    icon: Sparkles,
    title: "Creative by Nature",
    desc: "Designs that stand out and flavors people remember.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Promise",
    desc: "Only premium ingredients and strict hygiene standards.",
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
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;

    const step = (time: number) => {
      if (!start) start = time;
      const progress = Math.min((time - start) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [inView, end, duration]);

  return (
    <div ref={ref} className="text-4xl font-bold text-gray-900">
      {count}
      <span className="text-primary">{suffix}</span>
    </div>
  );
};

/* ================= PAGE ================= */

const About: React.FC = () => {
  return (
    <main className="overflow-hidden bg-white">
      {/* ================= HERO — IMAGE ONLY ================= */}
      <section className="relative h-[110vh] w-full">
        <img
          src={heroImage}
          alt="Cake Junction Bakery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20" />
      </section>

      {/* ================= STORY ================= */}
      <section className="py-16 bg-gradient-to-b from-white to-rose-50">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          {/* ================= IMAGE SIDE ================= */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            {/* glow */}
            <div className="absolute inset-0 rounded-3xl blur-2xl bg-primary/20 opacity-0 group-hover:opacity-40 transition" />

            <img
              src={aboutMain}
              alt="Our bakery story"
              className="relative rounded-3xl shadow-2xl w-full h-[560px] object-cover
                   group-hover:scale-[1.03] transition duration-700"
            />

            {/* floating badge */}
            <div
              className="absolute -bottom-6 left-6 bg-white/95 backdrop-blur
                      px-6 py-3 rounded-full shadow-xl text-sm font-semibold
                      border border-rose-100"
            >
              Baking Happiness Since Day One
            </div>
          </motion.div>

          {/* ================= TEXT SIDE ================= */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-title mb-3">Our Journey</p>

            <h2 className="section-heading mb-6 leading-tight">
              We Bake Cakes That Become{" "}
              <span className="text-gradient-cake">Memories</span>
            </h2>

            <p className="text-muted-foreground mb-6 leading-relaxed text-[15px] sm:text-base">
              What started as a small passion kitchen has grown into a bakery
              trusted by thousands of happy customers. At Cake Junction, every
              cake is more than dessert — it’s part of someone’s celebration
              story.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed text-[15px] sm:text-base">
              From design to delivery, we focus on detail, taste, and
              presentation — so every order feels special and every bite feels
              premium.
            </p>

            {/* FEATURES GRID */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {features.slice(0, 4).map((f, i) => (
                <motion.div
                  key={f}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm border border-rose-100"
                >
                  <CheckCircle className="text-primary w-5 h-5 shrink-0" />
                  <span className="text-sm font-medium">{f}</span>
                </motion.div>
              ))}
            </div>

            {/* ================= CTA BUTTONS ================= */}
            <div className="flex flex-wrap gap-4">
              {/* Explore Cakes */}
              <a
                href="/shop"
                className="inline-flex items-center justify-center
                     bg-primary hover:brightness-110
                     text-white font-semibold
                     px-7 py-3 rounded-full
                     shadow-lg hover:shadow-xl
                     transition duration-300"
              >
                Explore Cakes
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/917347713573"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center
                     border-2 border-primary text-primary
                     hover:bg-primary hover:text-white
                     font-semibold
                     px-7 py-3 rounded-full
                     transition duration-300"
              >
                WhatsApp Order
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="section-title">Our Impact</p>
            <h2 className="section-heading">
              Numbers That Show Our{" "}
              <span className="text-gradient-cake">Sweet Success</span>
            </h2>
          </motion.div>

          {/* grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                whileHover={{ y: -8 }}
                className="relative group"
              >
                {/* glow background */}
                <div
                  className="absolute inset-0 rounded-3xl blur-xl opacity-0 
                          group-hover:opacity-40 transition
                          bg-primary/30"
                />

                {/* card */}
                <div
                  className="relative glass-card p-10 text-center rounded-3xl
                          shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  {/* animated icon bubble */}
                  <div
                    className="mx-auto mb-5 w-16 h-16 rounded-full
                            bg-primary/10 flex items-center justify-center
                            group-hover:scale-110 transition"
                  >
                    <s.icon className="w-8 h-8 text-primary" />
                  </div>

                  {/* counter */}
                  <CountUp end={s.value} suffix={s.suffix} />

                  {/* label */}
                  <p className="text-muted-foreground mt-3 font-medium">
                    {s.label}
                  </p>

                  {/* bottom accent line */}
                  <div
                    className="mt-6 h-1 w-12 mx-auto rounded-full
                            bg-gradient-to-r from-primary to-rose-400
                            group-hover:w-20 transition-all duration-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section className="py-16 bg-white ">
        <div className="container mx-auto px-4">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <p className="section-title">Behind The Bakes</p>
            <h2 className="section-heading">
              Moments From Our{" "}
              <span className="text-gradient-cake">Kitchen & Creations</span>
            </h2>
            <p className="text-muted-foreground mt-3 text-sm sm:text-base">
              A glimpse into our cake artistry, baking process, and celebration
              designs.
            </p>
          </motion.div>

          {/* GRID */}
          <div className="grid md:grid-cols-3 gap-8">
            {[about1, about2, about3].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                whileHover={{ y: -8 }}
                className="group relative rounded-3xl overflow-hidden shadow-xl"
              >
                {/* glow */}
                <div className="absolute inset-0 bg-primary/20 blur-2xl opacity-0 group-hover:opacity-40 transition" />

                {/* image */}
                <img
                  src={img}
                  alt={`Bakery gallery ${i + 1}`}
                  className="relative h-80 w-full object-cover
                       transition duration-700
                       group-hover:scale-110"
                />

                {/* overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80" />

                {/* caption */}
                <div
                  className="absolute bottom-0 p-6 text-white
                          translate-y-6 opacity-0
                          group-hover:translate-y-0
                          group-hover:opacity-100
                          transition duration-500"
                >
                  <h3 className="font-serif text-lg font-semibold mb-1">
                    {i === 0 && "Artisan Craft"}
                    {i === 1 && "Fresh Baking"}
                    {i === 2 && "Celebration Designs"}
                  </h3>

                  <p className="text-sm text-white/90">
                    {i === 0 && "Hand-decorated cakes with fine detail"}
                    {i === 1 && "Baked daily with premium ingredients"}
                    {i === 2 && "Designed for unforgettable moments"}
                  </p>
                </div>

                {/* border ring */}
                <div
                  className="absolute inset-0 rounded-3xl
                          ring-0 group-hover:ring-2
                          ring-white/40 transition pointer-events-none"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="py-28 bg-white relative overflow-hidden">
        {/* soft background glow */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-rose-300/10 rounded-full blur-3xl" />

        {/* HEADER */}
        <div className="container mx-auto px-4 text-center mb-16 relative">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Our Values
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-heading"
          >
            What We <span className="text-gradient-cake">Stand For</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground mt-4 max-w-2xl mx-auto"
          >
            These principles guide every recipe, every design, and every
            delivery we make.
          </motion.p>
        </div>

        {/* GRID */}
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-10 relative">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* glow halo */}
              <div className="absolute inset-0 rounded-3xl blur-xl bg-primary/20 opacity-0 group-hover:opacity-40 transition" />

              {/* card */}
              <div
                className="relative bg-white/80 backdrop-blur rounded-3xl p-10 text-center
                        shadow-lg hover:shadow-2xl
                        border border-rose-100
                        transition-all duration-500"
              >
                {/* icon circle */}
                <div
                  className="mx-auto mb-6 w-16 h-16 rounded-full
                          bg-gradient-to-br from-primary/15 to-rose-200/30
                          flex items-center justify-center
                          group-hover:scale-110 transition"
                >
                  <v.icon className="w-8 h-8 text-primary" />
                </div>

                {/* title */}
                <h3
                  className="font-serif font-bold text-xl mb-3
                         group-hover:text-primary transition"
                >
                  {v.title}
                </h3>

                {/* desc */}
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  {v.desc}
                </p>

                {/* bottom accent */}
                <div
                  className="mt-6 h-1 w-12 mx-auto rounded-full
                          bg-gradient-to-r from-primary to-rose-400
                          group-hover:w-20 transition-all duration-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default About;

// import { motion, useInView } from "framer-motion";
// import {
//   CheckCircle,
//   HeartHandshake,
//   ShieldCheck,
//   Sparkles
// } from "lucide-react";
// import { useEffect, useRef, useState } from "react";

// /* ================= IMAGES ================= */
// import about3 from "@/assets/img1.jpg";
// import about1 from "@/assets/img14.jpg";
// import heroImage from "@/assets/hero3.png";
// import about2 from "@/assets/img8.jpg";
// import about4 from "@/assets/cake.png";

// /* ================= DATA ================= */
// const features = [
//   "Freshly Baked Every Day",
//   "Premium Quality Ingredients",
//   "Custom Cake Designs",
//   "On-Time Delivery",
// ];

// const stats = [
//   { value: 5000, suffix: "+", label: "Cakes Delivered" },
//   { value: 1200, suffix: "+", label: "Happy Customers" },
//   { value: 50, suffix: "+", label: "Cake Varieties" },
//   { value: 5, suffix: "★", label: "Customer Rating" },
// ];

// const values = [
//   {
//     icon: HeartHandshake,
//     title: "Customer First",
//     desc: "Every cake is crafted with care, keeping your happiness at the center.",
//   },
//   {
//     icon: Sparkles,
//     title: "Creativity",
//     desc: "Unique designs and flavors that make every celebration special.",
//   },
//   {
//     icon: ShieldCheck,
//     title: "Quality & Trust",
//     desc: "Only premium ingredients and hygienic baking standards.",
//   },
// ];

// /* ================= COUNT UP ================= */
// const CountUp = ({
//   end,
//   suffix,
//   duration = 2,
// }: {
//   end: number;
//   suffix: string;
//   duration?: number;
// }) => {
//   const [count, setCount] = useState(0);
//   const ref = useRef<HTMLDivElement>(null);
//   const isInView = useInView(ref, { once: true });

//   useEffect(() => {
//     if (!isInView) return;
//     let startTime: number | null = null;

//     const animate = (time: number) => {
//       if (!startTime) startTime = time;
//       const progress = Math.min((time - startTime) / (duration * 1000), 1);
//       setCount(Math.floor(end * progress));
//       if (progress < 1) requestAnimationFrame(animate);
//     };

//     requestAnimationFrame(animate);
//   }, [isInView, end, duration]);

//   return (
//     <div ref={ref} className="text-4xl font-bold text-foreground">
//       {count}
//       <span className="text-primary">{suffix}</span>
//     </div>
//   );
// };

// /* ================= PAGE ================= */
// const About = () => {
//   return (
//     <main className="overflow-hidden bg-white">

//       {/* ================= HERO ================= */}
//       <section className="relative min-h-screen flex items-center">
//         <div className="absolute inset-0">
//           <img
//             src={heroImage}
//             alt="Cake Junction Bakery"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0" />
//         </div>

//       </section>

//       {/* ================= OUR STORY ================= */}
//       <section className="py-24 bg-background">
//         <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">

//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="relative"
//           >
//             <div className="rounded-3xl overflow-hidden shadow-xl">
//               <img
//                 src={about4}
//                 alt="Cake Junction Story"
//                 className="w-full h-[580px] object-cover"
//               />
//             </div>

//             <div className="absolute -bottom-6 left-6 bg-card px-6 py-3 rounded-full shadow-lg text-sm font-medium">
//               Baking Happiness Since Day One
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//           >
//             <p className="section-title mb-2">Our Story</p>

//             <h2 className="section-heading mb-6">
//               Crafted with{" "}
//               <span className="text-gradient-cake">
//                 Love & Passion
//               </span>
//             </h2>

//             <p className="text-muted-foreground mb-6">
//               Cake Junction started with a simple idea — to bake cakes that
//               bring smiles. What began as a small passion has grown into a
//               trusted bakery loved by thousands of customers.
//             </p>

//             <p className="text-muted-foreground mb-8">
//               Every cake is baked fresh, designed thoughtfully, and delivered
//               with care. We believe cakes aren’t just desserts — they are
//               memories.
//             </p>

//             <div className="grid sm:grid-cols-2 gap-4">
//               <div className="glass-card p-4">
//                 <p className="font-semibold">Handcrafted Designs</p>
//                 <p className="text-sm text-muted-foreground">
//                   Made uniquely for every customer.
//                 </p>
//               </div>
//               <div className="glass-card p-4">
//                 <p className="font-semibold">Premium Ingredients</p>
//                 <p className="text-sm text-muted-foreground">
//                   Quality you can taste.
//                 </p>
//               </div>
//             </div>
//           </motion.div>

//         </div>
//       </section>

//       {/* ================= ABOUT ================= */}
//       <section className="py-24 bg-secondary/30">
//         <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">

//           <div className="grid grid-cols-2 gap-4">
//             {[about1, about2, about3, about4].map((img, i) => (
//               <div key={i} className="rounded-2xl overflow-hidden h-56">
//                 <img
//                   src={img}
//                   className="w-full h-full object-cover hover:scale-105 transition duration-700"
//                 />
//               </div>
//             ))}
//           </div>

//           <div>
//             <p className="section-title">Why Choose Us</p>
//             <h2 className="section-heading mb-6">
//               What Makes{" "}
//               <span className="text-gradient-cake">
//                 Cake Junction Special
//               </span>
//             </h2>

//             <p className="text-muted-foreground mb-10">
//               From simple treats to grand celebration cakes, we focus on taste,
//               design, and customer satisfaction.
//             </p>

//             <div className="grid sm:grid-cols-2 gap-4">
//               {features.map((item) => (
//                 <div key={item} className="flex items-center gap-3">
//                   <CheckCircle className="text-primary" />
//                   <span>{item}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ================= VALUES ================= */}
//       <section className="py-28 bg-background">
//         <div className="container mx-auto px-4">
//           <div className="text-center max-w-2xl mx-auto mb-20">
//             <p className="section-title">Our Values</p>
//             <h2 className="section-heading">
//               What We{" "}
//               <span className="text-gradient-cake">
//                 Stand For
//               </span>
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-3 gap-10">
//             {values.map((v, i) => (
//               <motion.div
//                 key={v.title}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.1 }}
//                 className="glass-card p-10 text-center"
//               >
//                 <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
//                   <v.icon className="text-primary w-7 h-7" />
//                 </div>
//                 <h3 className="font-semibold text-xl mb-3">{v.title}</h3>
//                 <p className="text-muted-foreground">{v.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ================= CTA ================= */}
//       <section className="py-28 bg-secondary/30 text-center">
//         <div className="container mx-auto px-4 max-w-3xl">
//           <motion.h2
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="section-heading mb-6"
//           >
//             Ready to Order{" "}
//             <span className="text-gradient-cake">
//               Your Perfect Cake?
//             </span>
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-muted-foreground mb-10"
//           >
//             Let us make your celebration sweeter with a cake crafted just for you.
//           </motion.p>

//           <div className="flex justify-center gap-4">
//             <a href="#contact" className="btn-gold">
//               Contact Us
//             </a>
//             <a
//               href="https://wa.me/919999999999"
//               className="btn-outline-gold"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               WhatsApp Order
//             </a>
//           </div>
//         </div>
//       </section>

//     </main>
//   );
// };

// export default About;
