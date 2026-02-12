import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/pages/context/CartContext";

const Checkout: React.FC = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    date: "",
    note: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  if (!cart || cart.length === 0) {
    return (
      <div className="py-32 text-center">
        <h2 className="text-3xl font-bold">No items to checkout</h2>
        <p className="text-muted-foreground mt-2">
          Please add cakes to your cart first.
        </p>
      </div>
    );
  }

  /* ================= PLACE ORDER ================= */

  const handlePlaceOrder = () => {
    if (!form.name || !form.phone || !form.address || !form.date) {
      alert("Please fill all required fields");
      return;
    }

    // Normally → send to backend here
    console.log("ORDER:", { form, cart, totalPrice });

    clearCart();
    navigate("/order-success");
  };

  /* ================= WHATSAPP ORDER ================= */

  const handleWhatsAppOrder = () => {
    const itemsText = cart
      .map(
        (i) =>
          `• ${i.title} x${i.qty} — ₹${i.price * i.qty}`
      )
      .join("\n");

    const message = `
🎂 Cake Order

Name: ${form.name}
Phone: ${form.phone}
Address: ${form.address}
Date: ${form.date}

Items:
${itemsText}

Total: ₹${totalPrice}

Note: ${form.note}
`;

    const url =
      "https://wa.me/917347713573?text=" +
      encodeURIComponent(message);

    window.open(url, "_blank");
  };

  /* ================= UI ================= */

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-12">

        {/* ================= FORM ================= */}
        <div className="lg:col-span-2">

          <h2 className="text-4xl font-serif font-bold mb-8">
            Checkout Details
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">

            <div>
              <label className="text-sm font-medium">Full Name *</label>
              <input
                name="name"
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3 mt-1"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Phone *</label>
              <input
                name="phone"
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3 mt-1"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-sm font-medium">
                Delivery Address *
              </label>
              <input
                name="address"
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3 mt-1"
              />
            </div>

            <div>
              <label className="text-sm font-medium">
                Delivery Date *
              </label>
              <input
                type="date"
                name="date"
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3 mt-1"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-sm font-medium">
                Message on Cake / Notes
              </label>
              <textarea
                name="note"
                onChange={handleChange}
                rows={3}
                className="w-full border rounded-lg px-4 py-3 mt-1"
              />
            </div>

          </div>

        </div>

        {/* ================= SUMMARY ================= */}
        <div className="bg-card p-8 rounded-2xl shadow-lg h-fit sticky top-24">

          <h3 className="font-serif font-bold text-xl mb-6">
            Order Summary
          </h3>

          <div className="space-y-4 mb-6">

            {cart.map((item) => (
              <div key={item.id} className="flex justify-between text-sm">
                <span>
                  {item.title} × {item.qty}
                </span>
                <span>₹{item.price * item.qty}</span>
              </div>
            ))}

          </div>

          <div className="border-t pt-4 flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>₹{totalPrice}</span>
          </div>

          {/* buttons */}
          <button
            onClick={handlePlaceOrder}
            className="btn-gold w-full mt-6"
          >
            Place Order
          </button>

          <button
            onClick={handleWhatsAppOrder}
            className="w-full mt-4 border-2 border-primary text-primary
                       py-3 rounded-full font-semibold
                       hover:bg-primary hover:text-white transition"
          >
            Order via WhatsApp
          </button>

        </div>

      </div>
    </section>
  );
};

export default Checkout;
