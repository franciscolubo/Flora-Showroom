import express from 'express'
import { deleteClothe, getById, getCategorieClothes, getTitleClothes, pagesClothes, postClothe, putClothe } from '../controllers/clotheControllers'

const route = express.Router()

route
  .get('/title', getTitleClothes)
  .get('/categories', getCategorieClothes)
  .get('/:id', getById)
  .post('/pagination', pagesClothes)
  .post('/', postClothe)
  .put('/:id', putClothe)
  .delete('/:id', deleteClothe)

export default route
