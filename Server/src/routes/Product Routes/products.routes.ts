import express from "express";
import {
  httpGetAllProducts,
  httpGetSingleProduct,
} from "./product.controllers";

const productDataRoutes = express.Router();

//Get all Products
productDataRoutes.get("/", httpGetAllProducts);
//to fetch each individual products
productDataRoutes.get("/:id", httpGetSingleProduct);

export default productDataRoutes;
