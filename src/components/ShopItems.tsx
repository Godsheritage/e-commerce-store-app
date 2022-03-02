import React, { useContext } from "react";
import { itemProps, contextTypes } from "../shared/types";
import ProductContext from "../context/ProductContext";
import { useNavigate } from "react-router-dom";

const ShopItems: React.FC<itemProps> = ({ items }) => {
  const { addToCart } = useContext(ProductContext) as contextTypes;

  const navigate = useNavigate();
  
  const prodNavigate = () => {
    navigate('/SingleProduct');
  };

  return (
    <div className="col-md-3">
      <div className="card p-1">
        <img src={items.image} className="card-img-top" alt="products"  onClick={ () =>  prodNavigate()} />
        <div className="card-body">
          <h5 className="card-title">{items.name}</h5>
          <p className="card-text">{items.description}</p>
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
