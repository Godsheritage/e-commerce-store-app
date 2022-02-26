import React, { useContext } from "react";
import ShopItems from "./ShopItems";
import ProductContext from "../context/ProductContext";

interface itemTypes {
  id: number;
  name: string;
  description: string;
}

const ShopList: React.FC = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="row">
      {products.map((item) => (
        <ShopItems key={item.id} items={item} />
      ))}
    </div>
  );
};

export default ShopList;
