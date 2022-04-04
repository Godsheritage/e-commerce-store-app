import { RequestHandler } from "express";
import { cartItems, DeleteAllCartItems } from "../../models/cart.models";
import {
  addItemToCart,
  fetchCart,
  deleteCartItem,
} from "../../models/cart.models";


export const httpAddItemsToCart: RequestHandler = async (req, res) => {
  const newItem = req.body;
  await addItemToCart(newItem);
  return res.status(201).json(newItem);
};

export const httpgetCartItems: RequestHandler = async (req, res) => {
  return res.status(200).json(await fetchCart());
};

export const httpDeleteCartItem: RequestHandler = async (req, res) => {
  const ID = req.params.id;

  const deletedItem = await deleteCartItem(ID);

  if (deletedItem.deletedCount === 0) {
    return res.status(404).json({
      error : "item not found",
    });
  }

  // const items = cartItems.filter((items: any) => items.id !== req.params.id);
  
  return res.status(200).json(await fetchCart());
};

export const httpDeleteAllCartItems: RequestHandler = async (req, res) => {
  // const ID = req.params.id;

  const deleted = await DeleteAllCartItems()


  if (deleted.deletedCount === 0) {
    return res.status(404).json({
      error : "no item was deleted",
    });
  }

  // const items = cartItems.filter((items: any) => items.id !== req.params.id);
  
  return res.status(200).json(await fetchCart());
};
