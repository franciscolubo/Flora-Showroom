import Clothe from '../database/models/Clothe'
import { Cat, postClothes } from '../types'

const getTitleClothes = async (): Promise<string[]> => {
  try {
    const allClothes: postClothes[] = await Clothe.find()
    const titles: string[] = allClothes.map((clothe: postClothes) => { return clothe.title })

    return titles
  } catch (error) {
    const errorMessage = { status: 500, error }
    throw errorMessage
  }
}

const getCategorieClothes = async (): Promise<string[]> => {
  try {
    const allClothes: postClothes[] = await Clothe.find()
    const categories: string[] = allClothes.map((clothe: postClothes) => { return clothe.categorie })

    return categories
  } catch (error) {
    const errorMessage = { status: 500, error }
    throw errorMessage
  }
}

const getById = async (id: string): Promise<postClothes> => {
  try {
    const clothe: postClothes = await Clothe.findById(id) as postClothes

    return clothe
  } catch (error) {
    const errorMessage = { status: 500, error }
    throw errorMessage
  }
}

const pagesClothes = async ({ title, cat, page }: any): Promise<{ pages: number, clothesFiltered: postClothes[], cat: Cat, allClothes: number }> => {
  try {
    let clothesFiltered: postClothes[] = await Clothe.find()
    const clothesPerPage = 4
    if (title) {
      clothesFiltered = clothesFiltered.filter((cloth: postClothes) => cloth.title.toLowerCase().includes(title))
    }

    if (cat) {
      clothesFiltered = clothesFiltered.filter((cloth: postClothes) => cloth.categorie === cat)
    }
    const allClothes = clothesFiltered.length
    const pages: number = Math.ceil(clothesFiltered.length / clothesPerPage)
    if (page! > 0) {
      clothesFiltered = clothesFiltered.slice(((page - 1) * clothesPerPage), (page * clothesPerPage))
    }

    return { pages: pages, clothesFiltered: clothesFiltered, cat: cat, allClothes: allClothes }
  } catch (error) {
    const errorMessage = { status: 500, error }
    throw errorMessage
  }
}

const postClothe = async (newClothe: postClothes, title: string): Promise<postClothes> => {
  try {
    const created = await Clothe.findOne({
      title
    })

    if (!created) {
      const errorMessage = { status: 404, message: 'Already exist this clothe' }
      throw errorMessage
    }
    const post = await Clothe.create(newClothe)
    console.log(post)
    return newClothe
  } catch (error) {
    const errorMessage = { status: 500, error }
    throw errorMessage
  }
}

const putClothe = async (id: string, updateClothe: postClothes): Promise<postClothes> => {
  try {
    await Clothe.findByIdAndUpdate(id, updateClothe)

    return updateClothe
  } catch (error) {
    const errorMessage = { status: 500, error }
    throw errorMessage
  }
}

const deleteClothe = async (id: string): Promise<string> => {
  try {
    await Clothe.findByIdAndDelete(id)
    return id
  } catch (error) {
    const errorMessage = { status: 500, error }
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
