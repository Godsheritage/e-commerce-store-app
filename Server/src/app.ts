import express from "express";
import path from "path";
import morgan from "morgan";
// import cors from 'cors'
import cartRoutes from "./routes/Cart Routes/cart.routes";
import productDataRoutes from "./routes/Product Routes/products.routes";

export const app = express();

app.use((req, res, next) => {
  res.append("Access-Control-Allow-Origin", ["*"]);
  res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.append("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// app.use(cors())
app.use(morgan("combined"));

app.use(express.json());

app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public ", "index.html"));
});

app.use("/productData", productDataRoutes);
app.use("/cartItems", cartRoutes);
