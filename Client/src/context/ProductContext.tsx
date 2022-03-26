import React, { useState, createContext, useEffect } from "react";
import { productTypes, contextTypes, cartTypes } from "../shared/types";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const ProductContext = createContext<contextTypes | null>(null);

export const ContextProvider: React.FC<React.ReactNode> = ({ children }) => {
  const navigate = useNavigate();

  const [products, setProducts] = useState<productTypes[]>([]);

  const [isClicked, setIsClicked] = useState<boolean>(false);

  //to fetch the data from the backend API

  const fetchData = async () => {
    const response = await axios.get("http://localhost:5000/productData");
    setProducts(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [singleProd, setSingleProd] = useState<any>();

  const fetchSingleProduct = async (id: string) => {
    const response = await axios.get(`http://localhost:5000/productData/${id}`);
    setSingleProd(response.data);

    navigate(`/Products/${response.data.name}`);
  };

  //state that contains the cart Items

  const [cartItems, setCartItems] = useState<cartTypes[]>([]);

  // Add items to the cart

  const addToCart = async (items: productTypes) => {
    const updCart: cartTypes = {
      id: uuidv4(),
      name: items.name,
      image: items.image,
      price: items.price,
    };

    await axios.post("http://localhost:5000/cartItems", updCart);

    setIsClicked(!isClicked);
  };

  // to fetch cart Items
  const fetchCartItems = async () => {
    const response = await axios.get("http://localhost:5000/cartItems");
    setCartItems(response.data);
  };

  useEffect(() => {
    fetchCartItems();
  }, [isClicked]);

  // to find the sum of all the products

  const sum = cartItems.reduce((total, curVal) => {
    return total + curVal.price!;
  }, 0);

  // to check out all the cart items

  const checkout = () => {
    if (
      window.confirm(
        ` Your total balance is $${sum} Are you sure you want to checkout?`
      )
    ) {
      setCartItems([]);
    }
  };

  const removeItem = async (id: string) => {
    if (window.confirm("Are you sure you want to remove item from cart")) {
      const response = await axios.delete(
        `http://localhost:5000/cartItems/${id}`
      );
      const remainingItems = response.data;
      setCartItems(remainingItems);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        addToCart,
        cartItems,
        removeItem,
        sum,
        checkout,
        fetchSingleProduct,
        singleProd,
        fetchCartItems,
        isClicked,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
