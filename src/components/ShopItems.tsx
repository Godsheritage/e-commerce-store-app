import React from "react";
import { itemProps } from "../shared/types";


const shopItems: React.FC<itemProps> = ({ items }) => {
  return (
    <div className = 'col-md-4' >
      <div className="card p-3">
        <img src={items.image} alt = 'products'/>
        <h1 className="card-title">{items.name}</h1>
        <p className="card-text">{items.description}</p>
        <button className="btn btn-primary">Add to cart</button>
      </div>
    </div>
  );
};

export default shopItems;
