import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles.css";
import "./responsive.css";
import Main from "./components/Main";

import ProductDetail from "./components/ProductDetail";
import ContactForm from "./components/ContactForm";
import ProductList from "./components/ProductList";


export default function App() {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState({ name: 'home', payload: null });

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find(p => p.id === item.id);
      if (existing) {
        return prev.map(p => p.id === item.id ? { ...p, cant: (p.cant || 1) + (item.cant || 1) } : p);
      }
      return [...prev, { ...item }];
    });
  };

  const removeFromCart = (id) => setCart((prev) => prev.filter((i) => i.id !== id));

  const openProduct = (product) => setView({ name: 'detail', payload: product });
  const goHome = () => setView({ name: 'home', payload: null });
  const openContact = () => setView({ name: 'contact', payload: null });

  return (
    <>
      <Navbar cartItems={cart} onRemoveFromCart={removeFromCart} onNavigate={(v) => setView({ name: v, payload: null })} />

      {view.name === 'home' && (
        <>
          <Main onSelect={openProduct} onNavigate={(v) => setView({ name: v, payload: null })} />
        </>
      )}

      {view.name === 'catalog' && (
        <ProductList onSelect={openProduct} />
      )}

      {view.name === 'detail' && (
        <ProductDetail product={view.payload} onBack={goHome} onAddToCart={(it) => { addToCart(it); goHome(); }} />
      )}

      {view.name === 'contact' && (
        <ContactForm />
      )}

      <Footer />
    </>
  );
}
