import React from 'react';

export default function ProductCard({ product, onSelect }) {
  return (
    <article className="product-card" onClick={() => onSelect(product)} style={{ cursor: 'pointer' }}>
      <img
        className="product-img"
        src={product.imagen || `/img/hero.jpg`}
        alt={product.nombre}
      />
      <div className="product-info">
        <h3>{product.nombre}</h3>
        <p className="product-price">${product.precio?.toLocaleString('es-AR')}</p>
      </div>
    </article>
  );
}
