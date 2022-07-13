export interface CLOTHES {
    title: string,
    description: string,
    price: number,
    stock: number,
    image: string
    categorie: string
};

export interface ClothesReducer {
    clothes: CLOTHES[],
    clotheId: CLOTHES,
    page: number,
    allPages: number,
}

export interface ClothesAndPages {
    clothes: CLOTHES[],
    allPages: number,
    page: number
}