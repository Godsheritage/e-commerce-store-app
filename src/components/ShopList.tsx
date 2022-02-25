import React from "react";
import ShopItems from "./ShopItems";

const ShopList = () => {
//   interface itemTypes {
//     id: number;
//     name: string;
//     description: string;
//   }

  const products = [
    {
      id: 1,
      name: "Product1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quas sed numquam velit, aperiam porro magni, pariatur, voluptatum necessitatibus minima et quisquam. Enim fuga est nis",
    },
    {
      id: 2,
      name: "Product1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quas sed numquam velit, aperiam porro magni, pariatur, voluptatum necessitatibus minima et quisquam. Enim fuga est nis",
    },
    {
      id: 3,
      name: "Product1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quas sed numquam velit, aperiam porro magni, pariatur, voluptatum necessitatibus minima et quisquam. Enim fuga est nis",
    },
  ];

  return (
    <div className="row">
      {products.map((item) => 
        <ShopItems key = {item.id} items = {item} />
      )}
    </div>
  );
};

export default ShopList;
