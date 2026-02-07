import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";

const Layout = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">

      {/* ================= NAVBAR ================= */}
      <Navbar />

      {/* ================= MAIN ================= */}
      {/* navbar is fixed → add top padding */}
      <main className="pt-[72px] sm:pt-[78px] min-h-screen">

        {/* optional page fade animation */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <Outlet />
        </motion.div>

      </main>

      {/* ================= FOOTER ================= */}
      <Footer />

      {/* ================= FLOAT BUTTONS ================= */}
      <WhatsAppFloat />

    </div>
  );
};

export default Layout;



// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import WhatsAppFloat from "@/components/WhatsAppFloat";
// import { Outlet } from "react-router-dom";

// const Layout = () => {
//   return (
//     <>
//       <Navbar />

//       <main className="min-h-screen">
//         <Outlet />
//       </main>

//       <Footer />

//       {/* Floating Social Buttons */}
//       <WhatsAppFloat />
//     </>
//   );
// };

// export default Layout;