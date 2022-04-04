"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpDeleteAllCartItems = exports.httpDeleteCartItem = exports.httpgetCartItems = exports.httpAddItemsToCart = void 0;
const cart_models_1 = require("../../models/cart.models");
const cart_models_2 = require("../../models/cart.models");
// add an item to cart 
const httpAddItemsToCart = async (req, res) => {
    const newItem = req.body;
    await (0, cart_models_2.addItemToCart)(newItem);
    return res.status(201).json(newItem);
};
exports.httpAddItemsToCart = httpAddItemsToCart;
// fetch all cart items
const httpgetCartItems = async (req, res) => {
    return res.status(200).json(await (0, cart_models_2.fetchCart)());
};
exports.httpgetCartItems = httpgetCartItems;
// delete a single cart Item
const httpDeleteCartItem = async (req, res) => {
    const ID = req.params.id;
    const deletedItem = await (0, cart_models_2.deleteCartItem)(ID);
    if (deletedItem.deletedCount === 0) {
        return res.status(404).json({
            error: "item not found",
        });
    }
    return res.status(200).json(await (0, cart_models_2.fetchCart)());
};
exports.httpDeleteCartItem = httpDeleteCartItem;
// to delete all cart items
const httpDeleteAllCartItems = async (req, res) => {
    const deleted = await (0, cart_models_1.DeleteAllCartItems)();
    if (deleted.deletedCount === 0) {
        return res.status(404).json({
            error: "no item was deleted",
        });
    }
    return res.status(200).json(await (0, cart_models_2.fetchCart)());
};
exports.httpDeleteAllCartItems = httpDeleteAllCartItems;
