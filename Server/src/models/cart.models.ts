import cartItemsDatabse from "./cart.mongo";

// to add an item to the database
export const addItemToCart = async (newItem: any) => {
  cartItemsDatabse.create(newItem)
};

// to fetch all the cart items
export const fetchCart = async () => {
  return await cartItemsDatabse.find({}, { __v: 0 });
};

// to delete an item in the cart
export const deleteCartItem = async (ID : any) => {
    return await cartItemsDatabse.deleteOne(
        {id : ID }
    )
}

// to delete all the cartItems
export const DeleteAllCartItems = async () => {
    return await cartItemsDatabse.deleteMany()
}

export const cartItems: any = [];
