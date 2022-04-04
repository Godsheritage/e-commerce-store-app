import mongoose from "mongoose";

//TODO create a product data schema adn a model

const cartSchema = new mongoose.Schema({
    id :  {type : String, required : true},
    name :  {type : String, required : true},
    image :  {type : String, required : true},
    price :  {type : Number, required : true}
})

const cartItemsDatabse = mongoose.model('cartItem', cartSchema)

export default cartItemsDatabse