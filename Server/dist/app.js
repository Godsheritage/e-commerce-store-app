"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const helmet_1 = __importDefault(require("helmet"));
const dotenv_1 = __importDefault(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
const express_1 = __importDefault(require("express"));
const cart_routes_1 = __importDefault(require("./routes/Cart Routes/cart.routes"));
const products_routes_1 = __importDefault(require("./routes/Product Routes/products.routes"));
exports.app = (0, express_1.default)();
dotenv_1.default.config();
const config = {
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET,
};
exports.app.use((0, helmet_1.default)());
//for cross origin resoursce sharing
exports.app.use((0, cors_1.default)());
const checkLoggedIn = () => {
    const isLoggedIn = true;
};
exports.app.use((0, morgan_1.default)("combined"));
exports.app.get('auth.google', (req, res) => { });
exports.app.get('auth.google/callback', (req, res) => { });
exports.app.use(express_1.default.json());
exports.app.use("/productData", products_routes_1.default);
exports.app.use("/cartItems", cart_routes_1.default);
exports.app.use(express_1.default.static(path_1.default.join(__dirname, "..", "public ")));
exports.app.get("/*", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "..", "public ", "index.html"));
});
