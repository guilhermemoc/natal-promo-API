import { Cupom } from '@prisma/client';
import { ICreateCupom } from '../interfaces/create-cupom';
import { ICupomsRepository } from '../interfaces/cupoms.repository';
import { PrismaService } from '@/database/prisma/prisma.service';
import { NotFoundError } from '@/shared/errors/not-found-error';

export class CupomsPrismaRepository implements ICupomsRepository {
  constructor(private prisma: PrismaService) {}

  create(data: ICreateCupom): Promise<Cupom> {
    throw new Error('Method not implemented.');
  }
  update(cupom: Cupom): Promise<Cupom> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<Cupom> {
    throw new Error('Method not implemented.');
  }
  async findById(id: string): Promise<Cupom> {
    return await this.get(id);
  }
  findByEmail(email: string): Promise<Cupom> {
    throw new Error('Method not implemented.');
  }
  findByCpf(cpf: string): Promise<Cupom> {
    throw new Error('Method not implemented.');
  }
  async get(id: string): Promise<Cupom> {
    const cupom = await this.prisma.cupom.findUnique({
      where: { id },
    });
    if (!cupom) {
      throw new NotFoundError(`Cupom not found using ID ${id}`);
    }
    return cupom;
  }
}
