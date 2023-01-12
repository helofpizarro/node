import { CategoriesRepository } from "../../../repositories/implementations/CategoriesRepositories";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const categoriesRepository = CategoriesRepository.getInstance()
const listCategoiresUseCase = new ListCategoriesUseCase(categoriesRepository)
const listCategoriesController = new ListCategoriesController(listCategoiresUseCase)


export {listCategoriesController}
