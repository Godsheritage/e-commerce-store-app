import express from 'express'
import productData from './models/productData.models';



export const app = express();




const cartItems:any = [];
// const singleProduct = [];

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*'])
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.append('Access-Control-Allow-Headers', 'Content-Type')
  next()
});


app.use(express.json());

// to fetch the list of products

app.get("/productData", (req, res) => {
  res.status(200).send(productData);
});

//to fetch each individual products
app.get("/productData/:id", (req, res) => {
  const singleItem = productData.find((item) => item.id === req.params.id);
  res.status(200).json({
    message: singleItem,
  });
});

// to fetch the items in the cart

app.get("/cartItems", (req, res) => {
  res.status(200).send(cartItems);
});


// to delete cart items from the database

app.delete("/cartItems/:id", (req, res) => {
  const found = cartItems.findIndex((item: any) => item.id === req.params.id);

  if (found < 0) {
    return res.status(400).json({
      message: "item not found",
    });
  }

  cartItems.splice(found, 1);

  res.status(200).json({
    msg: `you have deleted the item with id: ${req.params.id}`,
    items: cartItems.filter((items:any) => items.id !== req.params.id),
  });
});

// to add cart items to the database

app.post("/cartItems", (req, res) => {
  cartItems.push(req.body);
  res.status(201).json({
    youAdded: req.body,
  });
});


