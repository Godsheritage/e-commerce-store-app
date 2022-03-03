import React, { useState, createContext } from "react";
import {
  productTypes,
  contextTypes,
  cartTypes,
  singleProdType,
} from "../shared/types";
import { useNavigate } from "react-router-dom";
import productData from "../data/productData";
import { v4 as uuidv4 } from "uuid";

const ProductContext = createContext<contextTypes | null>(null);

export const ContextProvider: React.FC<React.ReactNode> = ({ children }) => {
  const navigate = useNavigate();

  const [products] = useState<productTypes[]>(productData);

  // useEffect( () => {setProducts([])}, [products])

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

  const addToCart = (items: productTypes) => {
    const updCart: cartTypes = {
      id: uuidv4(),
      name: items.name,
      image: items.image,
      price: items.price,
    };

    setCartItems([updCart, ...cartItems]);
  };

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
