import { v4 as uuidv4 } from 'uuid';



const productData = [
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
];

export default productData;
