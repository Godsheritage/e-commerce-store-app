import React, { useContext } from "react";
import ShopItems from "./ShopItems";
import ProductContext from "../context/ProductContext";
import { contextTypes } from "../shared/types";
import Spinner from "../shared/Spinner";


const ShopList = () => {
  const { products, isLoading } = useContext(ProductContext) as contextTypes;

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="row g-5">
      {products.map((item) => (
        <ShopItems key={item.id} items={item} />
      ))}
    </div>
  );
};

export default ShopList;
