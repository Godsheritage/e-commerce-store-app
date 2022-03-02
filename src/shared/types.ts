export interface productTypes {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
}

export interface itemProps {
    items: {
        id: number;
        name: string;
        image: string;
        description: string;
        price: number;
    };
    prodNavigate : (items:productTypes) => void
}

export interface contextTypes {
    products: productTypes[];
    addToCart: (items:productTypes) => void;
    cartItems: cartTypes[];
    removeItem: (id:number) => void
    sum:number;
    checkout:() => void;
}

export interface textType {
    text:string
}

export interface cartTypes {
    id:number;
    name:string;
    image:string;
    price:number;
}

// export interface  {
    

// }


// export interface proor {
    
//     onClick: (e: React.MouseEvent<HTMLElement>) => void;
// 'MouseEventHandler<HTMLButtonElement>