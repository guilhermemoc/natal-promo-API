import { Module } from '@nestjs/common';
import { CupomsResolver } from './graphql/resolvers/cupoms.resolver';
import { DatabaseModule } from '@/database/database.module';
import { PrismaService } from '@/database/prisma/prisma.service';
import { CupomsPrismaRepository } from './repositories/cupoms-prisma.repository';
import { CreateCupomUsecase } from './usecases/create-cupom.usecase';

@Module({
  imports: [DatabaseModule],
  providers: [
    CupomsResolver,
    {
      provide: 'PrismaService',
      useClass: PrismaService,
    },
    {
      provide: 'CupomsRepository',
      useFactory: (prisma: PrismaService) => {
        return new CupomsPrismaRepository(prisma);
      },
      inject: ['PrismaService'],
    },
    {
      provide: CreateCupomUsecase.Usecase,
      useFactory: (cupomsRepository: CupomsPrismaRepository) => {
        return new CreateCupomUsecase.Usecase(cupomsRepository);
      },
      inject: ['CupomsRepository'],
    },
  ],
})
export class CupomsModule {}
