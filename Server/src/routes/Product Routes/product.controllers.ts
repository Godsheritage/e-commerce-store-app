import { RequestHandler } from "express";
import productData, { fetchProductsFromMongo } from "../../models/productData.models";

export const httpGetAllProducts: RequestHandler = async (req, res) => {
  res.status(200).json( await fetchProductsFromMongo());
};

export const httpGetSingleProduct: RequestHandler = (req, res) => {
  const singleItem = productData.find((item) => item.id === req.params.id);
  return res.status(200).json(singleItem);
};
