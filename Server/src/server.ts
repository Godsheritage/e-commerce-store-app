import fs from 'fs'
import https from "https";

import mongoose from "mongoose";

import { app } from "./app";

const PORT = process.env.PORT || 5000;

const MONGO_URL =
  "mongodb+srv://Ecommerce-api:Heritage4lyf@ecommercecluster.onpdt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const server = https.createServer({
 key : fs.readFileSync('key.pem'),
 cert : fs.readFileSync('cert.pem')
}, app);

// to alert us when mongoose has connected to mongo db
mongoose.connection.once("open", () => {
  console.log("MongoDB Connection is ready");
});

// mongoose error handler
mongoose.connection.on("eror", (err) => {
  console.error(err);
});

const startServer = async () => {
  await mongoose.connect(MONGO_URL);

  server.listen(PORT, () => {
    console.log(`server is listening at port ${PORT}...`);
  });
};

startServer();
