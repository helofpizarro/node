import { ICreateSpecificationDTO, ISpecationRepository } from "../ISpecificationRepository";
import { Specification } from "../../model/Specification";


class SpecificationRepository implements ISpecationRepository {
  private specifications: Specification[]

  constructor() {
    this.specifications = []
  }

  create({name, description}: ICreateSpecificationDTO): void {
    const specification = new Specification()

    Object.assign(specification, {
      name, 
      description,
      created_at: new Date()
    })

    this.specifications.push(specification)
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find(specifcation => specifcation.name === name)

    return specification
  }
}

export {SpecificationRepository}