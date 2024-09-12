import { Test, TestingModule } from '@nestjs/testing';
import { CupomsResolver } from './cupoms.resolver';

describe('CupomsResolver', () => {
  let resolver: CupomsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CupomsResolver],
    }).compile();

    resolver = module.get<CupomsResolver>(CupomsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
