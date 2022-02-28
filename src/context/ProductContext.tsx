import React, { useState, createContext } from "react";
import { productTypes, contextTypes, cartTypes } from "../shared/types";

const ProductContext = createContext<contextTypes | null>(null);

export const ContextProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [products, setProducts] = useState<productTypes[]>([
    {
      id: 1,
      name: "Nike-Air Force",
      image:
        "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/21/978685/1.jpg?4651",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quas sed numquam velit",
      price: 300,
    },
    {
      id: 2,
      name: "Adidas Yeezy",
      image:
        "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/21/978685/1.jpg?4651",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quas sed numquam velit",
      price: 540,
    },
    {
      id: 3,
      name: "YEEZY Foam Runner",
      image:
        "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/21/978685/1.jpg?4651",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quas sed numquam velit",
      price: 1000,
    },
    {
      id: 4,
      name: "Nike Air Jordan",
      image:
        "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/21/978685/1.jpg?4651",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quas sed numquam velit",
      price: 600,
    },
  ]);

  const [cartItems, setCartItems] = useState<cartTypes[]>([]);

  const addToCart = (items: productTypes) => {
    const updCart: cartTypes = {
      id: items.id,
      name: items.name,
      image: items.image,
      price: items.price,
    };

    setCartItems([updCart, ...cartItems]);
  };

  const removeItem = (id: number) => {
    // cartItems.filter( items => items.id !== id )

    if (window.confirm("Are you sure you want to remove item from cart")) {
      setCartItems(cartItems.filter((items) => items.id !== id));
    }
  };

  return (
    <ProductContext.Provider
      value={{ products, addToCart, cartItems, removeItem }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
