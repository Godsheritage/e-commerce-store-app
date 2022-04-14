import cors from "cors";
import path from "path";
import helmet from "helmet";
import dotenv from "dotenv";
import morgan from "morgan";
import passport, { Profile } from "passport";
import express, { RequestHandler } from "express";
import cartRoutes from "./routes/Cart Routes/cart.routes";
import { Strategy, VerifyCallback } from "passport-google-oauth20";
import productDataRoutes from "./routes/Product Routes/products.routes";

export const app = express();

dotenv.config();

const config = {
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
};

const AUTH_OPTIONS: any = {
  clientID: config.CLIENT_ID,
  clientSecret: config.CLIENT_SECRET,
  callbackURL: "/auth/google/callback",
};

const checkLoggedIn: RequestHandler = (req, res, next) => {
  const isLoggedIn = true;
  if (!isLoggedIn) {
    return res.status(400).json({
      error: "You must be logged in first",
    });
  }
  next();
};

const verifyCallback = (
  accessToken: string,
  refreshToken: string,
  profile: Profile,
  done: VerifyCallback
) => {
  console.log(`the user profile is ${profile}`);
  done(null, profile);
};

app.use(helmet());

// app.use(
//   helmet.contentSecurityPolicy({
//     useDefaults: true,
//     directives: {
//       "img-src": ["'self'", "https: data:"]
//     }
//   })
// )

app.use(cors());
passport.use(new Strategy(AUTH_OPTIONS, verifyCallback));

app.use(passport.initialize());

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
    session: false,
  })
);

// logout function
app.get("/logout", (req, res) => {
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
