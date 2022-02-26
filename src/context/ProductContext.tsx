import React, { useState, createContext } from "react";
import { productTypes, contextTypes } from "../shared/types";


const ProductContext = createContext<contextTypes | null>(null);

export const ContextProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [products, setProducts] = useState<productTypes[]>([
    {
      id: 1,
      name: "Nike-Air Force",
      image:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/21/978685/1.jpg?4651',
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quas sed numquam velit",
      price:'$300',

    },
    {
      id: 2,
      name: "Nike-Air Force",
      image:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/21/978685/1.jpg?4651',
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quas sed numquam velit",
      price:'$300',

    },
    {
      id: 3,
      name: "Nike-Air Force",
      image:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/21/978685/1.jpg?4651',
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quas sed numquam velit",
      price:'$300',

    },
    {
      id: 4,
      name: "Nike-Air Force",
      image:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/21/978685/1.jpg?4651',
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quas sed numquam velit",
      price:'$300',
    },
  ]);

  return (
    <ProductContext.Provider value = {{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
