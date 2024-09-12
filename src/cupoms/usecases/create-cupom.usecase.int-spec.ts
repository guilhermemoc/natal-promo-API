import { Test, TestingModule } from '@nestjs/testing';
import { CupomsPrismaRepository } from '../repositories/cupoms-prisma.repository';
import { CreateCupomUsecase } from './create-cupom.usecase';
import { PrismaClient } from '@prisma/client';
import { execSync } from 'node:child_process';

describe('CreateCupomUsecase Integration Tests', () => {
  let module: TestingModule;
  let repository: CupomsPrismaRepository;
  let usecase: CreateCupomUsecase.Usecase;
  const prisma = new PrismaClient();

  beforeAll(async () => {
    execSync('npm run prisma:migratetest');
    await prisma.$connect();
    module = await Test.createTestingModule({}).compile();
    repository = new CupomsPrismaRepository(prisma as any);
    usecase = new CreateCupomUsecase.Usecase(repository);
  });

  beforeEach(async () => {
    await prisma.cupom.deleteMany();
  });

  afterAll(async () => {
    await module.close();
  });
});
