import { CupomOutput } from '@/cupom/dto/cupom-output';
import { CupomsPrismaRepository } from '../repositories/cupoms-prisma.repository';
import { BadRequestError } from '@/shared/errors/bad-request-error';

export namespace CreateCupomUsecase {
  export type Input = {
    email: string;
    cpf: string;
    name: string;
    tel: string;
    code: string;
  };

  export type Output = CupomOutput;

  export class Usecase {
    constructor(private cupomsRepository: CupomsPrismaRepository) {}

    async execute(input: Input): Promise<Output> {
      const { email, cpf, name } = input;
      if (!email || !cpf || !name) {
        throw new BadRequestError('Input data not provided');
      }

      const cupoms = await this.cupomsRepository.create(input);
      return cupoms;
    }
  }
}
