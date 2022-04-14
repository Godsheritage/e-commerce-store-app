import cors from "cors";
import path from "path";
import helmet from "helmet";
import dotenv from "dotenv";
import morgan from "morgan";
import passport from "passport";
import { Strategy } from "passport-google-oauth20";
import express, { RequestHandler } from "express";
import cartRoutes from "./routes/Cart Routes/cart.routes";
import productDataRoutes from "./routes/Product Routes/products.routes";

export const app = express();

dotenv.config();

const config = {
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
};

const AUTH_OPTIONS = {
  clientID : config.CLIENT_ID,
  clientSecret : config.CLIENT_SECRET,
  callbackURL : '/auth/google/callback' 
}

const checkLoggedIn: RequestHandler = (req, res, next) => {
  const isLoggedIn = true;
  if (!isLoggedIn) {
    return res.status(400).json({
      error: "You must be logged in first",
    });
  }
  next();
};



app.use(helmet());
app.use(cors());
passport.use(new Strategy(AUTH_OPTIONS, ()))


app.use(passport.initialize());


//for cross origin resoursce sharing

app.use(morgan("combined"));

app.get("auth/google", (req, res) => {});

app.get("auth/google/callback", (req, res) => {});

app.use(express.json());

app.use("/productData", productDataRoutes);

app.use("/cartItems", cartRoutes);

app.use(express.static(path.join(__dirname, "..", "public ")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public ", "index.html"));
});
