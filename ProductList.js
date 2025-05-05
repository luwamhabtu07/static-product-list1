// src/components/ProductList.js
import React from 'react';

const products = [
  { id: 1, name: "Laptop", description: "High-performance laptop for professionals.", price: 1200 },
  { id: 2, name: "Smartphone", description: "Latest smartphone with advanced features.", price: 800 },
  { id: 3, name: "Headphones", description: "Noise-cancelling over-ear headphones.", price: 200 },
  { id: 4, name: "Monitor", description: "4K Ultra HD monitor for stunning visuals.", price: 350 },
  { id: 5, name: "Keyboard", description: "Mechanical keyboard with customizable keys.", price: 100 }
];

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map(product => (
        <div className="product-card" key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p><strong>Price:</strong> ${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
