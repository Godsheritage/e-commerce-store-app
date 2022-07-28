import React, { useContext } from "react";
import { contextTypes, productTypes } from "../shared/types";
import ProductContext from "../context/ProductContext";

const ShopItems: React.FC<any> = ({ items }) => {
  const { addToCart, fetchSingleProduct } = useContext(
    ProductContext
  ) as contextTypes;

  return (
    <div className="col-md-3 col-6">
      <div className="card p-1">
        <img
          src={items.image}
          className="card-img-top"
          alt="products"
          onClick={() => fetchSingleProduct(items.id)}
        />
        <div className="card-body">
          <h5 className="card-title">{items.title}</h5>
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
