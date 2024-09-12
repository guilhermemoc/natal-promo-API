import { Cupom } from '@prisma/client';
import { ICreateCupom } from '../interfaces/create-cupom';
import { ICupomsRepository } from '../interfaces/cupoms.repository';
import { PrismaService } from '@/database/prisma/prisma.service';

export class CupomsPrismaRepository implements ICupomsRepository {
  constructor(private prisma: PrismaService) {}

  create(data: ICreateCupom): Promise<Cupom> {
    throw new Error('Method not implemented.');
  }
  update(author: Cupom): Promise<Cupom> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<Cupom> {
    throw new Error('Method not implemented.');
  }
  findById(id: string): Promise<Cupom> {
    throw new Error('Method not implemented.');
  }
  findByEmail(email: string): Promise<Cupom> {
    throw new Error('Method not implemented.');
  }
  findByCpf(cpf: string): Promise<Cupom> {
    throw new Error('Method not implemented.');
  }
  get(id: string): Promise<Cupom> {
    throw new Error('Method not implemented.');
  }
}
