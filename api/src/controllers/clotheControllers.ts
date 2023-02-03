import { NextFunction, Request, Response } from 'express'
import { postClothes } from '../types'
import clotheServices from '../services/clotheServices'

// ? GET ONE PARAMETER

export const getTitleClothes = (_req: Request, res: Response, next: NextFunction): void => {
  clotheServices.getTitleClothes()
    .then(data => res.status(202).json({ data: data }))
    .catch(error => next(error))
}

export const getCategorieClothes = (_req: Request, res: Response, next: NextFunction): void => {
  clotheServices.getCategorieClothes()
    .then(data => res.status(202).json({ categories: data }))
    .catch(error => next(error))
}

// ? GET CLOTHE

export const getById = (req: Request, res: Response, next: NextFunction): void => {
  const id: string = req.params.id
  if (!id) {
    next({ status: 404, message: 'Not pass id for params' })
  }
  clotheServices.getById(id)
    .then(data => res.status(200).json({ data: data }))
    .catch(error => next(error))
}

// * POST/GET FOR PAGINATION

export const pagesClothes = (req: Request, res: Response, next: NextFunction): void => {
  clotheServices.pagesClothes({ ...req.query })
    .then(data => {
      res.status(202).json({ clothes: data.clothesFiltered, allPages: data.pages, page: req.query.page === undefined ? 0 : req.query.page, cat: data.cat })
    })
    .catch(error => {
      next(error)
    })
}

// * POST CLOTHE

export const postClothe = (req: Request, res: Response, next: NextFunction): void => {
  const { title, description, price, stock, image, categorie, size }: postClothes = req.body

  if (!title || !description || !price || !stock || !image || !categorie || !size) {
    next({ status: 400, message: 'Missing filds title, description, price, stock, image, categorie, size' })
  }

  clotheServices.postClothe(req.body, title)
    .then(data => res.status(201).json({ data: data }))
    .catch(error => next(error))
}

// TODO: UPDATE CLOTHE

export const putClothe = (req: Request, res: Response, next: NextFunction): void => {
  const id: string = req.params.id
  const { title, description, price, stock, image, categorie }: postClothes = req.body

  if (!id) {
    next({ status: 404, message: 'Missing id for update' })
  }

  if (!title || !description || !price || !stock || !image || !categorie) {
    next({ status: 404, message: 'Missing filds title, description, price, stock, image, categorie, size' })
  }

  clotheServices.putClothe(id, req.body)
    .then(data => res.status(202).json({ data: data }))
    .catch(error => next(error))
}

// ! DELETE CLOTHE

export const deleteClothe = (req: Request, res: Response, next: NextFunction): void => {
  const id: string = req.params.id
  console.log(id, Boolean(!id))
  if (!id) {
    next({ status: 404, message: 'Missing id of clothe' })
  }

  clotheServices.deleteClothe(id)
    .then(() => res.status(200).json({ message: 'Clothe deleted' }))
    .catch(error => next(error))
}
