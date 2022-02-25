import React, {useContext} from "react";
import ShopItems from "./ShopItems";
import ProductContext from "../context/ProductContext";

const ShopList = () => {

    const products = useContext(ProductContext)
//   interface itemTypes {
//     id: number;
//     name: string;
//     description: string;
//   }

  

  return (
    <div className="row">
      {products.map((item) => 
        <ShopItems key = {item.id} items = {item} />
      )}
    </div>
  );
};

export default ShopList;
