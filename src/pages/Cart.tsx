import React, { useContext, useEffect } from "react";
import ProductContext from "../context/ProductContext";
import { contextTypes } from "../shared/types";
import {FaTimes}  from 'react-icons/fa'
import { Link } from "react-router-dom";
const Cart: React.FC = () => {
  const { cartItems, removeItem } = useContext(ProductContext) as contextTypes;

  const sum = cartItems.reduce( (total, curVal) => {
        return total + curVa
    }, 0)
  

  if (cartItems.length === 0) {
    return <p>There are no items in your cart please go back to the <Link to = '/'> Home page</Link> to add items </p>;
  }

  return (
    <>
      {cartItems.map((cart) => (
        <div className="cartItems" key={cart.id}>
          <img className="img" src = {cart.image} alt="CartItem" />
          <p className="card-title pt-3">{cart.name}</p>
          <p className="pt-3 itemsPrice">{cart.price}</p>
          <FaTimes className="faTimes" color = '#2d3261' onClick={() => removeItem(cart.id)}/>
        </div>
      ))}
      <div>
        <hr/>
         <p className="text-right">Total:</p>
      </div>
    </>
  );
};

export default Cart;
