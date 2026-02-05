import { Facebook, Instagram, Mail, Youtube } from "lucide-react";
import { NavLink } from "react-router-dom";

import logo from "@/assets/Logo.jpg";

const Footer = () => {
  const linkClass = ({ isActive }) =>
    `transition text-sm
     ${isActive ? "text-primary font-medium" : "text-muted-foreground hover:text-primary"}
    `;

  return (
    <footer className="bg-background border-t pt-16 pb-8">
      <div className="container mx-auto px-4">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* BRAND */}
          <div className="lg:col-span-2">
            <NavLink to="/" className="flex items-center gap-3">
              <img
                src={logo}
                alt="Cake Junction Logo"
                className=" h-28 object-contain bg-transparent mix-blend-multiply"
              />
            </NavLink>

            <p className="text-sm text-muted-foreground mt-4 max-w-sm">
              Premium handcrafted cakes made with love for every special occasion.
              Order delicious cakes online with fast delivery.
            </p>

            {/* SOCIAL */}
            <div className="flex gap-4 mt-5 text-muted-foreground">
              <a href="https://www.instagram.com/cakejunction7/" target="_blank" rel="noopener noreferrer"
                className="hover:text-primary transition hover:scale-110">
                <Instagram />
              </a>
              <a href="https://www.facebook.com/share/1BwThQmjmD/" target="_blank" rel="noopener noreferrer"
                className="hover:text-primary transition hover:scale-110">
                <Facebook />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                className="hover:text-primary transition hover:scale-110">
                <Youtube />
              </a>
              
            </div>
          </div>

          {/* SHOP */}
          <div>
            <h4 className="font-serif font-bold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><NavLink to="/shop" className={linkClass}>All Cakes</NavLink></li>
              <li><NavLink to="/shop/birthday" className={linkClass}>Birthday Cakes</NavLink></li>
              <li><NavLink to="/shop/wedding" className={linkClass}>Wedding Cakes</NavLink></li>
              <li><NavLink to="/shop/custom" className={linkClass}>Custom Cakes</NavLink></li>
            </ul>
          </div>

          {/* CUSTOMER SERVICE */}
          <div>
            <h4 className="font-serif font-bold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><NavLink to="/contact" className={linkClass}>Contact Us</NavLink></li>
              <li><NavLink to="/faq" className={linkClass}>FAQ</NavLink></li>
              <li><NavLink to="/track-order" className={linkClass}>Track Order</NavLink></li>
              <li><NavLink to="/support" className={linkClass}>Support</NavLink></li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h4 className="font-serif font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><NavLink to="/privacy-policy" className={linkClass}>Privacy Policy</NavLink></li>
              <li><NavLink to="/terms" className={linkClass}>Terms & Conditions</NavLink></li>
              <li><NavLink to="/refund-policy" className={linkClass}>Refund Policy</NavLink></li>
              <li><NavLink to="/shipping-policy" className={linkClass}>Shipping Policy</NavLink></li>
            </ul>
          </div>
        </div>

        {/* NEWSLETTER */}
        <div className="mt-12 bg-secondary rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-medium"> Subscribe for special offers & updates</p>
          <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm">
            <Mail className="w-4 h-4 text-muted-foreground" />
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent outline-none px-2 text-sm"
            />
            <button className="btn-gold ml-2">Subscribe</button>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-10 pt-6 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Cake Junction. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;













// import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
// import { NavLink } from "react-router-dom";

// import logo from "@/assets/LLL.jpg"; // ✅ logo import

// const Footer = () => {
//   const linkClass = ({ isActive }) =>
//     `transition text-sm
//      ${isActive ? "text-primary font-medium" : "text-muted-foreground hover:text-primary"}
//     `;

//   return (
//     <footer className="bg-white border-t py-16">
//       <div className="container mx-auto px-4">

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

//           {/* BRAND */}
//           <div>
//             <NavLink to="/" className="flex items-center gap-3">
//               <img
//                 src={logo}
//                 alt="Cake Junction Logo"
//                 className="h-14 sm:h-16 md:h-20 lg:h-24 object-contain bg-transparent mix-blend-multiply"
//               />
//             </NavLink>

//             <p className="text-sm text-muted-foreground mt-4 max-w-xs">
//               Freshly baked cakes made with premium ingredients for every celebration.
//             </p>
//           </div>

//           {/* QUICK LINKS */}
//           <div>
//             <h4 className="font-serif font-bold mb-4">Quick Links</h4>
//             <ul className="space-y-2">
//               <li><NavLink to="/" className={linkClass}>Home</NavLink></li>
//               <li><NavLink to="/about" className={linkClass}>About</NavLink></li>
//               <li><NavLink to="/shop" className={linkClass}>Shop</NavLink></li>
//               <li><NavLink to="/gallery" className={linkClass}>Gallery</NavLink></li>
//               <li><NavLink to="/contact" className={linkClass}>Contact</NavLink></li>
//             </ul>
//           </div>

//           {/* SERVICES */}
//           <div>
//             <h4 className="font-serif font-bold mb-4">Our Cakes</h4>
//             <ul className="space-y-2 text-sm text-muted-foreground">
//               <li>Birthday Cakes</li>
//               <li>Wedding Cakes</li>
//               <li>Custom Cakes</li>
//               <li>Corporate Orders</li>
//             </ul>
//           </div>

//           {/* CONTACT */}
//           <div>
//             <h4 className="font-serif font-bold mb-4">Contact</h4>
//             <p className="text-sm">📍 Mumbai, India</p>
//             <p className="text-sm mt-2">📞 +91 7347713573</p>
//             <p className="text-sm mt-2">✉ hello@cakejunction.com</p>

//             {/* SOCIAL LINKS */}
//             <div className="flex gap-4 mt-5 text-muted-foreground">
//               <a
//                 href="https://www.instagram.com/cakejunction7/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-primary transition hover:scale-110"
//               >
//                 <Instagram />
//               </a>

//               <a
//                 href="https://facebook.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-primary transition hover:scale-110"
//               >
//                 <Facebook />
//               </a>

//               <a
//                 href="https://youtube.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-primary transition hover:scale-110"
//               >
//                 <Youtube />
//               </a>

//               <a
//                 href="https://twitter.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-primary transition hover:scale-110"
//               >
//                 <Twitter />
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* COPYRIGHT */}
//         <div className="mt-10 pt-6 border-t text-center text-sm text-muted-foreground">
//           © {new Date().getFullYear()} Cake Junction. All rights reserved.
//         </div>

//       </div>
//     </footer>
//   );
// };

// export default Footer;
