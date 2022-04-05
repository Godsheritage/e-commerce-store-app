import React, { useContext } from "react";
import ProductContext from "../context/ProductContext";
import { contextTypes } from "../shared/types";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Cart: React.FC = () => {
  // importing items from useContext API
  const { removeItem, sum, checkout, cartItems } = useContext(
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
      <AnimatePresence>
        {cartItems.map((cart) => (
          <motion.div
           key={cart.id}
           initial = {{ opacity : 0}}
           animate = {{opacity : 1}}
           exit = {{opacity : 0}}
           >
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
          </motion.div>
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
      </AnimatePresence>
    </>
  );
};

export default Cart;
