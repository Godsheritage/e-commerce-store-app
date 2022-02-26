import React, { useContext } from "react";
import ShopItems from "./ShopItems";
import ProductContext from "../context/ProductContext";
import { contextTypes } from "../shared/types";


const ShopList: React.FC = () => {
  const { products } = useContext(ProductContext) as contextTypes;

  return (
    <div className="row">
      {products.map((item) => (
        <ShopItems key={item.id} items={item} />
      ))}
    </div>
  );
};

export default ShopList;
