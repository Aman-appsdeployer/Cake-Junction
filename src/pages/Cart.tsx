import { useCart } from "@/pages/context/CartContext";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQty, totalPrice } = useCart();

  if (!cart || cart.length === 0) {
    return (
      <div className="py-32 text-center">
        <h2 className="text-3xl font-serif font-bold">
          Your Cart is Empty 🛒
        </h2>
        <p className="text-muted-foreground mt-2">
          Add some delicious cakes!
        </p>

        <Link to="/shop" className="btn-gold mt-6 inline-block">
          Explore Cakes
        </Link>
      </div>
    );
  }

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">

        <h2 className="text-4xl font-serif font-bold mb-10">
          Your <span className="text-primary">Cart</span>
        </h2>

        <div className="grid lg:grid-cols-3 gap-10">

          {/* ================= ITEMS ================= */}
          <div className="lg:col-span-2 space-y-6">

            {cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-6 bg-card p-6 rounded-2xl shadow hover:shadow-lg transition"
              >
                {/* image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-28 h-28 object-cover rounded-xl"
                />

                {/* content */}
                <div className="flex-1">

                  <h3 className="font-bold text-lg mb-1">
                    {item.title}
                  </h3>

                  {/* ✅ DESCRIPTION */}
                  <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                    {item.desc}
                  </p>

                  <p className="text-primary font-semibold mb-3">
                    ₹{item.price}
                  </p>

                  {/* qty controls */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() =>
                        updateQty(item.id, Math.max(1, item.qty - 1))
                      }
                      className="p-2 border rounded hover:bg-secondary transition"
                    >
                      <Minus size={16} />
                    </button>

                    <span className="font-semibold w-6 text-center">
                      {item.qty}
                    </span>

                    <button
                      onClick={() => updateQty(item.id, item.qty + 1)}
                      className="p-2 border rounded hover:bg-secondary transition"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                </div>

                {/* remove */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-600 transition"
                >
                  <Trash2 />
                </button>

              </div>
            ))}

          </div>

          {/* ================= SUMMARY ================= */}
          <div className="bg-card p-8 rounded-2xl shadow-lg h-fit sticky top-24">

            <h3 className="font-serif font-bold text-xl mb-6">
              Order Summary
            </h3>

            <div className="space-y-3 text-sm">

              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold">₹{totalPrice}</span>
              </div>

              <div className="flex justify-between">
                <span>Delivery</span>
                <span className="font-semibold">₹0</span>
              </div>

            </div>

            <div className="flex justify-between border-t mt-4 pt-4 font-bold text-lg">
              <span>Total</span>
              <span>₹{totalPrice}</span>
            </div>

            <Link to="/checkout" className="btn-gold w-full mt-6 block text-center">
              Checkout
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Cart;
