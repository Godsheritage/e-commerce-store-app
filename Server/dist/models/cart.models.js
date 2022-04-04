"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartItems = exports.fetchCart = void 0;
const cart_mongo_1 = __importDefault(require("./cart.mongo"));
const addItemToCart = async (newItem) => {
    cart_mongo_1.default.updateOne({
        id: newItem.id,
    }, newItem, { upsert: true });
};
const fetchCart = async () => {
    return await cart_mongo_1.default.find({}, { __v: 0 });
};
exports.fetchCart = fetchCart;
exports.cartItems = [];
