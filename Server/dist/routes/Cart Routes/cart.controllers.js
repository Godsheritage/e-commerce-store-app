"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpDeleteAllCartItems = exports.httpDeleteCartItem = exports.httpgetCartItems = exports.httpAddItemsToCart = void 0;
const cart_models_1 = require("../../models/cart.models");
const cart_models_2 = require("../../models/cart.models");
const httpAddItemsToCart = async (req, res) => {
    const newItem = req.body;
    await (0, cart_models_2.addItemToCart)(newItem);
    return res.status(201).json(newItem);
};
exports.httpAddItemsToCart = httpAddItemsToCart;
const httpgetCartItems = async (req, res) => {
    return res.status(200).json(await (0, cart_models_2.fetchCart)());
};
exports.httpgetCartItems = httpgetCartItems;
const httpDeleteCartItem = async (req, res) => {
    const ID = req.params.id;
    const deletedItem = await (0, cart_models_2.deleteCartItem)(ID);
    if (deletedItem.deletedCount === 0) {
        return res.status(404).json({
            error: "item not found",
        });
    }
    // const items = cartItems.filter((items: any) => items.id !== req.params.id);
    return res.status(200).json(await (0, cart_models_2.fetchCart)());
};
exports.httpDeleteCartItem = httpDeleteCartItem;
const httpDeleteAllCartItems = async (req, res) => {
    // const ID = req.params.id;
    const deleted = await (0, cart_models_1.DeleteAllCartItems)();
    if (deleted.deletedCount === 0) {
        return res.status(404).json({
            error: "no item was deleted",
        });
    }
    // const items = cartItems.filter((items: any) => items.id !== req.params.id);
    return res.status(200).json(await (0, cart_models_2.fetchCart)());
};
exports.httpDeleteAllCartItems = httpDeleteAllCartItems;
