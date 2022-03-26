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
        return res.status(400).json({
            message: "item not found",
        });
    }
    cart_models_1.cartItems.splice(found, 1);
    return res.status(200).json({
        msg: `you have deleted the item with id: ${req.params.id}`,
        items: cart_models_1.cartItems.filter((items) => items.id !== req.params.id),
    });
};
exports.httpDeleteCartItem = httpDeleteCartItem;
const httpAddItemsToCart = (req, res) => {
    const newItem = req.body;
    cart_models_1.cartItems.push(newItem);
    return res.status(201).json({
        youAdded: req.body,
    });
};
exports.httpAddItemsToCart = httpAddItemsToCart;
