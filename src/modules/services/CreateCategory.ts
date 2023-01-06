import { ICategoriesRepository } from "../repositories/ICategoryRepository"


interface IRequest {
  name: string
  description: string
}

class CreateCategorySevice {
    constructor(private categoriesRepository: ICategoriesRepository){

    }

   execute({description, name}: IRequest): void { 
    const categoryAlreadyExist = this.categoriesRepository.findByName(name)

    if(categoryAlreadyExist){
      throw new Error('Category already exist')
    }
  
    this.categoriesRepository.create({name, description})
   } 
}


export {CreateCategorySevice}