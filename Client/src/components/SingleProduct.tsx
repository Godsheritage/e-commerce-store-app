import { useContext } from "react";
import ProductContext from "../context/ProductContext";
import { contextTypes } from "../shared/types";

const SingleProduct = () => {
  const { singleProd, addToCart } = useContext(ProductContext) as contextTypes;

  return (
    <div className="row">
      <div className="col-md-6">
        <img src={singleProd.image} alt="singleprod1" className="img-fluid" />
      </div>
      <div className="col-md-6 d-flex flex-column justify-content-evenly">
        <h1>{singleProd.name}</h1>
        <p>{singleProd.description}</p>
        <p className="btn btn-light col-md-2 ">${singleProd.price}</p>
        <button
          className="btn btn-danger"
          onClick={() => addToCart(singleProd)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
