"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpGetSingleProduct = exports.httpGetAllProducts = void 0;
const productData_models_1 = require("../../models/productData.models");
const httpGetAllProducts = async (req, res) => {
    res.status(200).json(await (0, productData_models_1.fetchProductsFromMongo)());
};
exports.httpGetAllProducts = httpGetAllProducts;
const httpGetSingleProduct = async (req, res) => {
    const ID = req.params.id;
    const singleItem = await (0, productData_models_1.fetchSingleProductFromMongo)(ID);
    if (singleItem === null) {
        return res.status(404).json({
            error: `item with id of ${ID} was not found`,
        });
    }
    return res.status(200).json(singleItem);
};
exports.httpGetSingleProduct = httpGetSingleProduct;
