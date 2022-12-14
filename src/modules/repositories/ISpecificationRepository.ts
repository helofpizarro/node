import { Specification } from "../model/Specification"


interface ICreateSpecificationDTO {
  name: string
  description: string
}


interface ISpecationRepository {
    create({name, description}: ICreateSpecificationDTO): void
    findByName(name: string): Specification
}


export {ISpecationRepository, ICreateSpecificationDTO}