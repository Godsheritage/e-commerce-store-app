"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_controllers_1 = require("./product.controllers");
const productDataRoutes = express_1.default.Router();
//Get all Products
productDataRoutes.get("/", product_controllers_1.httpGetAllProducts);
//to fetch each individual products
productDataRoutes.get("/:id", product_controllers_1.httpGetSingleProduct);
exports.default = productDataRoutes;
