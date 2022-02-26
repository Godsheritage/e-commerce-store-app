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
    cartItems: productTypes[];
}

export interface textType {
    text:string
    onClick: () => void;
}




// export interface proor {
    
//     onClick: (e: React.MouseEvent<HTMLElement>) => void;
// 'MouseEventHandler<HTMLButtonElement>