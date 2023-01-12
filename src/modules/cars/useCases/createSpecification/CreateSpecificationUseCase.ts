import { ISpecationRepository } from "../../../repositories/ISpecificationRepository";


interface IRequest {
  name: string
  description: string
}

class CreateSpecificationUseCase {
  constructor(private specificationsRepository: ISpecationRepository) {

  }


  execute({name, description} : IRequest): void{
    const specifcationAlreadyExist = this.specificationsRepository.findByName(name)

    if(specifcationAlreadyExist){
      throw new Error('Specification already exist')
    }


    this.specificationsRepository.create({
      name, 
      description
    })
  }
}


export {CreateSpecificationUseCase}