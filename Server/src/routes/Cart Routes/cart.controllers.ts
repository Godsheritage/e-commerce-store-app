import { RequestHandler } from "express";
import { cartItems, DeleteAllCartItems } from "../../models/cart.models";
import {
  addItemToCart,
  fetchCart,
  deleteCartItem,
} from "../../models/cart.models";

// add an item to cart 
export const httpAddItemsToCart: RequestHandler = async (req, res) => {
  const newItem = req.body;
  await addItemToCart(newItem);
  return res.status(201).json(newItem);
};

// fetch all cart items
export const httpgetCartItems: RequestHandler = async (req, res) => {
  return res.status(200).json(await fetchCart());
};

// delete a single cart Item
export const httpDeleteCartItem: RequestHandler = async (req, res) => {
  const ID = req.params.id;

  const deletedItem = await deleteCartItem(ID);

  if (deletedItem.deletedCount === 0) {
    return res.status(404).json({
      error : "item not found",
    });
  }
  
  return res.status(200).json(await fetchCart());
};

// to delete all cart items
export const httpDeleteAllCartItems: RequestHandler = async (req, res) => {
  const deleted = await DeleteAllCartItems()

  if (deleted.deletedCount === 0) {
    return res.status(404).json({
      error : "no item was deleted",
    });
  }
  
  return res.status(200).json(await fetchCart());
};
