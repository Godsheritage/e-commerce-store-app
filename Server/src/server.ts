import fs from 'fs'
import path from 'path';
import https from "https";
import { app } from "./app";
import mongoose from "mongoose";



const PORT = process.env.PORT || 5000;

const MONGO_URL =
  "mongodb+srv://Ecommerce-api:Heritage4lyf@ecommercecluster.onpdt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const server = https.createServer({
 key : fs.readFileSync(path.join(__dirname , '..' , 'key.pem')),
 cert : fs.readFileSync(path.join(__dirname , '..' , 'cert.pem')),
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
