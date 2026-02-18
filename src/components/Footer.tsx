import logo from "@/assets/Logo-1.png";
import { Facebook, Instagram, Mail, Youtube } from "lucide-react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm transition ${
      isActive
        ? "text-rose-600 font-semibold"
        : "text-gray-600 hover:text-rose-600"
    }`;

  return (
    <footer
      role="contentinfo"
      aria-label="Cake Junction bakery website footer"
      className="bg-white border-rose-100 pt-14 sm:pt-16 pb-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ================= TOP GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">

          {/* ================= BRAND ================= */}
          <div className="lg:col-span-2">
            <NavLink
              to="/"
              aria-label="Cake Junction homepage"
              className="flex items-center gap-3"
            >
              <img
                src={logo}
                alt="Cake Junction online cake bakery logo"
                className="h-20 sm:h-24 object-contain"
                loading="lazy"
              />
            </NavLink>

            {/* SEO content */}
            <p className="text-sm text-gray-600 mt-4 max-w-sm leading-relaxed">
              Cake Junction is an online cake bakery offering custom birthday
              cakes, wedding cakes, and designer cakes with same-day cake
              delivery. Freshly baked with premium ingredients for every
              celebration.
            </p>

            {/* SOCIAL */}
            <div
              className="flex gap-4 mt-5"
              aria-label="Cake Junction social media links"
            >
              <a
                href="https://www.instagram.com/cakejunction7/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Cake Junction Instagram"
                className="p-2 rounded-full bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
              >
                <Instagram className="w-5 h-5 text-rose-600" />
              </a>

              <a
                href="https://www.facebook.com/share/1BwThQmjmD/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Cake Junction Facebook"
                className="p-2 rounded-full bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
              >
                <Facebook className="w-5 h-5 text-rose-600" />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Cake Junction YouTube"
                className="p-2 rounded-full bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
              >
                <Youtube className="w-5 h-5 text-rose-600" />
              </a>
            </div>
          </div>

          {/* ================= SHOP NAV ================= */}
          <nav aria-label="Shop cake categories">
            <h2 className="font-bold text-gray-900 mb-4 text-sm sm:text-base">
              Shop Cakes
            </h2>
            <ul className="space-y-2">
              <li><NavLink to="/shop" className={linkClass}>All Cakes</NavLink></li>
              <li><NavLink to="/shop/birthday" className={linkClass}>Birthday Cakes</NavLink></li>
              <li><NavLink to="/shop/wedding" className={linkClass}>Wedding Cakes</NavLink></li>
              <li><NavLink to="/shop/custom" className={linkClass}>Custom Cakes</NavLink></li>
            </ul>
          </nav>

          {/* ================= SUPPORT NAV ================= */}
          <nav aria-label="Customer support links">
            <h2 className="font-bold text-gray-900 mb-4 text-sm sm:text-base">
              Customer Support
            </h2>
            <ul className="space-y-2">
              <li><NavLink to="/contact" className={linkClass}>Contact Bakery</NavLink></li>
              <li><NavLink to="/faq" className={linkClass}>Cake FAQs</NavLink></li>
              <li><NavLink to="/track-order" className={linkClass}>Track Cake Order</NavLink></li>
              <li><NavLink to="/support" className={linkClass}>Help Center</NavLink></li>
            </ul>
          </nav>

          {/* ================= LEGAL NAV ================= */}
          <nav aria-label="Legal policies">
            <h2 className="font-bold text-gray-900 mb-4 text-sm sm:text-base">
              Legal Policies
            </h2>
            <ul className="space-y-2">
              <li><NavLink to="/privacy-policy" className={linkClass}>Privacy Policy</NavLink></li>
              <li><NavLink to="/terms" className={linkClass}>Terms & Conditions</NavLink></li>
              <li><NavLink to="/refund-policy" className={linkClass}>Refund Policy</NavLink></li>
              <li><NavLink to="/shipping-policy" className={linkClass}>Shipping Policy</NavLink></li>
            </ul>
          </nav>
        </div>

        {/* ================= NEWSLETTER ================= */}
        <form
          className="mt-12 bg-white border border-rose-100 rounded-2xl
                     p-5 sm:p-6 flex flex-col md:flex-row
                     items-start md:items-center justify-between
                     gap-4 shadow-sm"
          aria-label="Subscribe to cake offers newsletter"
        >
          <label className="font-semibold text-gray-900 text-sm sm:text-base">
            Subscribe for cake offers & bakery updates
          </label>

          <div className="w-full md:w-auto flex items-center gap-2
                          bg-rose-50 border border-rose-200
                          rounded-full px-4 py-2">

            <Mail className="w-4 h-4 text-rose-500" />

            <input
              type="email"
              required
              placeholder="Enter your email address"
              aria-label="Email for cake offers"
              className="bg-transparent outline-none text-sm flex-1 min-w-0"
            />

            <button
              type="submit"
              aria-label="Subscribe to cake newsletter"
              className="bg-rose-500 hover:bg-rose-600
                         text-white text-sm font-medium
                         px-4 py-1.5 rounded-full transition"
            >
              Subscribe
            </button>
          </div>
        </form>

        {/* ================= COPYRIGHT ================= */}
        <div className="mt-10 pt-6 border-t border-rose-100 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Cake Junction Bakery — Online Cake Delivery. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;








// import logo from "@/assets/Logo-1.png";
// import { Facebook, Instagram, Mail, Youtube } from "lucide-react";
// import { NavLink } from "react-router-dom";

// const Footer = () => {
//   const linkClass = ({ isActive }: { isActive: boolean }) =>
//     `text-sm transition
//      ${
//        isActive
//          ? "text-rose-600 font-semibold"
//          : "text-gray-600 hover:text-rose-600"
//      }`;

//   return (
//     <footer className="bg-white border-rose-100 pt-14 sm:pt-16 pb-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">

//         {/* ================= TOP GRID ================= */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">

//           {/* ================= BRAND ================= */}
//           <div className="lg:col-span-2">
//             <NavLink to="/" className="flex items-center gap-3">
//               <img
//                 src={logo}
//                 alt="Cake Junction Logo"
//                 className="h-20 sm:h-24 object-contain"
//               />
//             </NavLink>

//             <p className="text-sm text-gray-600 mt-4 max-w-sm leading-relaxed">
//               Premium handcrafted cakes made with love for every special occasion.
//               Order delicious cakes online with fast delivery.
//             </p>

//             {/* SOCIAL */}
//             <div className="flex gap-4 mt-5">
//               <a
//                 href="https://www.instagram.com/cakejunction7/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="p-2 rounded-full bg-white shadow-sm
//                            hover:shadow-md hover:-translate-y-0.5
//                            transition"
//               >
//                 <Instagram className="w-5 h-5 text-rose-600" />
//               </a>

//               <a
//                 href="https://www.facebook.com/share/1BwThQmjmD/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="p-2 rounded-full bg-white shadow-sm
//                            hover:shadow-md hover:-translate-y-0.5
//                            transition"
//               >
//                 <Facebook className="w-5 h-5 text-rose-600" />
//               </a>

//               <a
//                 href="https://youtube.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="p-2 rounded-full bg-white shadow-sm
//                            hover:shadow-md hover:-translate-y-0.5
//                            transition"
//               >
//                 <Youtube className="w-5 h-5 text-rose-600" />
//               </a>
//             </div>
//           </div>

//           {/* ================= SHOP ================= */}
//           <div>
//             <h4 className="font-bold text-gray-900 mb-4 text-sm sm:text-base">
//               Shop
//             </h4>
//             <ul className="space-y-2">
//               <li><NavLink to="/shop" className={linkClass}>All Cakes</NavLink></li>
//               <li><NavLink to="/shop/birthday" className={linkClass}>Birthday Cakes</NavLink></li>
//               <li><NavLink to="/shop/wedding" className={linkClass}>Wedding Cakes</NavLink></li>
//               <li><NavLink to="/shop/custom" className={linkClass}>Custom Cakes</NavLink></li>
//             </ul>
//           </div>

//           {/* ================= SUPPORT ================= */}
//           <div>
//             <h4 className="font-bold text-gray-900 mb-4 text-sm sm:text-base">
//               Support
//             </h4>
//             <ul className="space-y-2">
//               <li><NavLink to="/contact" className={linkClass}>Contact Us</NavLink></li>
//               <li><NavLink to="/faq" className={linkClass}>FAQ</NavLink></li>
//               <li><NavLink to="/track-order" className={linkClass}>Track Order</NavLink></li>
//               <li><NavLink to="/support" className={linkClass}>Help Center</NavLink></li>
//             </ul>
//           </div>

//           {/* ================= LEGAL ================= */}
//           <div>
//             <h4 className="font-bold text-gray-900 mb-4 text-sm sm:text-base">
//               Legal
//             </h4>
//             <ul className="space-y-2">
//               <li><NavLink to="/privacy-policy" className={linkClass}>Privacy Policy</NavLink></li>
//               <li><NavLink to="/terms" className={linkClass}>Terms & Conditions</NavLink></li>
//               <li><NavLink to="/refund-policy" className={linkClass}>Refund Policy</NavLink></li>
//               <li><NavLink to="/shipping-policy" className={linkClass}>Shipping Policy</NavLink></li>
//             </ul>
//           </div>
//         </div>

//         {/* ================= NEWSLETTER ================= */}
//         <div className="mt-12 bg-white border border-rose-100
//                         rounded-2xl p-5 sm:p-6
//                         flex flex-col md:flex-row
//                         items-start md:items-center
//                         justify-between gap-4 shadow-sm">

//           <p className="font-semibold text-gray-900 text-sm sm:text-base">
//             Subscribe for special offers & cake updates 
//           </p>

//           <div className="w-full md:w-auto
//                           flex items-center gap-2
//                           bg-rose-50 border border-rose-200
//                           rounded-full px-4 py-2">

//             <Mail className="w-4 h-4 text-rose-500" />

//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="bg-transparent outline-none text-sm flex-1 min-w-0"
//             />

//             <button
//               className="bg-rose-500 hover:bg-rose-600
//                          text-white text-sm font-medium
//                          px-4 py-1.5 rounded-full transition"
//             >
//               Subscribe
//             </button>
//           </div>
//         </div>

//         {/* ================= COPYRIGHT ================= */}
//         <div className="mt-10 pt-6 border-t border-rose-100
//                         text-center text-sm text-gray-500">
//           © {new Date().getFullYear()} Cake Junction. All rights reserved.
//         </div>

//       </div>
//     </footer>
//   );
// };

// export default Footer;



