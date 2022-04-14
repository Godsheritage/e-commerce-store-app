"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const https_1 = __importDefault(require("https"));
const app_1 = require("./app");
const mongoose_1 = __importDefault(require("mongoose"));
const PORT = process.env.PORT || 5000;
const MONGO_URL = "mongodb+srv://Ecommerce-api:Heritage4lyf@ecommercecluster.onpdt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const server = https_1.default.createServer({
    key: fs_1.default.readFileSync(path_1.default.join(__dirname, '..', 'key.pem')),
    cert: fs_1.default.readFileSync(path_1.default.join(__dirname, '..', 'cert.pem')),
}, app_1.app);
// to alert us when mongoose has connected to mongo db
mongoose_1.default.connection.once("open", () => {
    console.log("MongoDB Connection is ready");
});
// mongoose error handler
mongoose_1.default.connection.on("eror", (err) => {
    console.error(err);
});
const startServer = async () => {
    // await mongoose.connect(MONGO_URL);
    server.listen(PORT, () => {
        console.log(`server is listening at port ${PORT}...`);
    });
};
startServer();
