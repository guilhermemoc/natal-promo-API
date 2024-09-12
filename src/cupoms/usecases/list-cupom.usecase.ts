import { CupomsPrismaRepository } from '../repositories/cupoms-prisma.repository';

export namespace ListCupomUsecase {
  export class Usecase {
    constructor(private cupomsRepository: CupomsPrismaRepository) {}

    async execute(): Promise<any> {
      return await this.cupomsRepository.getAll;
    }
  }
}
