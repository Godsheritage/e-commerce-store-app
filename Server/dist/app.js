"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
const passport_1 = __importDefault(require("passport"));
const express_1 = __importDefault(require("express"));
const cookie_session_1 = __importDefault(require("cookie-session"));
const cart_routes_1 = __importDefault(require("./routes/Cart Routes/cart.routes"));
const passport_google_oauth20_1 = require("passport-google-oauth20");
const products_routes_1 = __importDefault(require("./routes/Product Routes/products.routes"));
exports.app = (0, express_1.default)();
dotenv_1.default.config();
const config = {
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET,
};
const AUTH_OPTIONS = {
    clientID: config.CLIENT_ID,
    clientSecret: config.CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
};
const checkLoggedIn = (req, res, next) => {
    const isLoggedIn = true;
    if (!isLoggedIn) {
        return res.status(400).json({
            error: "You must be logged in first",
        });
    }
    next();
};
const verifyCallback = (accessToken, refreshToken, profile, done) => {
    console.log(`the user profile is ${profile}`);
    done(null, profile);
};
exports.app.use((0, cors_1.default)());
passport_1.default.use(new passport_google_oauth20_1.Strategy(AUTH_OPTIONS, verifyCallback));
exports.app.use((0, cookie_session_1.default)({
    name: 'session',
    maxAge: 24 * 60 * 60 * 1000,
    keys: 
}));
exports.app.use(passport_1.default.initialize());
//for cross origin resoursce sharing
exports.app.use((0, morgan_1.default)("combined"));
exports.app.get("/auth/google", passport_1.default.authenticate("google", {
    scope: ["email", "profile"],
}));
exports.app.get("/auth/google/callback", passport_1.default.authenticate("google", {
    failureRedirect: "/failure",
    successRedirect: "/",
    session: false,
}));
// logout function
exports.app.get("/auth/logout", (req, res) => {
    req.logOut();
    return res.status(200).redirect("/");
});
exports.app.get("/failure", (req, res) => {
    res.status(400).json({
        error: "failed to login",
    });
});
exports.app.use(express_1.default.json());
exports.app.use("/productData", products_routes_1.default);
exports.app.use("/cartItems", cart_routes_1.default);
exports.app.use(express_1.default.static(path_1.default.join(__dirname, "..", "public ")));
exports.app.get("/*", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "..", "public ", "index.html"));
});
