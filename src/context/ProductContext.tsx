import React, { useState, createContext } from "react";

interface productTypes {
  id: number;
  name: string;
  description: string;
}
interface contextTypes {
  products: productTypes;
  value: productTypes[]
}

const ProductContext = React.createContext<contextTypes | null>(null);

export const ContextProvider: React.FC<contextTypes> = ({ children }) => {
  const [products, setProducts] = useState<productTypes[]>([
    {
      id: 1,
      name: "Product1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quas sed numquam velit, aperiam porro magni, pariatur, voluptatum necessitatibus minima et quisquam. Enim fuga est nis",
    },
    {
      id: 2,
      name: "Product1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quas sed numquam velit, aperiam porro magni, pariatur, voluptatum necessitatibus minima et quisquam. Enim fuga est nis",
    },
    {
      id: 3,
      name: "Product1",
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
