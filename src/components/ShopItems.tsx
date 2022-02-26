import React from "react";
import { itemProps } from "../shared/types";

const shopItems: React.FC<itemProps> = ({ items }) => {
  return (
    <div className="col-md-3">
      <div className="card p-3">
        <img src={items.image} className="card-img-top" alt="products" />
        <div className="card-body">
          <h5 className="card-title">{items.name}</h5>
          <p className="card-text">{items.description}</p>
          <p className  = 'itemsPrice' >{items.price}</p>
          <button id = {items.id} className="btn btn-primary">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default shopItems;
