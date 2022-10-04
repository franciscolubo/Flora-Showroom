import { CLOTHES } from "../types";

export default function formValidate({ title, image, price, stock, categorie, description, size, discount }: CLOTHES): boolean {
    if (title === '') return false
    if (image === '') return false
    if (price === 0 || price < 0) return false
    if (stock === 0 || stock < 0) return false
    if (categorie === '') return false
    if (description === '') return false
    if (size.length === 0) return false
    if (discount! < 0 || discount! > 100) {
        console.log(discount)
        return false
    }
    return true
}