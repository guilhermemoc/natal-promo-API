import { Cupom } from '@prisma/client';
import { ICreateCupom } from '../interfaces/create-cupom';
import { ICupomsRepository } from '../interfaces/cupoms.repository';
import { PrismaService } from '@/database/prisma/prisma.service';
import { NotFoundError } from '@/shared/errors/not-found-error';

export class CupomsPrismaRepository implements ICupomsRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: ICreateCupom): Promise<Cupom> {
    const cupom = await this.prisma.cupom.create({
      data,
    });
    return cupom;
  }
  async update(cupom: Cupom): Promise<Cupom> {
    await this.get(cupom.id);
    const cupomUpdated = await this.prisma.cupom.update({
      data: cupom,
      where: {
        id: cupom.id,
      },
    });
    return cupomUpdated;
  }
  async delete(id: string): Promise<Cupom> {
    const cupom = await this.get(id);
    await this.prisma.cupom.delete({
      where: { id },
    });
    return cupom;
  }
  async findById(id: string): Promise<Cupom> {
    return await this.get(id);
  }
  async getAll(): Promise<Cupom> {
    return await this.getAll();
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
