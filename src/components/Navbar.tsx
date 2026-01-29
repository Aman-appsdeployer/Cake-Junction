import { AnimatePresence, motion } from "framer-motion";
import { Menu, Search, ShoppingCart, User, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import logo from "@/assets/LLL.jpg";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Shop", path: "/shop" },
  { label: "Categories", path: "/categories" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    `relative text-sm font-medium transition
     ${isActive ? "text-primary" : "text-foreground/80 hover:text-primary"}
    `;

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all
        ${scrolled ? "bg-background shadow-md" : "bg-white/80 backdrop-blur"}
      `}
    >
      <div className="container mx-auto px-4">
        <div className="h-20 flex items-center justify-between">

          {/* LOGO */}
          <NavLink to="/" className="flex items-center">
            <img
              src={logo}
              alt="Cake Junction Logo"
              className="h-14 object-contain"
            />
          </NavLink>

          {/* SEARCH BAR (DESKTOP) */}
          <div className="hidden lg:flex items-center bg-secondary rounded-full px-3 py-1">
            <Search className="w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search cakes..."
              className="bg-transparent outline-none px-2 text-sm"
            />
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink key={link.label} to={link.path} className={linkClass}>
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* RIGHT ICONS */}
          <div className="hidden md:flex items-center gap-4">

            {/* USER */}
            <NavLink to="/login" className="p-2 rounded-full hover:bg-secondary">
              <User className="w-5 h-5" />
            </NavLink>

            {/* CART WITH BADGE */}
            <NavLink to="/cart" className="relative p-2 rounded-full hover:bg-secondary">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs px-1.5 rounded-full">
                2
              </span>
            </NavLink>

            {/* CTA BUTTON */}
            <NavLink to="/shop" className="btn-gold">
              Order Now
            </NavLink>
          </div>

          {/* MOBILE TOGGLE */}
          <button onClick={() => setOpen(!open)} className="lg:hidden">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-background border-t"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `font-medium transition
                     ${isActive ? "text-primary" : "hover:text-primary"}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}

              <NavLink
                to="/shop"
                onClick={() => setOpen(false)}
                className="btn-gold text-center mt-4"
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
// import { Menu, ShoppingCart, X } from "lucide-react";
// import { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";

// import logo from "@/assets/LLL.jpg";

// const navLinks = [
//   { label: "Home", path: "/" },
//   { label: "About", path: "/about" },
//   { label: "Shop", path: "/shop" },
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

//   const linkClass = ({ isActive }) =>
//     `relative text-sm font-medium transition
//      ${isActive ? "text-primary" : "text-foreground/80 hover:text-primary"}
//     `;

//   return (
//     <motion.nav
//       initial={{ y: -80 }}
//       animate={{ y: 0 }}
//       className={`fixed top-0 inset-x-0 z-50
//         ${scrolled ? "bg-background shadow-md" : "bg-white"}
//       `}
//     >
//       <div className="container mx-auto px-4">
//         <div className="h-20 flex items-center justify-between">

//           {/* LOGO IMAGE */}
//           <NavLink to="/" className="flex items-center">
//             <img
//               src={logo}
//               alt="Cake Junction Logo"
//               className="h-14 sm:h-16 md:h-20 lg:h-22 object-contain bg-transparent mix-blend-multiply"
//             />
//           </NavLink>

//           {/* DESKTOP NAV */}
//           <div className="hidden lg:flex items-center gap-8">
//             {navLinks.map((link) => (
//               <NavLink key={link.label} to={link.path} className={linkClass}>
//                 {({ isActive }) => (
//                   <>
//                     {link.label}
//                     {isActive && (
//                       <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full" />
//                     )}
//                   </>
//                 )}
//               </NavLink>
//             ))}
//           </div>

//           {/* DESKTOP CTA */}
//           <div className="hidden md:flex items-center gap-4">
//             <NavLink to="/shop" className="p-2 rounded-full hover:bg-secondary">
//               <ShoppingCart className="w-5 h-5" />
//             </NavLink>

//             <NavLink to="/contact" className="btn-gold">
//               Order Now
//             </NavLink>
//           </div>

//           {/* MOBILE TOGGLE */}
//           <button onClick={() => setOpen(!open)} className="lg:hidden">
//             {open ? <X /> : <Menu />}
//           </button>
//         </div>
//       </div>

//       {/* MOBILE MENU */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             className="lg:hidden bg-background border-t"
//           >
//             <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
//               {navLinks.map((link) => (
//                 <NavLink
//                   key={link.label}
//                   to={link.path}
//                   onClick={() => setOpen(false)}
//                   className={({ isActive }) =>
//                     `font-medium transition
//                      ${isActive ? "text-primary" : "hover:text-primary"}`
//                   }
//                 >
//                   {link.label}
//                 </NavLink>
//               ))}

//               <NavLink
//                 to="/contact"
//                 onClick={() => setOpen(false)}
//                 className="btn-gold text-center mt-4"
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
