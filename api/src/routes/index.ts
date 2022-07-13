import express from 'express'
import { deleteClothe, getById, getCategorieClothes, getTitleClothes, pagesClothes, postClothe, putClothe } from '../controllers/clothes'

const route = express.Router()

route.route('/title')
  .get(getTitleClothes)

route.route('/categorie')
  .get(getCategorieClothes)

route.route('/')
  .post(postClothe)

route.route('/:id')
  .get(getById)
  .put(putClothe)
  .delete(deleteClothe)

route.route('/pagination')
  .post(pagesClothes)

export default route
