export interface CLOTHES {
    _id?: string,
    title: string,
    description?: string,
    discount?: number,
    price: number,
    stock: number,
    image: string[],
    categorie: string,
    size: string[]
};

export interface CATEGORIES {
    categories: string[]
}

export interface ClothesReducer {
    clothes: CLOTHES[],
    clotheId: CLOTHES,
    categories: string[],
    page: number,
    allPages: number,
    cat: string,
    allClothes: number
}

export interface ClothesAndPages {
    clothes: CLOTHES[],
    allPages: number,
    page: number,
    cat: string,
    allClothes: number
}

export interface stateClothes {
    clothes: ClothesReducer
}

export interface DATA {
    data: CLOTHES
}