import mongoose from "mongoose";


const cartSchema = new mongoose.Schema({
    id :  {type : String, required : true},
    name :  {type : String, required : true},
    image :  {type : String, required : true},
    price :  {type : Number, required : true}
})

const cartItemsDatabse = mongoose.model('cartItem', cartSchema)

export default cartItemsDatabse


//Todo setup the databse
//Todo set up database crud functiions
