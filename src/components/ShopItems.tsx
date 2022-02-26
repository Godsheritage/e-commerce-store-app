import React, { useContext } from "react";
import { itemProps, contextTypes } from "../shared/types";
import ProductContext from "../context/ProductContext";
import Button from "../shared/Button";


const ShopItems: React.FC<itemProps> = ({ items }) => {
  const { addToCart } = useContext(ProductContext) as contextTypes;

  return (


  
    <div className="col-md-3">
      <div className="card p-3">
        <img src={items.image} className="card-img-top" alt="products" />
        <div className="card-body">
          <h5 className="card-title">{items.name}</h5>
          <p className="card-text">{items.description}</p>
          <p className="itemsPrice">{items.price}</p>
          <Button text = 'Add to Cart' onClick = {() => addToCart(items)} />
        </div>
      </div>
    </div>
  );
};

export default ShopItems;
