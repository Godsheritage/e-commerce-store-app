import React, { useContext } from "react";
import ProductContext from "../context/ProductContext";
import { contextTypes } from "../shared/types";
const Cart: React.FC = () => {
  const { cartItems } = useContext(ProductContext) as contextTypes;
  

  if (cartItems.length === 0) {
    return <p>There are no items in your cart</p>;
  }
  return (
    <>
      {cartItems.map((cart) => (
        <div className="cartItems">
          <img className="img" src = {cart.image} alt="CartItem" />
          <p className="card-title pt-3">{cart.name}</p>
          <p className="pt-3 itemsPrice">{cart.price}</p>
        </div>
      ))}
    </>
  );
};

export default Cart;
