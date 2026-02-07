import logo from "@/assets/Logo-1.png";
import { Facebook, Instagram, Mail, Youtube } from "lucide-react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm transition
     ${
       isActive
         ? "text-rose-600 font-semibold"
         : "text-gray-600 hover:text-rose-600"
     }`;

  return (
    <footer className="bg-rose-50 border-t border-rose-100 pt-14 sm:pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ================= TOP GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">

          {/* ================= BRAND ================= */}
          <div className="lg:col-span-2">
            <NavLink to="/" className="flex items-center gap-3">
              <img
                src={logo}
                alt="Cake Junction Logo"
                className="h-20 sm:h-24 object-contain"
              />
            </NavLink>

            <p className="text-sm text-gray-600 mt-4 max-w-sm leading-relaxed">
              Premium handcrafted cakes made with love for every special occasion.
              Order delicious cakes online with fast delivery.
            </p>

            {/* SOCIAL */}
            <div className="flex gap-4 mt-5">
              <a
                href="https://www.instagram.com/cakejunction7/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white shadow-sm
                           hover:shadow-md hover:-translate-y-0.5
                           transition"
              >
                <Instagram className="w-5 h-5 text-rose-600" />
              </a>

              <a
                href="https://www.facebook.com/share/1BwThQmjmD/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white shadow-sm
                           hover:shadow-md hover:-translate-y-0.5
                           transition"
              >
                <Facebook className="w-5 h-5 text-rose-600" />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white shadow-sm
                           hover:shadow-md hover:-translate-y-0.5
                           transition"
              >
                <Youtube className="w-5 h-5 text-rose-600" />
              </a>
            </div>
          </div>

          {/* ================= SHOP ================= */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-sm sm:text-base">
              Shop
            </h4>
            <ul className="space-y-2">
              <li><NavLink to="/shop" className={linkClass}>All Cakes</NavLink></li>
              <li><NavLink to="/shop/birthday" className={linkClass}>Birthday Cakes</NavLink></li>
              <li><NavLink to="/shop/wedding" className={linkClass}>Wedding Cakes</NavLink></li>
              <li><NavLink to="/shop/custom" className={linkClass}>Custom Cakes</NavLink></li>
            </ul>
          </div>

          {/* ================= SUPPORT ================= */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-sm sm:text-base">
              Support
            </h4>
            <ul className="space-y-2">
              <li><NavLink to="/contact" className={linkClass}>Contact Us</NavLink></li>
              <li><NavLink to="/faq" className={linkClass}>FAQ</NavLink></li>
              <li><NavLink to="/track-order" className={linkClass}>Track Order</NavLink></li>
              <li><NavLink to="/support" className={linkClass}>Help Center</NavLink></li>
            </ul>
          </div>

          {/* ================= LEGAL ================= */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-sm sm:text-base">
              Legal
            </h4>
            <ul className="space-y-2">
              <li><NavLink to="/privacy-policy" className={linkClass}>Privacy Policy</NavLink></li>
              <li><NavLink to="/terms" className={linkClass}>Terms & Conditions</NavLink></li>
              <li><NavLink to="/refund-policy" className={linkClass}>Refund Policy</NavLink></li>
              <li><NavLink to="/shipping-policy" className={linkClass}>Shipping Policy</NavLink></li>
            </ul>
          </div>
        </div>

        {/* ================= NEWSLETTER ================= */}
        <div className="mt-12 bg-white border border-rose-100
                        rounded-2xl p-5 sm:p-6
                        flex flex-col md:flex-row
                        items-start md:items-center
                        justify-between gap-4 shadow-sm">

          <p className="font-semibold text-gray-900 text-sm sm:text-base">
            Subscribe for special offers & cake updates 
          </p>

          <div className="w-full md:w-auto
                          flex items-center gap-2
                          bg-rose-50 border border-rose-200
                          rounded-full px-4 py-2">

            <Mail className="w-4 h-4 text-rose-500" />

            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent outline-none text-sm flex-1 min-w-0"
            />

            <button
              className="bg-rose-500 hover:bg-rose-600
                         text-white text-sm font-medium
                         px-4 py-1.5 rounded-full transition"
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* ================= COPYRIGHT ================= */}
        <div className="mt-10 pt-6 border-t border-rose-100
                        text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Cake Junction. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;




// import { Facebook, Instagram, Mail, Youtube } from "lucide-react";
// import { NavLink } from "react-router-dom";

// import logo from "@/assets/Logo-1.png";

// const Footer = () => {
//   const linkClass = ({ isActive }) =>
//     `transition text-sm
//      ${isActive ? "text-primary font-medium" : "text-muted-foreground hover:text-primary"}
//     `;

//   return (
//     <footer className="bg-background border-t pt-16 pb-8">
//       <div className="container mx-auto px-4">

//         {/* TOP GRID */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">

//           {/* BRAND */}
//           <div className="lg:col-span-2">
//             <NavLink to="/" className="flex items-center gap-3">
//               <img
//                 src={logo}
//                 alt="Cake Junction Logo"
//                 className=" h-28 object-contain bg-transparent mix-blend-multiply"
//               />
//             </NavLink>

//             <p className="text-sm text-muted-foreground mt-4 max-w-sm">
//               Premium handcrafted cakes made with love for every special occasion.
//               Order delicious cakes online with fast delivery.
//             </p>

//             {/* SOCIAL */}
//             <div className="flex gap-4 mt-5 text-muted-foreground">
//               <a href="https://www.instagram.com/cakejunction7/" target="_blank" rel="noopener noreferrer"
//                 className="hover:text-primary transition hover:scale-110">
//                 <Instagram />
//               </a>
//               <a href="https://www.facebook.com/share/1BwThQmjmD/" target="_blank" rel="noopener noreferrer"
//                 className="hover:text-primary transition hover:scale-110">
//                 <Facebook />
//               </a>
//               <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
//                 className="hover:text-primary transition hover:scale-110">
//                 <Youtube />
//               </a>
              
//             </div>
//           </div>

//           {/* SHOP */}
//           <div>
//             <h4 className="font-serif font-bold mb-4">Shop</h4>
//             <ul className="space-y-2">
//               <li><NavLink to="/shop" className={linkClass}>All Cakes</NavLink></li>
//               <li><NavLink to="/shop/birthday" className={linkClass}>Birthday Cakes</NavLink></li>
//               <li><NavLink to="/shop/wedding" className={linkClass}>Wedding Cakes</NavLink></li>
//               <li><NavLink to="/shop/custom" className={linkClass}>Custom Cakes</NavLink></li>
//             </ul>
//           </div>

//           {/* CUSTOMER SERVICE */}
//           <div>
//             <h4 className="font-serif font-bold mb-4">Customer Service</h4>
//             <ul className="space-y-2">
//               <li><NavLink to="/contact" className={linkClass}>Contact Us</NavLink></li>
//               <li><NavLink to="/faq" className={linkClass}>FAQ</NavLink></li>
//               <li><NavLink to="/track-order" className={linkClass}>Track Order</NavLink></li>
//               <li><NavLink to="/support" className={linkClass}>Support</NavLink></li>
//             </ul>
//           </div>

//           {/* LEGAL */}
//           <div>
//             <h4 className="font-serif font-bold mb-4">Legal</h4>
//             <ul className="space-y-2">
//               <li><NavLink to="/privacy-policy" className={linkClass}>Privacy Policy</NavLink></li>
//               <li><NavLink to="/terms" className={linkClass}>Terms & Conditions</NavLink></li>
//               <li><NavLink to="/refund-policy" className={linkClass}>Refund Policy</NavLink></li>
//               <li><NavLink to="/shipping-policy" className={linkClass}>Shipping Policy</NavLink></li>
//             </ul>
//           </div>
//         </div>

//         {/* NEWSLETTER */}
//         <div className="mt-12 bg-secondary rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
//           <p className="font-medium"> Subscribe for special offers & updates</p>
//           <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm">
//             <Mail className="w-4 h-4 text-muted-foreground" />
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="bg-transparent outline-none px-2 text-sm"
//             />
//             <button className="btn-gold ml-2">Subscribe</button>
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












