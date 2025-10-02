// src/App.js
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles.css";
import "./responsive.css"
import Main from "./components/Main";

export default function App() {
  const [cart, setCart] = useState([]);
  const removeFromCart = (id) => setCart((prev) => prev.filter((i) => i.id !== id));

  return (
    <>
      <Navbar cartItems={cart} onRemoveFromCart={removeFromCart} />
      <Main/>
      <Footer />
    </>
  );
}
