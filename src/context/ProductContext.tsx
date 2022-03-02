import React, { useState, createContext } from "react";
import {
  productTypes,
  contextTypes,
  cartTypes,
  singleProdType,
} from "../shared/types";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

const ProductContext = createContext<contextTypes | null>(null);

export const ContextProvider: React.FC<React.ReactNode> = ({ children }) => {
  const navigate = useNavigate();

  const [products] = useState<productTypes[]>([
    {
      id: uuidv4(),
      name: "Nike-Air Force",
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e777c881-5b62-4250-92a6-362967f54cca/air-force-1-07-womens-shoes-GCkPzr.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aut commodi voluptates illum! Dolorum blanditiis iste sit? Eos adipisci deleniti similique iusto placeat, architecto ipsam eligendi maxime tenetur obcaecati consequuntur repudiandae quod voluptates recusandae unde debitis consequatur delectus modi numquam! At laborum, a voluptatum dicta alias doloremque! Explicabo, rem adipisci?",

      price: 300,
    },
    {
      id: uuidv4(),
      name: "Adidas Yeezy",
      image:
        "https://cdn.shopify.com/s/files/1/0255/9429/8467/products/adidas-yeezy-500-taupe-light-GX3605_1_kxawvg_1800x1800.jpg?v=1623052526",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aut commodi voluptates illum! Dolorum blanditiis iste sit? Eos adipisci deleniti similique iusto placeat, architecto ipsam eligendi maxime tenetur obcaecati consequuntur repudiandae quod voluptates recusandae unde debitis consequatur delectus modi numquam! At laborum, a voluptatum dicta alias doloremque! Explicabo, rem adipisci?",

      price: 540,
    },
    {
      id: uuidv4(),
      name: "YEEZY Foam Runner",
      image:
        "https://www.ufs-federation.com/images/h/adidas%20yeezy%20foam%20runner-633kra.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aut commodi voluptates illum! Dolorum blanditiis iste sit? Eos adipisci deleniti similique iusto placeat, architecto ipsam eligendi maxime tenetur obcaecati consequuntur repudiandae quod voluptates recusandae unde debitis consequatur delectus modi numquam! At laborum, a voluptatum dicta alias doloremque! Explicabo, rem adipisci?",

      price: 1000,
    },
    {
      id: uuidv4(),
      name: "Nike Air Jordan",
      image:
        "https://myalpins.com/1293-thickbox_default/men-nike-air-jordan-1-mid-light-smoke-grey.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aut commodi voluptates illum! Dolorum blanditiis iste sit? Eos adipisci deleniti similique iusto placeat, architecto ipsam eligendi maxime tenetur obcaecati consequuntur repudiandae quod voluptates recusandae unde debitis consequatur delectus modi numquam! At laborum, a voluptatum dicta alias doloremque! Explicabo, rem adipisci?",

      price: 600,
    },
  ]);

  // useEffect( () => {setProducts([])}, [products])

  // setProducts([products]) as productTypes

  // const [singleItem, setSingleItem] = useState(items)

  const [singleProd, setSingleProd] = useState<singleProdType>({
    id: '5',
    name: "Heritage",
    image: "dddddddd",
    description: "ddddd",
    price: 3,
  });

  const prodNavigate = (items: productTypes) => {
    setSingleProd({
      id: items.id,
      name: items.name,
      image: items.image,
      description: items.description,
      price: items.price,
    });
    navigate("/SingleProduct");
  };

  const [cartItems, setCartItems] = useState<cartTypes[]>([]);

  const addToCart = (items: productTypes) => {
    const updCart: cartTypes = {
      id: uuidv4(),
      name: items.name,
      image: items.image,
      price: items.price,
    };

    setCartItems([updCart, ...cartItems]);
  };

  const sum = cartItems.reduce((total, curVal) => {
    return total + curVal.price!;
  }, 0);

  const checkout = () => {
    if (window.confirm("Are you sure you want to checkout?")) {
      setCartItems([]);
    }
  };

  const removeItem = (id: string) => {
    if (window.confirm("Are you sure you want to remove item from cart")) {
      setCartItems(cartItems.filter((items) => items.id !== id));
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        addToCart,
        cartItems,
        removeItem,
        sum,
        checkout,
        prodNavigate,
        singleProd,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
