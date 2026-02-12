import { motion } from "framer-motion";
import { CheckCircle2, Phone, Clock, Cake } from "lucide-react";
import { Link } from "react-router-dom";

const Payment: React.FC = () => {
  const orderId = "CJ" + Math.floor(Math.random() * 100000);

  return (
    <section className="min-h-[85vh] flex items-center justify-center
                        bg-gradient-to-b from-rose-50 via-white to-orange-50 py-16 px-4">

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        className="max-w-xl w-full bg-white rounded-3xl shadow-2xl p-10 text-center"
      >

        {/* success icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.2 }}
          className="flex justify-center mb-6"
        >
          <CheckCircle2 className="w-20 h-20 text-green-500" />
        </motion.div>

        {/* title */}
        <h1 className="text-3xl font-serif font-bold mb-3">
          Order Confirmed 🎉
        </h1>

        <p className="text-muted-foreground mb-6">
          Thank you for ordering from <span className="font-semibold text-primary">Cake Junction</span>.
          Your cake is now scheduled for preparation.
        </p>

        {/* order id box */}
        <div className="bg-rose-50 border border-rose-200 rounded-xl p-5 mb-8">
          <p className="text-sm text-muted-foreground">Order Number</p>
          <p className="text-xl font-bold text-primary tracking-wide">
            {orderId}
          </p>
        </div>

        {/* next steps */}
        <div className="grid gap-3 text-left text-sm mb-8">

          <div className="flex gap-3 items-start">
            <Cake className="text-primary mt-0.5" size={18} />
            <p>Your cake will be freshly baked by our chef team</p>
          </div>

          <div className="flex gap-3 items-start">
            <Clock className="text-primary mt-0.5" size={18} />
            <p>Preparation & delivery will follow your selected schedule</p>
          </div>

          <div className="flex gap-3 items-start">
            <Phone className="text-primary mt-0.5" size={18} />
            <p>Our team may call you to confirm details</p>
          </div>

        </div>

        {/* contact strip */}
        <div className="bg-gray-50 rounded-xl p-4 mb-8 text-sm">
          Need help? Contact us on WhatsApp or Phone for faster support.
        </div>

        {/* buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <a
            href="https://wa.me/917347713573"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            Chat on WhatsApp
          </a>

          <Link
            to="/shop"
            className="px-6 py-3 rounded-full border-2 border-primary
                       text-primary font-semibold
                       hover:bg-primary hover:text-white transition"
          >
            Continue Shopping
          </Link>

        </div>

      </motion.div>
    </section>
  );
};

export default Payment;
