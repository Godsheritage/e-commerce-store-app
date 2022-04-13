import cors from "cors";
import path from "path";
import helmet from "helmet";
import morgan from "morgan";
import express from "express";
import cartRoutes from "./routes/Cart Routes/cart.routes";
import productDataRoutes from "./routes/Product Routes/products.routes";


export const app = express();
//for cross origin resoursce sharing
app.use(helmet())

app.use(cors());

app.use(morgan("combined"));

app.use(express.json());

app.use("/productData", productDataRoutes);

app.use("/cartItems", cartRoutes);

app.use(express.static(path.join(__dirname, "..", "public ")));

app.get("/*", (req , res) => {
  res.sendFile(path.join(__dirname, "..", "public ", "index.html"));
});
