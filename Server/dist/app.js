"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const productData_models_1 = __importDefault(require("./models/productData.models"));
exports.app = (0, express_1.default)();
const cartItems = [];
// const singleProduct = [];
exports.app.use((req, res, next) => {
    res.append("Access-Control-Allow-Origin", ["*"]);
    res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.append("Access-Control-Allow-Headers", "Content-Type");
    next();
});
exports.app.use(express_1.default.json());
// to fetch the list of products
exports.app.get("/productData", (req, res) => {
    res.status(200).send(productData_models_1.default);
});
//to fetch each individual products
exports.app.get("/productData/:id", (req, res) => {
    const singleItem = productData_models_1.default.find((item) => item.id === req.params.id);
    res.status(200).json({
        message: singleItem,
    });
});
// to fetch the items in the cart
exports.app.get("/cartItems", (req, res) => {
    res.status(200).send(cartItems);
});
// to delete cart items from the database
exports.app.delete("/cartItems/:id", (req, res) => {
    const found = cartItems.findIndex((item) => item.id === req.params.id);
    if (found < 0) {
        return res.status(400).json({
            message: "item not found",
        });
    }
    cartItems.splice(found, 1);
    res.status(200).json({
        msg: `you have deleted the item with id: ${req.params.id}`,
        items: cartItems.filter((items) => items.id !== req.params.id),
    });
});
// to add cart items to the database
exports.app.post("/cartItems", (req, res) => {
    cartItems.push(req.body);
    res.status(201).json({
        youAdded: req.body,
    });
});
