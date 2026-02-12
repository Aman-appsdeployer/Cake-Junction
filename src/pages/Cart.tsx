import { useCart } from "@/pages/context/CartContext";
import { Minus, Plus, Trash2 } from "lucide-react";

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
      </div>
    );
  }

  return (
    <section className="py-24 bg-background bg-white">
      <div className="container mx-auto px-4">

        <h2 className="text-4xl font-serif font-bold mb-10">
          Your <span className="text-primary">Cart</span>
        </h2>

        <div className="grid lg:grid-cols-3 gap-10">

          {/* CART ITEMS */}
          <div className="lg:col-span-2 space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-6 bg-card p-5 rounded-xl shadow"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-cover rounded-lg"
                />

                <div className="flex-1">
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-primary font-semibold">
                    ₹{item.price}
                  </p>

                  {/* QUANTITY CONTROLS */}
                  <div className="flex items-center gap-3 mt-3">
                    <button
                      onClick={() => updateQty(item.id, item.qty - 1)}
                      className="p-1 border rounded hover:bg-secondary transition"
                    >
                      <Minus size={16} />
                    </button>

                    <span className="font-medium">{item.qty}</span>

                    <button
                      onClick={() => updateQty(item.id, item.qty + 1)}
                      className="p-1 border rounded hover:bg-secondary transition"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-600 transition"
                >
                  <Trash2 />
                </button>
              </div>
            ))}
          </div>

          {/* ORDER SUMMARY */}
          <div className="bg-card p-6 rounded-xl shadow-lg h-fit">
            <h3 className="font-serif font-bold text-xl mb-4">
              Order Summary
            </h3>

            <div className="flex justify-between mb-3 text-sm">
              <span>Subtotal</span>
              <span className="font-semibold">₹{totalPrice}</span>
            </div>

            <div className="flex justify-between mb-3 text-sm">
              <span>Delivery</span>
              <span className="font-semibold">₹0</span>
            </div>

            <div className="flex justify-between border-t pt-3 font-bold text-lg">
              <span>Total</span>
              <span>₹{totalPrice}</span>
            </div>

            <button className="btn-gold w-full mt-6">
              Checkout
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Cart;
