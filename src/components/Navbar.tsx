import { AnimatePresence, motion } from "framer-motion";
import { Menu, Search, ShoppingCart, User, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import logo from "@/assets/Logo-1.png";
import { useCart } from "@/pages/context/CartContext";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Shop", path: "/shop" },
  { label: "Categories", path: "/categories" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 inset-x-0 z-50
                 bg-white border-b border-rose-100
                 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-[72px] flex items-center justify-between">

          {/* ================= LOGO ================= */}
          <NavLink to="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="Cake Junction Logo"
              className="h-14 sm:h-16 object-contain"
            />
          </NavLink>

          {/* ================= SEARCH (DESKTOP) ================= */}
          <div className="hidden lg:flex items-center w-[260px]
                          rounded-full px-4 py-2 border
                          bg-rose-50 border-rose-200">
            <Search className="w-4 h-4 opacity-70 text-gray-600" />
            <input
              type="text"
              placeholder="Search cakes..."
              className="bg-transparent outline-none px-3 text-sm w-full
                         text-gray-700 placeholder:text-gray-400"
            />
          </div>

          {/* ================= DESKTOP NAV ================= */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.path}
                className="group relative text-sm font-medium"
              >
                {({ isActive }) => (
                  <>
                    <span
                      className={`transition
                        ${
                          isActive
                            ? "text-rose-600"
                            : "text-gray-700 group-hover:text-rose-600"
                        }`}
                    >
                      {link.label}
                    </span>

                    <span
                      className={`absolute -bottom-1 left-0 h-[2px]
                      bg-rose-500 rounded-full
                      transition-all duration-300
                      ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* ================= RIGHT ICONS ================= */}
          <div className="hidden md:flex items-center gap-2">

            <NavLink
              to="/login"
              className="p-2 rounded-full hover:bg-rose-100
                         text-gray-700 transition"
            >
              <User className="w-5 h-5" />
            </NavLink>

            {/* CART */}
            <NavLink
              to="/cart"
              className="relative p-2 rounded-full
                         hover:bg-rose-100
                         text-gray-700 transition"
            >
              <ShoppingCart className="w-5 h-5" />

              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1
                             bg-rose-500 text-white
                             text-xs px-1.5 py-0.5
                             rounded-full"
                >
                  {cartCount}
                </motion.span>
              )}
            </NavLink>

            {/* CTA */}
            <NavLink
              to="/shop"
              className="ml-2 px-5 py-2 rounded-full
                         bg-rose-500 text-white text-sm font-medium
                         shadow hover:bg-rose-600
                         hover:shadow-lg transition"
            >
              Order Now
            </NavLink>
          </div>

          {/* ================= MOBILE TOGGLE ================= */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-md
                       hover:bg-rose-100
                       text-gray-700 transition"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-t border-rose-100 shadow-xl"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-5">

              {/* mobile search */}
              <div className="flex items-center bg-rose-50 rounded-full px-4 py-2">
                <Search className="w-4 h-4 opacity-70 text-gray-600" />
                <input
                  placeholder="Search cakes..."
                  className="bg-transparent outline-none px-3 text-sm w-full"
                />
              </div>

              {navLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `text-base font-medium transition
                     ${
                       isActive
                         ? "text-rose-600"
                         : "text-gray-700 hover:text-rose-600"
                     }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}

              <NavLink
                to="/shop"
                onClick={() => setOpen(false)}
                className="mt-4 px-5 py-3 rounded-full
                           bg-rose-500 text-white text-center
                           font-medium shadow
                           hover:bg-rose-600 transition"
              >
                Order Your Cake
              </NavLink>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;






// import { AnimatePresence, motion } from "framer-motion";
// import { Menu, Search, ShoppingCart, User, X } from "lucide-react";
// import { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";

// import logo from "@/assets/Logo-1.png";

// const navLinks = [
//   { label: "Home", path: "/" },
//   { label: "About", path: "/about" },
//   { label: "Shop", path: "/shop" },
//   { label: "Categories", path: "/categories" },
//   { label: "Gallery", path: "/gallery" },
//   { label: "Contact", path: "/contact" },
// ];

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 60);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <motion.nav
//       initial={{ y: -80 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5 }}
//       className={`fixed top-0 inset-x-0 z-50 transition-all duration-300
//         ${
//           scrolled
//             ? "bg-white/95 backdrop-blur-md shadow-lg border-b"
//             : "bg-transparent shadow-none"
//         }`}
//     >
//       <div className="container mx-auto px-4">
//         <div className="h-[78px] flex items-center justify-between">
//           {/* ================= LOGO ================= */}
//           <NavLink to="/" className="flex items-center gap-3">
//             <img
//               src={logo}
//               alt="Cake Junction Logo"
//               className=" h-20 object-contain bg-transparent mix-blend-multiply"
//             />
//           </NavLink>

//           {/* ================= SEARCH ================= */}
//           <div
//             className={`hidden lg:flex items-center w-[280px] rounded-full px-4 py-2 transition
//             ${
//               scrolled
//                 ? "bg-secondary/70"
//                 : "bg-white/15 backdrop-blur text-white placeholder-white/70"
//             }`}
//           >
//             <Search className="w-4 h-4 opacity-80" />
//             <input
//               type="text"
//               placeholder="Search cakes..."
//               className="bg-transparent outline-none px-3 text-sm w-full placeholder:opacity-70"
//             />
//           </div>

//           {/* ================= DESKTOP NAV ================= */}
//           <div className="hidden lg:flex items-center gap-8">
//             {navLinks.map((link) => (
//               <NavLink
//                 key={link.label}
//                 to={link.path}
//                 className="relative group text-sm font-medium"
//               >
//                 {({ isActive }) => (
//                   <>
//                     <span
//                       className={`transition
//                         ${
//                           isActive
//                             ? "text-primary"
//                             : scrolled
//                               ? "text-foreground/80 group-hover:text-primary"
//                               : "text-white group-hover:text-primary"
//                         }`}
//                     >
//                       {link.label}
//                     </span>

//                     <span
//                       className={`absolute -bottom-1 left-0 h-[2px] bg-primary rounded-full transition-all duration-300
//                       ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
//                     />
//                   </>
//                 )}
//               </NavLink>
//             ))}
//           </div>

//           {/* ================= RIGHT ICONS ================= */}
//           <div className="hidden md:flex items-center gap-3">
//             {/* USER */}
//             <NavLink
//               to="/login"
//               className={`p-2 rounded-full transition
//               ${scrolled ? "hover:bg-secondary" : "hover:bg-white/15 text-white"}`}
//             >
//               <User className="w-5 h-5" />
//             </NavLink>

//             {/* CART */}
//             <NavLink
//               to="/cart"
//               className={`relative p-2 rounded-full transition
//               ${scrolled ? "hover:bg-secondary" : "hover:bg-white/15 text-white"}`}
//             >
//               <ShoppingCart className="w-5 h-5" />
//               <motion.span
//                 initial={{ scale: 0 }}
//                 animate={{ scale: 1 }}
//                 className="absolute -top-1 -right-1 bg-primary text-white text-xs px-1.5 rounded-full"
//               >
//                 2
//               </motion.span>
//             </NavLink>

//             {/* CTA */}
//             <NavLink
//               to="/shop"
//               className="ml-2 px-5 py-2 rounded-full bg-primary text-white text-sm font-medium shadow hover:shadow-lg hover:scale-105 transition"
//             >
//               Order Now
//             </NavLink>
//           </div>

//           {/* ================= MOBILE TOGGLE ================= */}
//           <button
//             onClick={() => setOpen(!open)}
//             className={`lg:hidden p-2 rounded-md transition
//             ${scrolled ? "hover:bg-secondary" : "hover:bg-white/15 text-white"}`}
//           >
//             {open ? <X /> : <Menu />}
//           </button>
//         </div>
//       </div>

//       {/* ================= MOBILE MENU ================= */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.25 }}
//             className="lg:hidden bg-white border-t shadow-xl"
//           >
//             <div className="container mx-auto px-4 py-6 flex flex-col gap-5">
//               <div className="flex items-center bg-secondary rounded-full px-4 py-2">
//                 <Search className="w-4 h-4 opacity-70" />
//                 <input
//                   placeholder="Search cakes..."
//                   className="bg-transparent outline-none px-3 text-sm w-full"
//                 />
//               </div>

//               {navLinks.map((link) => (
//                 <NavLink
//                   key={link.label}
//                   to={link.path}
//                   onClick={() => setOpen(false)}
//                   className={({ isActive }) =>
//                     `text-base font-medium transition
//                     ${isActive ? "text-primary" : "hover:text-primary"}`
//                   }
//                 >
//                   {link.label}
//                 </NavLink>
//               ))}

//               <NavLink
//                 to="/shop"
//                 onClick={() => setOpen(false)}
//                 className="mt-4 px-5 py-3 rounded-full bg-primary text-white text-center font-medium shadow"
//               >
//                 Order Your Cake
//               </NavLink>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// };

// export default Navbar;
