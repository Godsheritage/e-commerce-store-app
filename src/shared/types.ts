
export interface productTypes {
    id: number;
    name: string;
    image:string;
    description: string;
}
export interface contextTypes {
    products: productTypes[];
}

export interface itemProps {
    items: { id: number; name: string; image:string; description: string };
}