import { Request, Response } from 'express'
import { postClothes } from '../types'
import clotheServices from '../services/clotheServices'

// ? GET ONE PARAMETER

export const getTitleClothes = (_req: Request, res: Response): void => {
  clotheServices.getTitleClothes()
    .then(data => res.status(202).send({ status: 'OK', data: data }))
    .catch(err => res.status(400).send({ status: 'ERROR', message: err }))
}

export const getCategorieClothes = (_req: Request, res: Response): void => {
  clotheServices.getCategorieClothes()
    .then(data => res.status(202).send({ status: 'OK', data: data }))
    .catch(err => res.status(400).send({ status: 'ERROR', message: err }))
}

// ? GET CLOTHE

export const getById = (req: Request, res: Response): void => {
  const id: string = req.params.id

  if (!id) {
    res.status(400).send({ status: 'FAILED', message: 'Not pass id for params' })
  }

  clotheServices.getById(id)
    .then(data => res.status(200).send({ status: 'OK', data: data }))
    .catch(err => res.status(404).send({ status: 'ERROR', message: err.message }))
}

// * POST/GET FOR PAGINATION

export const pagesClothes = (req: Request, res: Response): void => {
  clotheServices.pagesClothes(req.body)
    .then(data => {
      res.status(202).send({ status: 'OK', clothes: data.clothesFiltered, allPages: data.pages, page: req.body.page === undefined ? 0 : req.body.page })
    })
    .catch(err => {
      res.status(400).send({ status: 'ERROR', message: err })
    })
}

// * POST CLOTHE

export const postClothe = (req: Request, res: Response): void => {
  const { title, description, price, stock, image, categorie, size }: postClothes = req.body

  if (!title || !description || !price || !stock || !image || !categorie || !size) {
    res.status(404).send({ status: 'FAILED', message: 'Missing filds title, description, price, stock, image, categorie, size' })
  }

  clotheServices.postClothe(req.body, title)
    .then(data => res.status(201).send({ status: 'OK', data: data }))
    .catch(err => res.status(404).send({ status: 'ERROR', message: err }))
}

// TODO: UPDATE CLOTHE

export const putClothe = (req: Request, res: Response): void => {
  const id: string = req.params.id
  const { title, description, price, stock, image, categorie }: postClothes = req.body

  if (!id) {
    res.status(400).send({ status: 'FAILED', message: 'Missing id for update' })
  }

  if (!title || !description || !price || !stock || !image || !categorie) {
    res.status(400).send({ status: 'FAILED', message: 'Missing filds title, description, price, stock, image, categorie, size' })
  }

  clotheServices.putClothe(id, req.body)
    .then(data => res.status(202).send({ status: 'OK', data: data }))
    .catch(err => res.status(400).send({ status: 'ERROR', message: err }))
}

// ! DELETE CLOTHE

export const deleteClothe = (req: Request, res: Response): void => {
  const id: string = req.params.id

  if (!id) {
    res.status(400).send({ status: 'FAILED', message: 'Missing id of clothe' })
  }

  clotheServices.deleteClothe(id)

  res.status(200).send({ status: 'OK', message: 'Clothe deleted' })
}
