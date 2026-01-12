import { AnimatePresence, motion } from "framer-motion";
import { Menu, ShoppingCart, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Shop", path: "/shop" },
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

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative text-sm font-medium transition
     ${isActive ? "text-primary" : "text-foreground/80 hover:text-primary"}
    `;

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className={`fixed top-0 inset-x-0 z-50
        ${scrolled ? "bg-background shadow-md" : "bg-background"}
      `}
    >
      <div className="container mx-auto px-4">
        <div className="h-20 flex items-center justify-between">

          {/* LOGO */}
          <NavLink to="/" className="text-2xl font-serif font-bold">
            Cake <span className="text-primary">Junction</span>
          </NavLink>

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

          {/* DESKTOP CTA */}
          <div className="hidden md:flex items-center gap-4">
            <NavLink to="/shop" className="p-2 rounded-full hover:bg-secondary">
              <ShoppingCart className="w-5 h-5" />
            </NavLink>

            <NavLink to="/contact" className="btn-gold">
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
                to="/contact"
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
