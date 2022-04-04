import express from "express";
import {
  httpAddItemsToCart,
  httpDeleteCartItem,
  httpgetCartItems,
  httpDeleteAllCartItems
} from "./cart.controllers";

const cartRoutes = express.Router();

//to add items to the cart
cartRoutes.post("/", httpAddItemsToCart);

//Get cart Items
cartRoutes.get("/", httpgetCartItems);

//detete cart items
cartRoutes.delete("/:id", httpDeleteCartItem);

//delete all cart Items
cartRoutes.delete("/", httpDeleteAllCartItems);




export default cartRoutes;
