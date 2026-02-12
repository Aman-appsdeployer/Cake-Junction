import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

/* ================= TYPES ================= */

export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

export interface CartItem extends Product {
  qty: number;
}

interface CartContextType {
  cart: CartItem[];
  cartCount: number;
  totalPrice: number;
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  updateQty: (id: number, qty: number) => void;
  clearCart: () => void;
}

/* ================= CONTEXT ================= */

const CartContext = createContext<CartContextType | undefined>(undefined);

/* ================= PROVIDER ================= */

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  /*  Load cart from localStorage */
  useEffect(() => {
    const saved = localStorage.getItem("cake_cart");
    if (saved) setCart(JSON.parse(saved));
  }, []);

  /*  Save cart to localStorage */
  useEffect(() => {
    localStorage.setItem("cake_cart", JSON.stringify(cart));
  }, [cart]);

  /* ================= ACTIONS ================= */

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);

      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQty = (id: number, qty: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, qty: qty < 1 ? 1 : qty }
          : item
      )
    );
  };

  const clearCart = () => setCart([]);

  /* ================= DERIVED VALUES ================= */

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  /* ================= PROVIDER ================= */

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount,
        totalPrice,
        addToCart,
        removeFromCart,
        updateQty,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

/* ================= HOOK ================= */

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
};



