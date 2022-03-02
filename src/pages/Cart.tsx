import React, { useContext } from "react";
import ProductContext from "../context/ProductContext";
import { contextTypes } from "../shared/types";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cart: React.FC = () => {
  const { cartItems, removeItem, sum, checkout } = useContext(
    ProductContext
  ) as contextTypes;

  if (cartItems.length === 0) {
    return (
      <p>
        There are no items in your cart please go back to the{" "}
        <Link to="/"> Home page</Link> to add items{" "}
      </p>
    );
  }

  return (
    <>
      {cartItems.map((cart) => (
        <div className="cartItems" key={cart.id}>
          <img className="img" src={cart.image} alt="CartItem" />
          <p className="card-title">{cart.name}</p>
          <p className=" itemsPrice">${cart.price}</p>
          <FaTimes
            className="faTimes"
            color="#2d3261"
            onClick={() => removeItem(cart.id)}
          />
        </div>
      ))}
      <div>
        <hr />
        <div className="d-flex justify-content-between">
          <p className="text-right pt-2">Total: ${sum}</p>
          <button className="btn btn-primary btn-sm" onClick={checkout}>
            {" "}
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
