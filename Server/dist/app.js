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
//options for the API config
const config = {
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET,
    COOKIE_KEY_1: process.env.COOKIE_KEY_1,
    COOKIE_KEY_2: process.env.COOKIE_KEY_2,
};
// options for passport authentication
const AUTH_OPTIONS = {
    clientID: config.CLIENT_ID,
    clientSecret: config.CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
};
//passport  - google oauth verify callback function
const verifyCallback = (accessToken, refreshToken, profile, done) => {
    console.log(`the user profile is ${profile}`);
    done(null, profile);
};
exports.app.use((0, cors_1.default)());
passport_1.default.use(new passport_google_oauth20_1.Strategy(AUTH_OPTIONS, verifyCallback));
//to save the session to the cookie
passport_1.default.serializeUser((user, done) => {
    done(null, user.id);
});
// to read the session from the cookie
passport_1.default.deserializeUser((id, done) => {
    done(null, id);
});
exports.app.use((0, cookie_session_1.default)({
    name: "session",
    maxAge: 24 * 60 * 60 * 1000,
    keys: [config.COOKIE_KEY_1, config.COOKIE_KEY_2],
}));
exports.app.use(passport_1.default.initialize());
exports.app.use(passport_1.default.session());
const checkLoggedIn = (req, res, next) => {
    const isLoggedIn = req.isAuthenticated() && req.user;
    if (!isLoggedIn) {
        return res.status(400).json({
            error: "You must be logged in first",
        });
    }
    next();
};
//for cross origin resoursce sharing
exports.app.use((0, morgan_1.default)("combined"));
exports.app.get("/auth/google", passport_1.default.authenticate("google", {
    scope: ["email", "profile"],
}));
exports.app.get("/auth/google/callback", passport_1.default.authenticate("google", {
    failureRedirect: "/failure",
    successRedirect: "/",
    session: true,
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
