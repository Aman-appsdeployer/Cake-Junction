import { motion } from "framer-motion";
import { CheckCircle, CreditCard, Banknote, Smartphone } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const OrderSuccess: React.FC = () => {
  const [method, setMethod] = useState<string>("");
  const navigate = useNavigate();

  const orderId = "CJ" + Math.floor(Math.random() * 100000);

  const handleConfirm = () => {
    if (!method) {
      alert("Please select a payment method");
      return;
    }

    // here you can call payment logic
    console.log("Payment method:", method);

    navigate("/payment");
  };

  return (
    <section className="min-h-[75vh] flex items-center justify-center bg-white px-4 mt-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-xl w-full bg-white rounded-3xl shadow-2xl p-10"
      >

        {/* header */}
        <div className="text-center mb-8">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-3xl font-serif font-bold">
            Order Received 🎂
          </h1>
          <p className="text-muted-foreground mt-2">
            Choose your payment method to confirm order
          </p>
        </div>

        {/* order id */}
        <div className="bg-rose-50 border border-rose-200 rounded-xl p-4 text-center mb-8">
          <p className="text-sm text-muted-foreground">Order ID</p>
          <p className="font-bold text-lg text-primary">{orderId}</p>
        </div>

        {/* ================= PAYMENT OPTIONS ================= */}

        <div className="space-y-4">

          {/* COD */}
          <button
            onClick={() => setMethod("cod")}
            className={`w-full flex items-center gap-4 p-4 rounded-xl border transition
            ${method === "cod"
                ? "border-primary bg-rose-50"
                : "border-gray-200 hover:border-primary"}`}
          >
            <Banknote className="text-primary" />
            <div className="text-left">
              <p className="font-semibold">Cash on Delivery</p>
              <p className="text-sm text-muted-foreground">
                Pay when your cake is delivered
              </p>
            </div>
          </button>

          {/* UPI */}
          <button
            onClick={() => setMethod("upi")}
            className={`w-full flex items-center gap-4 p-4 rounded-xl border transition
            ${method === "upi"
                ? "border-primary bg-rose-50"
                : "border-gray-200 hover:border-primary"}`}
          >
            <Smartphone className="text-primary" />
            <div className="text-left">
              <p className="font-semibold">UPI Payment</p>
              <p className="text-sm text-muted-foreground">
                Pay via Google Pay / PhonePe / Paytm
              </p>
            </div>
          </button>

          {/* Online */}
          <button
            onClick={() => setMethod("online")}
            className={`w-full flex items-center gap-4 p-4 rounded-xl border transition
            ${method === "online"
                ? "border-primary bg-rose-50"
                : "border-gray-200 hover:border-primary"}`}
          >
            <CreditCard className="text-primary" />
            <div className="text-left">
              <p className="font-semibold">Online Card / NetBanking</p>
              <p className="text-sm text-muted-foreground">
                Secure online payment
              </p>
            </div>
          </button>

        </div>

        {/* confirm button */}
        <button
          onClick={handleConfirm}
          className="btn-gold w-full mt-8"
        >
          Confirm Payment Method
        </button>

      </motion.div>
    </section>
  );
};

export default OrderSuccess;
