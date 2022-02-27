export interface productTypes {
  id: number;
  name: string;
  image: string;
  description: string;
  price: string;
}

export interface itemProps {
    items: {
        id: number;
        name: string;
        image: string;
        description: string;
        price: string;
    };
}

export interface contextTypes {
    products: productTypes[];
    addToCart: (items:productTypes) => void;
    cartItems: cartTypes[];
    removeItem: (id:number) => void
}

export interface textType {
    text:string
    // onClick: (handleClick: void) => void;
}

export interface cartTypes {
    id:number;
    name:string;
    image:string;
    price:string;
}




// export interface proor {
    
//     onClick: (e: React.MouseEvent<HTMLElement>) => void;
// 'MouseEventHandler<HTMLButtonElement>