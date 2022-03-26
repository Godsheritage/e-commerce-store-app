
export interface productTypes {
  id: string;
  name: string;
  image: string;
  description: string;
  price: number;
}

export interface itemProps {
    items: {
        id: string;
        name: string;
        image: string;
        description: string;
        price: number;
    };
    // prodNavigate : (items:productTypes) => void
}

export interface singleProdType   {
    id:string;
    name:string;
    image:string;
    description:string;
    price:number;
}

export interface contextTypes {
    products: productTypes[];
    addToCart: (items:productTypes) => void;
    cartItems: cartTypes[];
    removeItem: (id:string) => void
    sum:number;
    checkout:() => void;
    singleProd:any;
    fetchSingleProduct: (id:string) => void;
    fetchCartItems: () => void;
    isClicked:boolean;
    
}

export interface textType {
    text:string
}

export interface cartTypes {
    id:string;
    name:string;
    image:string;
    price:number;
}




// export interface proor {
    
//     onClick: (e: React.MouseEvent<HTMLElement>) => void;
// 'MouseEventHandler<HTMLButtonElement>