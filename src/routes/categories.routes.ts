import { request, response, Router } from 'express';  
// import { PostgressCategoryRepository } from '../modules/repositories/PostgressCategoryRepository  ';
import { CreateCategorySevice } from '../modules/services/CreateCategory';

 
const categoriesRoutes = Router();
// const categoriesRepository = new PostgressCategoryRepository()


categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

//  const createCategorySevice = new CreateCategorySevice(categoriesRepository)

//  createCategorySevice.execute({name, description})

  return response.status(201).send();
});

categoriesRoutes.get('/', (request, response) => {
  // const all = categoriesRepository.list()

  // return response.json(all)
})

export { categoriesRoutes };
