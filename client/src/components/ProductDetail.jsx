import React, { useState } from 'react';

export default function ProductDetail({ product, onBack, onAddToCart }) {
  const [qty, setQty] = useState(1);

  if (!product) return null;

  return (
    <section className="product-detail">
      <button onClick={onBack} className="back-button">← Volver</button>
      <div className="detail-grid">
        <img className="detail-img" src={product.imagen || `/img/hero.jpg`} alt={product.nombre} />
        <div className="detail-info">
          <h2>{product.nombre}</h2>
          <p className="product-price">${product.precio?.toLocaleString('es-AR')}</p>
          <p>{product.descripcion}</p>
          <p><strong>Materiales:</strong> {product.materiales}</p>
          <p><strong>Medidas:</strong> {product.medidas?.ancho} x {product.medidas?.altura} x {product.medidas?.profundidad} cm</p>

          <div className="add-to-cart">
            <label>
              Cantidad:
              <input type="number" min="1" value={qty} onChange={(e) => setQty(Number(e.target.value) || 1)} />
            </label>
            <button onClick={() => onAddToCart({ ...product, cant: qty })} className="btn-primary">Añadir al carrito</button>
          </div>
        </div>
      </div>
    </section>
  );
}
