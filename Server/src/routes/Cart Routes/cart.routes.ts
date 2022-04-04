import express from "express";
import {
  httpAddItemsToCart,
  httpDeleteCartItem,
  httpgetCartItems,
} from "./cart.controllers";

const cartRoutes = express.Router();

//Get cart Items
cartRoutes.get("/", httpgetCartItems);

//detete cart items
cartRoutes.delete("/:id", httpDeleteCartItem);

//to add items to the cart
cartRoutes.post("/", httpAddItemsToCart);

export default cartRoutes;
