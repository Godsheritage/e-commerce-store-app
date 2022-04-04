"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
//TODO create a product data schema adn a model
const cartSchema = new mongoose_1.default.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true }
});
const cartItems = mongoose_1.default.model('cartItem', cartSchema);
exports.default = cartItems;
