import { SpecificationRepository } from "../../../repositories/implementations/SpecificationsRepository";
import {CreateSpecificationUseCase} from '../../useCases/createSpecification/CreateSpecificationUseCase'
import { CreateSpecificationController } from "./CreateSpecificationController";

const specifcationRepository = new SpecificationRepository()
const createSpeficationUseCase = new CreateSpecificationUseCase(specifcationRepository)
const createSpecificationController = new CreateSpecificationController(createSpeficationUseCase)


export {createSpecificationController}