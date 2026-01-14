import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `transition text-sm
     ${isActive ? "text-primary font-medium" : "text-muted-foreground hover:text-primary"}
    `;

  return (
    <footer className="bg-background border-t py-16">
      <div className="container mx-auto px-4">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* BRAND */}
          <div>
            <NavLink to="/" className="text-2xl font-serif font-bold">
              Cake <span className="text-primary">Junction</span>
            </NavLink>
            <p className="text-sm text-muted-foreground mt-4">
              Freshly baked cakes made with premium ingredients for every celebration.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-serif font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><NavLink to="/" className={linkClass}>Home</NavLink></li>
              <li><NavLink to="/about" className={linkClass}>About</NavLink></li>
              <li><NavLink to="/shop" className={linkClass}>Shop</NavLink></li>
              <li><NavLink to="/gallery" className={linkClass}>Gallery</NavLink></li>
              <li><NavLink to="/contact" className={linkClass}>Contact</NavLink></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="font-serif font-bold mb-4">Our Cakes</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Birthday Cakes</li>
              <li>Wedding Cakes</li>
              <li>Custom Cakes</li>
              <li>Corporate Orders</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-serif font-bold mb-4">Contact</h4>
            <p className="text-sm">📍 Mumbai, India</p>
            <p className="text-sm mt-2">📞 +91 7347713573</p>
            <p className="text-sm mt-2">✉ hello@cakejunction.com</p>

            {/* SOCIAL LINKS */}
            <div className="flex gap-4 mt-4 text-muted-foreground">
              <a
                href="https://www.instagram.com/cakejunction7/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition"
              >
                <Instagram />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition"
              >
                <Facebook />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition"
              >
                <Youtube />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition"
              >
                <Twitter />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Cake Junction. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
