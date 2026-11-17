import React, { useState } from "react";
import DarkModeToggle from "./components/DarkModeToggle";
import ProductList, { sampleProducts } from "./components/ProductList";
import Cart from "./components/Cart";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("All");

  function handleAddToCart(product) {
    setCart([...cart, product]);
  }

  const filteredProducts =
    category === "All"
      ? sampleProducts
      : sampleProducts.filter((p) => p.category === category);

  return (
    <div className={`app ${darkMode ? "dark-mode" : "light-mode"}`}>
      <h1>Grocery Shopping App</h1>

      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

      <div>
        <label htmlFor="category-filter">Filter by Category: </label>
        <select
          id="category-filter"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
          <option value="Fruits">Fruits</option>
          <option value="Produce">Produce</option>
        </select>
      </div>

      <ProductList products={filteredProducts} onAddToCart={handleAddToCart} />
      <Cart cart={cart} />
    </div>
  );
}