import cartItemsDatabse from "./cart.mongo";

const addItemToCart = async (newItem: any) => {
  cartItemsDatabse.updateOne(
    {
      _id: newItem._id,
    },
    newItem,
    { upsert: true }
  );
};

export const fetchCart = async () => {
  return await cartItemsDatabse.find({}, { __v: 0 });
};

export const cartItems: any = [];
