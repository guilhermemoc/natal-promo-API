import { DatabaseModule } from '@/database/database.module';
import { Module } from '@nestjs/common';
import { CupomsResolver } from './graphql/resolvers/cupoms.resolver';
import { PrismaService } from '@/database/prisma/prisma.service';
import { CupomsPrismaRepository } from './repositories/cupoms-prisma.repository';

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
  ],
})
export class CupomsModule {}
