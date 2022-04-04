import cartItemsDatabse from "./cart.mongo";

export const addItemToCart = async (newItem: any) => {
  cartItemsDatabse.create(newItem)
};

export const fetchCart = async () => {
  return await cartItemsDatabse.find({}, { __v: 0 });
};

export const deleteCartItem = async (ID : any) => {
    return await cartItemsDatabse.deleteOne(
        {id : ID }
    )

}
export const DeleteAllCartItems = async () => {
    return await cartItemsDatabse.deleteMany()

}

export const cartItems: any = [];
