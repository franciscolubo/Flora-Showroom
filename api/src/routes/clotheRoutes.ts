import express from 'express'
import { deleteClothe, getById, getCategorieClothes, getTitleClothes, pagesClothes, postClothe, putClothe } from '../controllers/clotheControllers'

const route = express.Router()

route
  .get('/title', getTitleClothes)
  .get('/categories', getCategorieClothes)
  .get('/paginate', pagesClothes)
  .get('/:id', getById)
  .post('/', postClothe)
  .put('/:id', putClothe)
  .delete('/:id', deleteClothe)

export default route
