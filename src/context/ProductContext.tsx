import React, { useState, createContext, useEffect } from "react";
import {
  productTypes,
  contextTypes,
  cartTypes,
  singleProdType,
} from "../shared/types";
import { useNavigate } from "react-router-dom";
// import productData from "../data/productData";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
// import productData from "../data/productData";

const ProductContext = createContext<contextTypes | null>(null);

export const ContextProvider: React.FC<React.ReactNode> = ({ children }) => {

  const navigate = useNavigate();
  
  const [products, setProducts] = useState<productTypes[]>([]);

//to fetch the data from thr backend

  useEffect( () => {
    fetchData()
  }, []);
  
  const fetchData = async () => {
    const response = await axios.get("http://localhost:5000/productData");
    setProducts(response.data);
  };
  




  // setProducts([products]) as productTypes

  // const [singleItem, setSingleItem] = useState(items)

  const [singleProd, setSingleProd] = useState<singleProdType>({
    id: "5",
    name: "Heritage",
    image: "dddddddd",
    description: "ddddd",
    price: 3,
  });

  const prodNavigate = (items: productTypes) => {
    setSingleProd({
      id: items.id,
      name: items.name,
      image: items.image,
      description: items.description,
      price: items.price,
    });
    navigate(`/Products/${items.name}`);
  };

  const [cartItems, setCartItems] = useState<cartTypes[]>([]);

  const addToCart = async (items: productTypes) => {
    const updCart: cartTypes = {
      id: uuidv4(),
      name: items.name,
      image: items.image,
      price: items.price,
    };

    await axios.post('http://localhost:5000/cartItems', updCart)

    setCartItems([updCart, ...cartItems]);
    // useEffect(() => {
    //   fetchCart()
    // }, [])
    // const response:cartTypes[] = await axios.get('http://localhost:5000/cartItems')
    // setCartItems(response);
  };

  // const fetchCart = async () => {
  // }


  const sum = cartItems.reduce((total, curVal) => {
    return total + curVal.price!;
  }, 0);

  const checkout = () => {
    if (window.confirm("Are you sure you want to checkout?")) {
      setCartItems([]);
    }
  };

  const removeItem = (id: string) => {
    if (window.confirm("Are you sure you want to remove item from cart")) {
      setCartItems(cartItems.filter((items) => items.id !== id));
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
        prodNavigate,
        singleProd,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
