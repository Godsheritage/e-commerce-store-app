"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpGetSingleProduct = exports.httpGetAllProducts = void 0;
const productData_models_1 = __importDefault(require("../../models/productData.models"));
const httpGetAllProducts = (req, res) => {
    res.status(200).send(productData_models_1.default);
};
exports.httpGetAllProducts = httpGetAllProducts;
const httpGetSingleProduct = (req, res) => {
    const singleItem = productData_models_1.default.find((item) => item.id === req.params.id);
    return res.status(200).json(singleItem);
};
exports.httpGetSingleProduct = httpGetSingleProduct;
