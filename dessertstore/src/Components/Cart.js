import React, { Component } from "react";
import empty from "../illustration-empty-cart.svg";
const Cart = ({ dessert, emptyCart }) => {
  return (
    <div>
      {emptyCart ? (
        <div>
          <img src={empty} atl="" />
          <p>Your added items will appear here</p>{" "}
        </div>
      ) : (
        <div>
          {dessert.map((item, index) => (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '3fr 1fr',
                textAlign: 'left'
              }}
              key={index}
            >
              <p style={{marginLeft:"20px"}}>{item[0]}</p>
              <p>{item[1]}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Cart;
