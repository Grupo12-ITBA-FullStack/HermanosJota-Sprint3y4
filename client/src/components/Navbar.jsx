import { useEffect, useRef, useState } from "react";

export default function Navbar({
  cartItems = [],
  onRemoveFromCart = () => {},
  onCloseCart = () => {},
  onNavigate = () => {},
}) {
  const [menuOpen, setMenuOpen] = useState(false); 
  const [cartOpen, setCartOpen] = useState(false);
  const navRef = useRef(null);

  const cartCount = cartItems.reduce((acc, it) => acc + (it.cant ?? 1), 0);
  const cartTotal = cartItems.reduce((acc, it) => acc + (it.precio ?? 0) * (it.cant ?? 1), 0);

  // cerrar al click fuera
  useEffect(() => {
    const onDocClick = (e) => {
      if (!navRef.current) return;
      if (!navRef.current.contains(e.target)) {
        setCartOpen(false);
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  return (
    <header className={""}>
      <div>
        <nav ref={navRef}>
          <div className="logo" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>
            <img src="/img/logo.svg" alt="Logo Hermanos Jota" />
            <span className="logo-tit">Hermanos Jota</span>
          </div>

          {/* botón hamburguesa (por ahora abre/cierra .nav-menu, tu CSS siempre lo muestra) */}
          <button
            className="hamburger"
            id="nav-toggle"
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
            aria-controls="nav-menu"
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen((v) => !v);
            }}
          >
            <span></span><span></span><span></span>
          </button>

          {/* menú colapsable */}
          <div
            className="nav-menu"
            id="nav-menu"
            style={{ display: menuOpen ? "block" : undefined }} 
          >
            <ul className="nav-links" onClick={() => setMenuOpen(false)}>
              <li><button className="nav-btn" onClick={() => onNavigate('home')}>Inicio</button></li>
              <li><button className="nav-btn" onClick={() => onNavigate('catalog')}>Catálogo</button></li>
              <li><button className="nav-btn" onClick={() => onNavigate('contact')}>Contacto</button></li>
            </ul>

            {/* acciones (carrito) */}
            <div className="nav-actions">
              <div
                id="cart-icon-container"
                onClick={(e) => {
                  e.stopPropagation();
                  setCartOpen((v) => !v);
                }}
                role="button"
                aria-label="Abrir carrito"
              >
                <span id="cart-icon">🛒</span>
                <span
                  id="cart-count"
                  style={{ display: cartCount > 0 ? "block" : "none" }}
                >
                  {cartCount}
                </span>
              </div>

              <div
                id="cart-dropdown"
                style={{ display: cartOpen ? "block" : "none" }} 
              >
                <h3>Carrito</h3>

                <div id="cart-items">
                  {cartItems.length === 0 && <p>Sin productos.</p>}
                  {cartItems.map((it) => (
                    <div key={it.id}>
                      <div>
                        <strong>{it.nombre}</strong>{" "}
                        <span>× {it.cant ?? 1}</span>
                      </div>
                      <div>
                        ${(it.precio * (it.cant ?? 1)).toLocaleString("es-AR")}
                        <button
                          className="cart-remove"
                          onClick={() => onRemoveFromCart(it.id)}
                          title="Quitar"
                        >
                          ×
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div id="cart-total">
                  Total: ${cartTotal.toLocaleString("es-AR")}
                </div>

                <button
                  id="cart-close"
                  onClick={() => {
                    setCartOpen(false);
                    onCloseCart();
                  }}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
