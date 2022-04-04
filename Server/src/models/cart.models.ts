import cartItemsDatabse from "./cart.mongo"



const addItemToCart = async () => {}



export const fetchCart = async () => {
   return await cartItemsDatabse.find({}, { "__v" : 0, "_id" : 0})
}






export const cartItems : any = []



