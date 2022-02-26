export interface productTypes {
  id: number;
  name: string;
  image: string;
  description: string;
  price: string;
}
export interface contextTypes {
  products: productTypes[];
}

export interface itemProps {
  items: {
    id: number | string | undefined;
    name: string;
    image: string;
    description: string;
    price: string;
  };
}
