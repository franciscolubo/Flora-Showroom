type Cat = 'Remeras' | 'Camperas' | 'Chaquetas' | 'Buzos' | 'Ropa interior'

export interface postClothes {
    title: string,
    description: string,
    price: number,
    stock: number,
    image: string,
    categorie: Cat,
    size: string[]
}

export interface filter {
    title: string,
    cat: Cat
    page: number,
}
