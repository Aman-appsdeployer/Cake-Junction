import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

import { CartProvider } from "@/pages/context/CartContext"; 

const container = document.getElementById("root");

if (!container) {
  throw new Error("Root container missing in index.html");
}

createRoot(container).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
