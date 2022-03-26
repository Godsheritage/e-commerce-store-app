"use strict";
// todo add and initialize typescript to backend server
// todo implement the mvc pattern 
// todo set up the application after best practices
// todo seperate server codde and express middleware
// todo hostserver the front end with the server 
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const app_1 = require("./app");
const PORT = process.env.PORT || 5000;
const server = http_1.default.createServer(app_1.app);
server.listen(PORT, () => {
    console.log(`server is listening at port ${PORT}...`);
});
