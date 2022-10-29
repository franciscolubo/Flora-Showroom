import { NextFunction, Request, Response } from 'express'
import { postClothes } from '../types'
import clotheServices from '../services/clotheServices'

// ? GET ONE PARAMETER

export const getTitleClothes = (_req: Request, res: Response, next: NextFunction): void => {
  clotheServices.getTitleClothes()
    .then(data => res.status(202).send({ status: 'OK', data: data }))
    .catch(err => next({ status: 'ERROR', message: err }))
}

export const getCategorieClothes = (_req: Request, res: Response, next: NextFunction): void => {
  clotheServices.getCategorieClothes()
    .then(data => res.status(202).send({ status: 'OK', data: data }))
    .catch(err => next({ status: 'ERROR', message: err }))
}

// ? GET CLOTHE

export const getById = (req: Request, res: Response, next: NextFunction): void => {
  const id: string = req.params.id
  console.log('getById', id)
  if (!id) {
    next({ status: 'FAILED', message: 'Not pass id for params' })
  }

  console.log(typeof id, Boolean(!id))
  clotheServices.getById(id)
    .then(data => res.status(200).send({ status: 'OK', data: data }))
    .catch(err => next({ status: 'ERROR', message: err }))
}

// * POST/GET FOR PAGINATION

export const pagesClothes = (req: Request, res: Response, next: NextFunction): void => {
  clotheServices.pagesClothes({ ...req.query })
    .then(data => {
      res.status(202).send({ status: 'OK', clothes: data.clothesFiltered, allPages: data.pages, page: req.query.page === undefined ? 0 : req.query.page })
    })
    .catch(err => {
      next({ status: 'ERROR', message: err })
    })
}

// * POST CLOTHE

export const postClothe = (req: Request, res: Response, next: NextFunction): void => {
  const { title, description, price, stock, image, categorie, size }: postClothes = req.body

  if (!title || !description || !price || !stock || !image || !categorie || !size) {
    next({ status: 'FAILED', message: 'Missing filds title, description, price, stock, image, categorie, size' })
  }

  clotheServices.postClothe(req.body, title)
    .then(data => res.status(201).send({ status: 'OK', data: data }))
    .catch(err => next({ status: 'ERROR', message: err }))
}

// TODO: UPDATE CLOTHE

export const putClothe = (req: Request, res: Response, next: NextFunction): void => {
  const id: string = req.params.id
  const { title, description, price, stock, image, categorie }: postClothes = req.body

  if (!id) {
    next({ status: 'FAILED', message: 'Missing id for update' })
  }

  if (!title || !description || !price || !stock || !image || !categorie) {
    next({ status: 'FAILED', message: 'Missing filds title, description, price, stock, image, categorie, size' })
  }

  clotheServices.putClothe(id, req.body)
    .then(data => res.status(202).send({ status: 'OK', data: data }))
    .catch(err => next({ status: 'ERROR', message: err }))
}

// ! DELETE CLOTHE

export const deleteClothe = (req: Request, res: Response, next: NextFunction): void => {
  const id: string = req.params.id
  console.log(id, Boolean(!id))
  if (!id) {
    next({ status: 'FAILED', message: 'Missing id of clothe' })
  }

  clotheServices.deleteClothe(id)
    .then(() => res.status(200).send({ status: 'OK', message: 'Clothe deleted' }))
    .catch(err => next({ status: 'ERROR', message: err }))
}
