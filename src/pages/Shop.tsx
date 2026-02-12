import { useCart } from "@/pages/context/CartContext";
import { motion } from "framer-motion";
import { ArrowRight, CakeSlice } from "lucide-react";

import { useNavigate } from "react-router-dom";

/* ================= IMAGES ================= */
import heroimg from "@/assets/hero1.png";
import blackForest from "@/assets/BlackForest.jpg";
import gulabJamun from "@/assets/Gulab-Jamun-Cake.jpg";
import pineapple from "@/assets/PineappleCake.jpg";
import butterscotch from "@/assets/butterscotch.jpg";
import chocolateTruffle from "@/assets/chocolate-truffle-birthday-cake.jpg";
import freshCream from "@/assets/freshcream.jpg";
import mango from "@/assets/mango.jfif";
import rasmalai from "@/assets/rasmalai.jfif";
import redVelvet from "@/assets/red-velvet-cake.jpg";
import strawberry from "@/assets/strawberry.jfif";
import vanilla from "@/assets/vanilla-cake.jpg";

import almondChocolate from "@/assets/almondChocolate.jfif";
import blueberry from "@/assets/blueberry.jpg";
import chocolateHazelnut from "@/assets/chocolate-truffle-birthday-cake.jpg";
import coffeeMocha from "@/assets/coffeeMocha.jpeg";
import ferrero from "@/assets/ferrero.jfif";
import fruitOverload from "@/assets/freshcream.jpg";
import kitkat from "@/assets/kitkat.jfif";
import oreo from "@/assets/oreo.jpeg";
import whiteForest from "@/assets/whiteForest.jfif";
/* ================= DATA ================= */
export const shopItems = [
  {
    id: 1,
    title: "Black Forest Cake",
    desc: "Chocolate sponge layered with whipped cream, cherries, and chocolate shavings.",
    image: blackForest,
    icon: CakeSlice,
    price: 399,
  },

  {
    id: 2,
    title: "Pineapple Cake",
    desc: "Soft vanilla sponge with pineapple chunks and fresh cream frosting.",
    image: pineapple,
    icon: CakeSlice,
    price: 399,
  },

  {
    id: 3,
    title: "Butterscotch Cake",
    desc: "Crunchy butterscotch chips with caramel-flavored cream.",
    image: butterscotch,
    icon: CakeSlice,
    price: 449,
  },

  {
    id: 4,
    title: "Fresh Cream Cake",
    desc: "Light sponge layered with mildly sweetened fresh cream.",
    image: freshCream,
    icon: CakeSlice,
    price: 349,
  },

  {
    id: 5,
    title: "Rasmalai Cake",
    desc: "Fusion cake infused with rasmalai flavor and cardamom milk.",
    image: rasmalai,
    icon: CakeSlice,
    price: 549,
  },

  {
    id: 6,
    title: "Gulab Jamun Cake",
    desc: "Indian fusion cake topped with soft gulab jamuns and cream.",
    image: gulabJamun,
    icon: CakeSlice,
    price: 549,
  },

  {
    id: 7,
    title: "Chocolate Truffle Cake",
    desc: "Rich chocolate sponge with smooth chocolate ganache.",
    image: chocolateTruffle,
    icon: CakeSlice,
    price: 499,
  },

  {
    id: 8,
    title: "Red Velvet Cake",
    desc: "Soft red cocoa sponge with cream cheese frosting.",
    image: redVelvet,
    icon: CakeSlice,
    price: 599,
  },

  {
    id: 9,
    title: "Mango Cake",
    desc: "Seasonal mango-flavored sponge with fresh mango cream.",
    image: mango,
    icon: CakeSlice,
    price: 499,
  },

  {
    id: 10,
    title: "Vanilla Cake",
    desc: "Classic vanilla sponge with smooth whipped cream frosting.",
    image: vanilla,
    icon: CakeSlice,
    price: 349,
  },

  {
    id: 11,
    title: "Strawberry Cake",
    desc: "Strawberry-flavored sponge layered with strawberry cream.",
    image: strawberry,
    icon: CakeSlice,
    price: 449,
  },

  {
    id: 12,
    title: "KitKat Cake",
    desc: "Chocolate cake decorated with crunchy KitKat bars.",
    image: kitkat,
    icon: CakeSlice,
    price: 699,
  },

  {
    id: 13,
    title: "Ferrero Rocher Cake",
    desc: "Chocolate hazelnut cake topped with Ferrero Rocher chocolates.",
    image: ferrero,
    icon: CakeSlice,
    price: 799,
  },

  {
    id: 14,
    title: "Coffee Mocha Cake",
    desc: "Coffee-infused chocolate cake with mocha cream.",
    image: coffeeMocha,
    icon: CakeSlice,
    price: 549,
  },

  {
    id: 15,
    title: "Blueberry Cake",
    desc: "Vanilla sponge layered with blueberry compote and cream.",
    image: blueberry,
    icon: CakeSlice,
    price: 499,
  },

  {
    id: 16,
    title: "Fruit Overload Cake",
    desc: "Loaded with fresh seasonal fruits and whipped cream.",
    image: fruitOverload,
    icon: CakeSlice,
    price: 599,
  },

  {
    id: 17,
    title: "Oreo Chocolate Cake",
    desc: "Chocolate cake layered with Oreo cream and cookie crumbs.",
    image: oreo,
    icon: CakeSlice,
    price: 549,
  },

  {
    id: 18,
    title: "White Forest Cake",
    desc: "Vanilla sponge with cherries and white chocolate shavings.",
    image: whiteForest,
    icon: CakeSlice,
    price: 449,
  },

  {
    id: 19,
    title: "Chocolate Hazelnut Cake",
    desc: "Chocolate sponge with creamy hazelnut filling.",
    image: chocolateHazelnut,
    icon: CakeSlice,
    price: 599,
  },

  {
    id: 20,
    title: "Almond Chocolate Cake",
    desc: "Chocolate cake topped with roasted almond flakes.",
    image: almondChocolate,
    icon: CakeSlice,
    price: 549,
  },
];

const Shop: React.FC = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleOrderNow = (item: (typeof shopItems)[number]) => {
    addToCart(item); //  Add to cart
    navigate("/cart"); //  Redirect to cart page
  };

  return (
    <main className="overflow-x-hidden bg-white">
      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroimg}
            alt="Shop Cakes"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 container mx-auto px-4 pt-28 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            {/* <span className="inline-flex items-center gap-2 bg-primary/20 px-4 py-1 rounded-full text-sm font-medium mb-5">
              <ShoppingBag className="w-4 h-4" />
              Shop Cakes
            </span> */}

            {/* <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6">
              Delicious Cakes for <br />
              <span className="text-primary">Every Occasion</span>
            </h1> */}

            {/* <p className="text-white/80 text-lg mb-10 max-w-xl">
              Explore our wide range of freshly baked cakes made with
              premium ingredients and crafted to perfection.
            </p> */}

            <div className="flex flex-wrap gap-4 mt-96">
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

      {/* ================= SHOP GRID ================= */}
      <section
        id="cakes"
        className="bg-gradient-to-b from-rose-50 to-white py-20"
      >
        <div className="container mx-auto px-4">
          {/* HEADER */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="section-title">Our Collection</p>
            <h2 className="section-heading">
              Shop Our <span className="text-primary">Signature Cakes</span>
            </h2>
            <p className="text-muted-foreground mt-4">
              Freshly baked • Premium ingredients • Made with love
            </p>
          </div>

          {/* GRID */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {shopItems.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-rose-100"
              >
                {/* IMAGE AREA */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* dark gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-70" />

                  {/* icon badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur p-2 rounded-full shadow">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>

                  {/* price badge */}
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    ₹{item.price}
                  </div>

                  {/* hover overlay button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-400">
                    <button
                      onClick={() => handleOrderNow(item)}
                      className="bg-white text-primary font-semibold px-6 py-3 rounded-full shadow-xl hover:scale-105 transition"
                    >
                      Quick Order
                    </button>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-7">
                  {/* title */}
                  <h3 className="font-serif font-bold text-xl mb-2 group-hover:text-primary transition">
                    {item.title}
                  </h3>

                  {/* desc */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                    {item.desc}
                  </p>

                  {/* rating + tag row */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex text-yellow-400 text-sm">★★★★★</div>

                    <span className="text-xs bg-rose-100 text-rose-600 px-3 py-1 rounded-full">
                      Bestseller
                    </span>
                  </div>

                  {/* button */}
                  <button
                    onClick={() => handleOrderNow(item)}
                    className="w-full bg-primary text-white font-semibold py-3 rounded-xl hover:brightness-110 active:scale-95 transition flex items-center justify-center gap-2"
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

export default Shop;



















// import { motion } from "framer-motion";
// import {
//   ArrowRight,
//   CakeSlice,
//   Heart,
//   ShieldCheck,
//   ShoppingBag,
//   Sparkles,
//   Users,
// } from "lucide-react";

// /* ================= IMAGES ================= */
// import { default as birthdayCake, default as corporateCake } from "@/assets/img3.jpg";
// import dessertTable from "@/assets/img6.jpg";
// import { default as cupcakes, default as customCake, default as weddingCake } from "@/assets/venue-4.jpg";

// /* ================= DATA ================= */
// const shopItems = [
//   {
//     title: "Birthday Cakes",
//     desc: "Fun, colorful cakes customized for all age groups.",
//     image: birthdayCake,
//     icon: CakeSlice,
//   },
//   {
//     title: "Wedding Cakes",
//     desc: "Elegant multi-tier cakes crafted for your big day.",
//     image: weddingCake,
//     icon: Heart,
//   },
//   {
//     title: "Corporate Cakes",
//     desc: "Professional cakes for office events & celebrations.",
//     image: corporateCake,
//     icon: Users,
//   },
//   {
//     title: "Custom Cakes",
//     desc: "Designed exactly the way you imagine it.",
//     image: customCake,
//     icon: Sparkles,
//   },
//   {
//     title: "Dessert Tables",
//     desc: "Complete dessert setups for events & parties.",
//     image: dessertTable,
//     icon: ShieldCheck,
//   },
//   {
//     title: "Cupcakes & Pastries",
//     desc: "Perfect for gifting and small celebrations.",
//     image: cupcakes,
//     icon: CakeSlice,
//   },
// ];

// const Shop = () => {
//   return (
//     <main className="overflow-x-hidden">

//       {/* ================= HERO ================= */}
//       <section className="relative min-h-screen flex items-center">
//         <div className="absolute inset-0">
//           <img
//             src={birthdayCake}
//             alt="Shop Cakes"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 " />
//         </div>

//         <div className="relative z-10 container mx-auto px-4 pt-28 text-white">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="max-w-3xl"
//           >
//             <span className="inline-flex items-center gap-2 bg-primary/20 px-4 py-1 rounded-full text-sm font-medium mb-5">
//               <ShoppingBag className="w-4 h-4" />
//               Shop Cakes
//             </span>

//             <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6">
//               Delicious Cakes for <br />
//               <span className="text-primary">Every Occasion</span>
//             </h1>

//             <p className="text-white/80 text-lg mb-10 max-w-xl">
//               Explore our wide range of freshly baked cakes made with
//               premium ingredients and crafted to perfection.
//             </p>

//             <div className="flex flex-wrap gap-4">
//               <a href="#cakes" className="btn-gold">
//                 Browse Cakes
//               </a>
//               <a href="/contact" className="btn-outline-gold">
//                 Custom Order
//               </a>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ================= GRID ================= */}
//       <section id="cakes" className="py-28 bg-background">
//         <div className="container mx-auto px-4">

//           <div className="text-center max-w-2xl mx-auto mb-16">
//             <p className="section-title">Our Collection</p>
//             <h2 className="section-heading">
//               Shop Our <span className="text-primary">Cakes</span>
//             </h2>
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
//             {shopItems.map((item, i) => (
//               <motion.div
//                 key={item.title}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.08 }}
//                 className="group bg-card rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
//               >
//                 <div className="relative overflow-hidden">
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="h-60 w-full object-cover transition-transform duration-700 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

//                   <div className="absolute top-4 left-4 bg-background p-2 rounded-full shadow">
//                     <item.icon className="w-5 h-5 text-primary" />
//                   </div>
//                 </div>

//                 <div className="p-7">
//                   <h3 className="font-serif font-bold text-xl mb-2 group-hover:text-primary transition">
//                     {item.title}
//                   </h3>

//                   <p className="text-sm text-muted-foreground mb-5">
//                     {item.desc}
//                   </p>

//                   <a
//                     href="/contact"
//                     className="inline-flex items-center gap-2 font-medium text-primary"
//                   >
//                     Order Now
//                     <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                   </a>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//         </div>
//       </section>
//     </main>
//   );
// };

// export default Shop;
