import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, ShoppingCart, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Shop Cakes", href: "/shop" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300
        ${isScrolled ? "bg-background shadow-md" : "bg-background"}
      `}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">

          {/* LOGO */}
          <a href="/" className="text-2xl font-serif font-bold">
            Cake <span className="text-primary">Junction</span>
          </a>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* DESKTOP CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="/cart"
              aria-label="Cart"
              className="p-2 rounded-full hover:bg-secondary transition"
            >
              <ShoppingCart className="w-5 h-5" />
            </a>

            <a
              href="/contact"
              className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/90 transition"
            >
              Order Now
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-background border-t"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-medium hover:text-primary transition"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-gold text-center mt-4"
              >
                Order Your Cake
              </a>

              <a
                href="tel:+919999999999"
                className="flex items-center justify-center gap-2 text-sm text-muted-foreground"
              >
                <Phone className="w-4 h-4" />
                Call to Order
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
