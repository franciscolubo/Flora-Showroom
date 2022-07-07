export interface CLOTHES {
    id: string,
    title: string,
    description: string,
    price: number,
    stock: number,
    image: string
};

export interface ClothesReducer {
    clothes: CLOTHES[],
    page: number,
    allPages: number,
}