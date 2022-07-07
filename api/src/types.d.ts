type Cat = 'Remeras' | 'Camperas' | 'Chaquetas' | 'Buzos' | 'Ropa interior'

export interface postClothes {
    title: string,
    description: string,
    price: number,
    stock: number,
    image: string,
    categorie: Cat
}

export interface filter {
    page: number,
    title: string,
    cat: Cat
}
