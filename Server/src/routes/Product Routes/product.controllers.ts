import { RequestHandler } from "express";
import {
  fetchProductsFromMongo,
  fetchSingleProductFromMongo,
} from "../../models/productData.models";

export const httpGetAllProducts: RequestHandler = async (req, res) => {
  res.status(200).json(await fetchProductsFromMongo());
};

export const httpGetSingleProduct: RequestHandler = async (req, res) => {
  const ID = req.params.id;
  const singleItem = await fetchSingleProductFromMongo(ID);
  if (singleItem === null) {
    return res.status(404).json({
      error: `item with id of ${ID} was not found`,
    });
  }
  return res.status(200).json(singleItem);
};
