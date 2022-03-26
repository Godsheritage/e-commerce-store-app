"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cart_routes_1 = __importDefault(require("./routes/Cart Routes/cart.routes"));
const products_routes_1 = __importDefault(require("./routes/Product Routes/products.routes"));
exports.app = (0, express_1.default)();
exports.app.use((req, res, next) => {
    res.append("Access-Control-Allow-Origin", ["*"]);
    res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.append("Access-Control-Allow-Headers", "Content-Type");
    next();
});
exports.app.use(express_1.default.json());
exports.app.use('/productData', products_routes_1.default);
exports.app.use('/cartItems', cart_routes_1.default);
