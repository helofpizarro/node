import {request, response, Router} from 'express'
import { SpecificationRepository } from '../modules/repositories/SpecificationsRepository'
import { CreateSpacificationService } from '../modules/services/CreateSpecificationService'

const specifcationRoutes = Router()

const specificationRepository = new SpecificationRepository()

specifcationRoutes.post('/', (request, response) => {
  const {name, description} = request.body
  const createSpacificationService = new CreateSpacificationService(specificationRepository)

  createSpacificationService.execute({name, description})


  return response.status(201).send()

})


export {specifcationRoutes}