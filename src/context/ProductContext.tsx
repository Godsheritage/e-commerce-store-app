import React, { useState, createContext } from "react";
import { productTypes, contextTypes } from "../shared/types";


const ProductContext = createContext<contextTypes | null>(null);

export const ContextProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [products, setProducts] = useState<productTypes[]>([
    {
      id: 1,
      name: "Product1",
      image:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/21/978685/1.jpg?4651',
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quas sed numquam velit, aperiam porro magni, pariatur, voluptatum necessitatibus minima et quisquam. Enim fuga est nis",
    },
    {
      id: 2,
      name: "Product1",
      image:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/21/978685/1.jpg?4651',
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quas sed numquam velit, aperiam porro magni, pariatur, voluptatum necessitatibus minima et quisquam. Enim fuga est nis",
    },
    {
      id: 3,
      name: "Product1",
      image:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/21/978685/1.jpg?4651',
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quas sed numquam velit, aperiam porro magni, pariatur, voluptatum necessitatibus minima et quisquam. Enim fuga est nis",
    },
  ]);

  return (
    <ProductContext.Provider value = {{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
