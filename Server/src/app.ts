import cors from "cors";
import path from "path";
import helmet from "helmet";
import dotenv from "dotenv";
import morgan from "morgan";
import passport, { Profile } from "passport";
import express, { RequestHandler } from "express";
import cookiSession from "cookie-session";
import cartRoutes from "./routes/Cart Routes/cart.routes";
import { Strategy, VerifyCallback } from "passport-google-oauth20";
import productDataRoutes from "./routes/Product Routes/products.routes";

export const app = express();

dotenv.config();

//options for the API config
const config: any = {
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
  COOKIE_KEY_1: process.env.COOKIE_KEY_1,
  COOKIE_KEY_2: process.env.COOKIE_KEY_2,
};

// options for passport authentication
const AUTH_OPTIONS: any = {
  clientID: config.CLIENT_ID,
  clientSecret: config.CLIENT_SECRET,
  callbackURL: "/auth/google/callback",
};

//passport  - google oauth verify callback function
const verifyCallback = (
  accessToken: string,
  refreshToken: string,
  profile: Profile,
  done: VerifyCallback
) => {
  console.log(`the user profile is ${profile}`);
  done(null, profile);
};

app.use(cors());
passport.use(new Strategy(AUTH_OPTIONS, verifyCallback));

//to save the session to the cookie
passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

// to read the session from the cookie
passport.deserializeUser((id: any, done) => {
  done(null, id);
});

app.use(
  cookiSession({
    name: "session",
    maxAge: 24 * 60 * 60 * 1000,
    keys: [config.COOKIE_KEY_1, config.COOKIE_KEY_2],
  })
);

app.use(passport.initialize());
app.use(passport.session());

const checkLoggedIn: RequestHandler = (req, res, next) => {
  const isLoggedIn = req.isAuthenticated() && req.user;
  if (!isLoggedIn) {
    return res.status(400).json({
      error: "You must be logged in first",
    });
  }
  next();
};

//for cross origin resoursce sharing

app.use(morgan("combined"));

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["email", "profile"],
  })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/failure",
    successRedirect: "/",
    session: true,
  })
);

// logout function
app.get("/auth/logout", (req, res) => {
  req.logOut();

  return res.status(200).redirect("/");
});

app.get("/failure", (req, res) => {
  res.status(400).json({
    error: "failed to login",
  });
});

app.use(express.json());

app.use("/productData", productDataRoutes);

app.use("/cartItems", cartRoutes);

app.use(express.static(path.join(__dirname, "..", "public ")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public ", "index.html"));
});
