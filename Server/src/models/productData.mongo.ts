import mongoose from "mongoose";



const productSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
});

const productDataDatabse = mongoose.model("product", productSchema);

export default productDataDatabse;
