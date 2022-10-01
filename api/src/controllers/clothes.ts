import { Request, Response } from 'express'
import Clothe from '../models/Clothe'
import { filter, postClothes } from '../types'

// ? GET ONE PARAMETER

export const getTitleClothes = async (_req: Request, res: Response): Promise<void> => {
  try {
    const allClothes: postClothes[] = await Clothe.find()
    const titles: string[] = allClothes.map((clothe: postClothes) => { return clothe.title })

    if (titles) {
      res.status(202).json(titles)
    } else {
      res.status(404).send('Not have names of clothes')
    }
  } catch (err: any) {
    res.status(404).send(new Error(err))
  }
}

export const getCategorieClothes = async (_req: Request, res: Response): Promise<void> => {
  try {
    const allClothes: postClothes[] = await Clothe.find()
    const categorie: string[] = allClothes.map((clothe: postClothes) => { return clothe.categorie })

    if (categorie) {
      res.status(202).json(categorie)
    } else {
      res.status(404).send('Not have categories')
    }
  } catch (err: any) {
    res.status(404).send(new Error(err))
  }
}

// ? GET CLOTHE

export const getById = async (req: Request, res: Response): Promise<void> => {
  try {
    const id: string = req.params.id
    const clothe: postClothes = await Clothe.findById(id) as postClothes

    if (!clothe) {
      res.status(404).send('Dont have this clothe')
    } else {
      res.status(202).json(clothe)
    }
  } catch (err: any) {
    res.status(404).send(new Error(err))
  }
}

// * POST/GET FOR PAGINATION

export const pagesClothes = async (req: Request, res: Response): Promise<void> => {
  try {
    const { page, title, cat }: filter = req.body
    let clothesFiltered: postClothes[] = await Clothe.find()

    if (title) {
      clothesFiltered = clothesFiltered.filter((cloth: postClothes) => cloth.title.includes(title))
    }

    if (cat) {
      clothesFiltered = clothesFiltered.filter((cloth: postClothes) => cloth.categorie === cat)
    }

    const pages: number = Math.ceil(clothesFiltered.length / 2)
    if (page > 0) {
      clothesFiltered = clothesFiltered.slice(((page - 1) * 2), (page * 2))
    }

    res.status(202).json({ clothes: clothesFiltered, allPages: pages, page: page === undefined ? 0 : page })
  } catch (err: any) {
    res.status(404).send(new Error(err))
  }
}

// * POST CLOTHE

export const postClothe = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, description, price, stock, image, categorie, size }: postClothes = req.body

    const created = await Clothe.findOne({
      title
    })

    if (!created) {
      if (!title || !description || !price || !stock || !image || !categorie || size.length === 0) {
        res.status(404).send('Missing data')
      } else {
        await Clothe.create({
          title,
          description,
          price,
          stock,
          image,
          categorie,
          size
        })

        res.status(201).send('Has been created')
      }
    } else {
      res.status(404).send('Already have this clothe')
    }
  } catch (err: any) {
    res.status(404).send(new Error(err))
  }
}

// TODO: UPDATE CLOTHE

export const putClothe = async (req: Request, res: Response): Promise<void> => {
  try {
    const id: string = req.params.id
    const { title, description, price, stock, image, categorie }: postClothes = req.body

    if (!title || !description || !price || !stock || !image || !categorie) {
      res.status(404).send('Missing data')
    } else {
      await Clothe.findByIdAndUpdate(id, {
        title,
        description,
        price,
        stock,
        image,
        categorie
      })

      res.status(202).send('The clothe has been updated')
    }
  } catch (err: any) {
    res.status(404).send(new Error(err))
  }
}

// ! DELETE CLOTHE

export const deleteClothe = async (req: Request, res: Response): Promise<void> => {
  try {
    const id: string = req.params.id
    if (!id) {
      res.status(404).send('Missing id')
    } else {
      await Clothe.findByIdAndDelete(id)

      res.status(202).send('Clothe deleted')
    }
  } catch (err: any) {
    res.status(404).send(new Error(err))
  }
}
