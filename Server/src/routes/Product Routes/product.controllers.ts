import { RequestHandler } from "express";
import productData from "../../models/productData.models";

export const httpGetAllProducts: RequestHandler = (req, res) => {
  res.status(200).send(productData);
};

export const httpGetSingleProduct: RequestHandler = (req, res) => {
  const singleItem = productData.find((item) => item.id === req.params.id);
  return res.status(200).json({
    message: singleItem,
  });
};
