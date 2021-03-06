"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cart_controllers_1 = require("./cart.controllers");
const cartRoutes = express_1.default.Router();
//to add items to the cart
cartRoutes.post("/", cart_controllers_1.httpAddItemsToCart);
//Get cart Items
cartRoutes.get("/", cart_controllers_1.httpgetCartItems);
//detete cart items
cartRoutes.delete("/:id", cart_controllers_1.httpDeleteCartItem);
//delete all cart Items
cartRoutes.delete("/", cart_controllers_1.httpDeleteAllCartItems);
exports.default = cartRoutes;
