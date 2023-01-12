import { request, response, Router } from 'express';  
import { createCategoryController } from '../modules/cars/useCases/CreateCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategory';
import { importCategoryController } from '../modules/cars/useCases/importCategories';
import multer from 'multer'
 
const categoriesRoutes = Router();

const upload = multer({
  dest: './tmp',
})


categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response)
});

categoriesRoutes.get('/', (request, response) => {
   return listCategoriesController.handle(request, response) 
})

categoriesRoutes.post('/import', upload.single('file'), (request, response) => {
    return importCategoryController.handle(request, response)
})  

export { categoriesRoutes };
