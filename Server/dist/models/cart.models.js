"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartItems = exports.DeleteAllCartItems = exports.deleteCartItem = exports.fetchCart = exports.addItemToCart = void 0;
const cart_mongo_1 = __importDefault(require("./cart.mongo"));
// to add an item to the database
const addItemToCart = async (newItem) => {
    cart_mongo_1.default.create(newItem);
};
exports.addItemToCart = addItemToCart;
// to fetch all the cart items
const fetchCart = async () => {
    return await cart_mongo_1.default.find({}, { __v: 0 });
};
exports.fetchCart = fetchCart;
// to delete an item in the cart
const deleteCartItem = async (ID) => {
    return await cart_mongo_1.default.deleteOne({ id: ID });
};
exports.deleteCartItem = deleteCartItem;
// to delete all the cartItems
const DeleteAllCartItems = async () => {
    return await cart_mongo_1.default.deleteMany();
};
exports.DeleteAllCartItems = DeleteAllCartItems;
exports.cartItems = [];
