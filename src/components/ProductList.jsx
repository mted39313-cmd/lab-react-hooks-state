import React from "react";
import ProductCard from "./ProductCard";

export const sampleProducts = [
  { id: 1, name: "Milk", price: "$3.99", category: "Dairy" },
  { id: 2, name: "Bread", price: "$2.49", category: "Bakery" },
  { id: 3, name: "Apple", price: "$1.99", category: "Fruits" },
  { id: 4, name: "Cheese", price: "$4.99", category: "Dairy" },
];

export default function ProductList({ products, onAddToCart }) {
  return (
    <div>
      <h2>Products</h2>
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))
      )}
    </div>
  );
}