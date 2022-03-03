import React, { useContext } from "react";
import { itemProps, contextTypes } from "../shared/types";
import ProductContext from "../context/ProductContext";

const ShopItems: React.FC<itemProps> = ({ items }) => {
  const { addToCart, prodNavigate } = useContext(
    ProductContext
  ) as contextTypes;

  return (
    <div className="col-md-3 col-sm-6">
      <div className="card p-1">
        <img
          src={items.image}
          className="card-img-top"
          alt="products"
          onClick={() => prodNavigate(items)}
        />
        <div className="card-body">
          <h5 className="card-title">{items.name}</h5>
          <p className="itemsPrice">${items.price}</p>
          <button className="btn btn-primary" onClick={() => addToCart(items)}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopItems;
