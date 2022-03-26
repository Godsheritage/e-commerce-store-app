import express from "express";
import cartRoutes from "./routes/Cart Routes/cart.routes";
import productDataRoutes from "./routes/Product Routes/products.routes";

export const app = express();

app.use((req, res, next) => {
  res.append("Access-Control-Allow-Origin", ["*"]);
  res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.append("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(express.json());

app.use('/productData', productDataRoutes)
app.use('/cartItems', cartRoutes )

