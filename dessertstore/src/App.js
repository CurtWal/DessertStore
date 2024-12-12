import "./App.css";
import data from "./data.json";
import cartimg from "./icon-add-to-cart.svg";
import empty from "./illustration-empty-cart.svg";
import Cart from "./Components/Cart.js";
import { useEffect, useState } from "react";
import React from "react";

function App() {

  const [dessert, setDesserts] = useState([]);
  const [empty, setEmpty] = useState(true);
  const [cost, setCost] = useState(0);

  const addToCart = (newDessert, newDessertPrice) => {
    setCost(cost + parseFloat(newDessertPrice));
    setDesserts([...dessert, [newDessert, newDessertPrice]]);
    setEmpty(false);
  };

  return (
    <div className="App">
      <div class="desserts">
        <h1 id="title">Desserts</h1>
        {data.map((items) => (
          <div id="items">
            <img src={items.image.desktop} alt="" id="images" />
            <div class="itemNames">
              <p>{items.category}</p>
              <p>{items.name}</p>
              <p style={{ color: "hsl(14, 86%, 42%)" }}>
                ${items.price.toFixed(2)}
              </p>
            </div>
            {dessert.find((item) => item[0] === items.name) ? (
              <button
                
              >
                <span style={{ position: "absolute", left: "10%" }}>-</span>
                {dessert.length}
                <span style={{ position: "absolute", right: "10%" }}>+</span>
              </button>
            ) : (
              <button
                onClick={() => addToCart(items.name, items.price.toFixed(2))}
              >
                <img src={cartimg} alt="" />
                Add to Cart
              </button>
            )}
          </div>
        ))}
        <div id="cart" style={{ color: "hsl(14, 86%, 42%)" }}>
          <h5 style={{ textAlign: "left", margin: "20px", fontSize: "25px" }}>
            Your Cart ({dessert.length})
          </h5>
          <p style={{ textAlign: "left", margin: "20px", fontSize: "25px" }}>
            Total: ${cost.toFixed(2)}
          </p>
          <Cart dessert={dessert} emptyCart={empty} />
        </div>
      </div>

      <div class="attribution">
        Coded by <a href="https://github.com/CurtWal">Curtrick Walton</a>.
      </div>
    </div>
  );
}

export default App;
