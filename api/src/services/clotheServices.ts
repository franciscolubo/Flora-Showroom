import Clothe from '../database/models/Clothe'
import { filter, postClothes } from '../types'

const getTitleClothes = async (): Promise<string[]> => {
  try {
    const allClothes: postClothes[] = await Clothe.find()
    const titles: string[] = allClothes.map((clothe: postClothes) => { return clothe.title })

    return titles
  } catch (err) {
    const errorMessage = { status: 500, message: err }
    throw errorMessage
  }
}

const getCategorieClothes = async (): Promise<string[]> => {
  try {
    const allClothes: postClothes[] = await Clothe.find()
    const categories: string[] = allClothes.map((clothe: postClothes) => { return clothe.categorie })

    return categories
  } catch (err) {
    const errorMessage = { status: 500, message: err }
    throw errorMessage
  }
}

const getById = async (id: string): Promise<postClothes> => {
  try {
    const clothe: postClothes = await Clothe.findById(id) as postClothes

    return clothe
  } catch (err) {
    const errorMessage = { code: 500, message: err }
    throw errorMessage
  }
}

const pagesClothes = async (params: filter): Promise<{ pages: number, clothesFiltered: postClothes[] }> => {
  try {
    const { title, cat, page } = params

    let clothesFiltered: postClothes[] = await Clothe.find()

    if (title) {
      clothesFiltered = clothesFiltered.filter((cloth: postClothes) => cloth.title.toLowerCase().includes(title))
    }

    if (cat) {
      clothesFiltered = clothesFiltered.filter((cloth: postClothes) => cloth.categorie === cat)
    }

    const pages: number = Math.ceil(clothesFiltered.length / 2)
    if (page > 0) {
      clothesFiltered = clothesFiltered.slice(((page - 1) * 2), (page * 2))
    }

    return { pages: pages, clothesFiltered: clothesFiltered }
  } catch (err) {
    const errorMessage = { status: 500, message: err }
    throw errorMessage
  }
}

const postClothe = async (newClothe: postClothes, title: string): Promise<postClothes> => {
  try {
    const created = await Clothe.findOne({
      title
    })

    if (!created) {
      const errorMessage = { status: 'FAILED', message: 'Already exist this clothe' }
      throw errorMessage
    }
    const post = await Clothe.create(newClothe)
    console.log(post)
    return newClothe
  } catch (err) {
    const errorMessage = { status: 500, message: err }
    throw errorMessage
  }
}

const putClothe = async (id: string, updateClothe: postClothes): Promise<postClothes> => {
  try {
    await Clothe.findByIdAndUpdate(id, updateClothe)

    return updateClothe
  } catch (err) {
    const errorMessage = { status: 500, message: err }
    throw errorMessage
  }
}

const deleteClothe = async (id: string): Promise<void> => {
  try {
    await Clothe.findByIdAndDelete(id)
  } catch (err) {
    const errorMessage = { status: 500, message: err }
    throw errorMessage
  }
}

export default {
  getTitleClothes,
  getCategorieClothes,
  getById,
  pagesClothes,
  postClothe,
  putClothe,
  deleteClothe
}
