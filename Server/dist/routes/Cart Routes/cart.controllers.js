"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpAddItemsToCart = exports.httpDeleteCartItem = exports.httpgetCartItems = void 0;
const cart_models_1 = require("../../models/cart.models");
const httpgetCartItems = (req, res) => {
    return res.status(200).send(cart_models_1.cartItems);
};
exports.httpgetCartItems = httpgetCartItems;
const httpDeleteCartItem = (req, res) => {
    const found = cart_models_1.cartItems.findIndex((item) => item.id === req.params.id);
    if (found < 0) {
        return res.status(404).json({
            message: "item not found",
        });
    }
    cart_models_1.cartItems.splice(found, 1);
    const items = cart_models_1.cartItems.filter((items) => items.id !== req.params.id);
    return res.status(200).json(items);
};
exports.httpDeleteCartItem = httpDeleteCartItem;
const httpAddItemsToCart = (req, res) => {
    const newItem = req.body;
    cart_models_1.cartItems.push(newItem);
    return res.status(201).json(newItem);
};
exports.httpAddItemsToCart = httpAddItemsToCart;
