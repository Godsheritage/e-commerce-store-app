import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import React, { useState, createContext, useEffect } from "react";
import { productTypes, contextTypes, cartTypes } from "../shared/types";
import { isTemplateExpression } from "typescript";

const ProductContext = createContext<contextTypes | null>(null);
const serverURL = 'https://localhost:5000'

export const ContextProvider: React.FC<React.ReactNode> = ({ children }) => {
  const navigate = useNavigate();

  const [products, setProducts] = useState<productTypes["items"][]>([]);

  const [isClicked, setIsClicked] = useState<boolean>(false);

  const [singleProd, setSingleProd] = useState<any>();

  const [cartItems, setCartItems] = useState<cartTypes[]>([]);

  const [isLoading, setIsLoading] = useState<Boolean>(true);

  //to fetch all products from the backend API
  const fetchProducts = async () => {
    // const response = await axios.get(`${serverURL}/productData`);
    const response = await axios.get("https://fakestoreapi.com/products");
    const data = response.data;
    setProducts(data);
    setIsLoading(false)
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // to fetch a single product from the back end API
  const fetchSingleProduct = async (id: string) => {
    // const response = await axios.get(`${serverURL}/productData/${id}`);
    const response = products.find((item) => item.id === id)
    setSingleProd(response);
    navigate(`/Products/${response!.title}`);
  };

  // Add items to the cart
  const addToCart = async (items: productTypes["items"]) => {
    const updCart: cartTypes = {
      id: uuidv4(),
      name: items.title,
      image: items.image,
      price: items.price,
    };

    await axios.post(`${serverURL}/cartItems`, updCart);
    setIsClicked(!isClicked);
  };

  // to fetch cart Items
  const fetchCartItems = async () => {
    const response = await axios.get(`${serverURL}/cartItems`);
    setCartItems(response.data);
  };

  useEffect(() => {
    fetchCartItems();
  }, [isClicked]);

  // to find the sum of all the products
  const sum : any = cartItems.reduce((total, curVal) => {
    return total + curVal.price!;
  }, 0);

  // to remove all the cart items
  const checkout = async () => {
    if (
      window.confirm(
        ` Your total balance is $${sum} Are you sure you want to checkout?`
      )
    ) {
      const response = await axios.delete(`${serverURL}/cartItems`)
      setCartItems(response.data)
    }
  };

  // to remove a cart item
  const removeItem = async (id: string) => {
    if (window.confirm("Are you sure you want to remove item from cart")) {
      const response = await axios.delete(
        `${serverURL}/cartItems/${id}`
      );
      const remainingItems = response.data;
      setCartItems(remainingItems);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        isLoading,
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
