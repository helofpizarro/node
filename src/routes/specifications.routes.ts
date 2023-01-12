import {request, response, Router} from 'express'
import { createSpecificationController } from '../modules/cars/useCases/createSpecification'

const specifcationRoutes = Router()


specifcationRoutes.post('/', (request, response) => {
  return createSpecificationController.handle(request, response)

})


export {specifcationRoutes}