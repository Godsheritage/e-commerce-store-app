import { RequestHandler } from "express";
import { cartItems } from "../../models/cart.models";

export const httpgetCartItems: RequestHandler = (req, res) => {
  return res.status(200).send(cartItems);
};

export const httpDeleteCartItem: RequestHandler = (req, res) => {
  const found = cartItems.findIndex((item: any) => item.id === req.params.id);

  if (found < 0) {
    return res.status(404).json({
      message: "item not found",
    });
  }

  cartItems.splice(found, 1);
  const items = cartItems.filter((items: any) => items.id !== req.params.id);
  return res.status(200).json(items);
};



export const httpAddItemsToCart: RequestHandler = (req, res) => {
  const newItem = req.body;

  cartItems.push(newItem);
  return res.status(201).json(newItem);
};
