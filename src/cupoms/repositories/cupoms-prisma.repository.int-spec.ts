import { Test, TestingModule } from '@nestjs/testing';
import { CupomsPrismaRepository } from './cupoms-prisma.repository';
import { execSync } from 'node:child_process';
import { PrismaClient } from '@prisma/client';
import { NotFoundError } from '@/shared/errors/not-found-error';
import { CupomDataBuilder } from '../helpers/cupom-data-builder';

describe('CupomsPrismaRepository Integration Tests', () => {
  let module: TestingModule;
  let repository: CupomsPrismaRepository;
  const prisma = new PrismaClient();

  beforeAll(async () => {
    execSync('npm run prisma:migratetest');
    await prisma.$connect();
    module = await Test.createTestingModule({}).compile();
    repository = new CupomsPrismaRepository(prisma as any);
  });

  beforeEach(async () => {
    await prisma.cupom.deleteMany();
  });

  afterAll(async () => {
    await module.close();
  });

  test('should throws an error when the id is not found', async () => {
    await expect(
      repository.findById('796c5a25-1d3b-4228-9a75-06f416c6e218'),
    ).rejects.toThrow(
      new NotFoundError(
        'Cupom not found using ID 796c5a25-1d3b-4228-9a75-06f416c6e218',
      ),
    );
  });

  test('should find an cupom by id', async () => {
    const data = CupomDataBuilder({});

    const cupom = await prisma.cupom.create({
      data,
    });

    const result = await repository.findById(cupom.id);
    expect(result).toStrictEqual(cupom);
  });

  test('should create a cupom', async () => {
    const data = CupomDataBuilder({});

    const cupom = await repository.create(data);

    expect(cupom).toMatchObject(data);
  });

  test('should throws an error when updating a cupom not found', async () => {
    const data = CupomDataBuilder({});
    const cupom = {
      id: '796c5a25-1d3b-4228-9a75-06f416c6e218',
      ...data,
    };
    await expect(repository.update(cupom)).rejects.toThrow(
      new NotFoundError(
        'Cupom not found using ID 796c5a25-1d3b-4228-9a75-06f416c6e218',
      ),
    );
  });

  test('should update a cupom', async () => {
    const data = CupomDataBuilder({});
    const cupom = await prisma.cupom.create({ data });

    const result = await repository.update({
      ...cupom,
      name: 'new name',
    });

    expect(result.name).toBe('new name');
  });

  test('should throws an error when deleting a cupom not found', async () => {
    await expect(
      repository.delete('796c5a25-1d3b-4228-9a75-06f416c6e218'),
    ).rejects.toThrow(
      new NotFoundError(
        'Cupom not found using ID 796c5a25-1d3b-4228-9a75-06f416c6e218',
      ),
    );
  });

  test('should delete a cupom', async () => {
    const data = CupomDataBuilder({});
    const cupom = await prisma.cupom.create({ data });

    const result = await repository.delete(cupom.id);

    expect(result).toMatchObject(cupom);
  });
});
