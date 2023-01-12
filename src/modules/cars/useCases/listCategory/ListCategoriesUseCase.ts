import { Category } from "../../../model/Category";
import { ICategoriesRepository } from "../../../repositories/ICategoryRepository";


class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository){

  }

 execute(): Category[] { 
   const categorires = this.categoriesRepository.list()
   
   return categorires
} 

}

export {ListCategoriesUseCase}