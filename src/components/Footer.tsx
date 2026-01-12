import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Shop Cakes", href: "/shop" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const services = [
  "Birthday Cakes",
  "Wedding Cakes",
  "Custom Cakes",
  "Corporate Orders",
  "Dessert Tables",
];

const Footer = () => {
  return (
    <footer className="bg-background border-t py-16">
      <div className="container mx-auto px-4">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* BRAND */}
          <div>
            <a href="/" className="text-2xl font-serif font-bold">
              Cake <span className="text-primary">Junction</span>
            </a>
            <p className="text-sm text-muted-foreground mt-4">
              Freshly baked cakes crafted with premium ingredients.
              Making every celebration sweeter.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-serif font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="font-serif font-bold mb-4">Our Cakes</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {services.map(service => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-serif font-bold mb-4">Contact</h4>
            <p className="text-sm text-muted-foreground">
              📍 Govandi, Mumbai 400043
            </p>
            <p className="text-sm mt-2">
              📞 <a href="tel:+919999999999" className="hover:text-primary">
                +91 99999 99999
              </a>
            </p>
            <p className="text-sm mt-2 break-all">
              ✉ <a href="mailto:hello@cakejunction.com" className="hover:text-primary">
                hello@cakejunction.com
              </a>
            </p>

            <div className="flex gap-3 mt-4">
              <a href="#" aria-label="Instagram"><Instagram /></a>
              <a href="#" aria-label="Facebook"><Facebook /></a>
              <a href="#" aria-label="YouTube"><Youtube /></a>
              <a href="#" aria-label="Twitter"><Twitter /></a>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-10 pt-6 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Cake Junction. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
