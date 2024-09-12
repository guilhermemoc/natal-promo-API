import { Query, Resolver } from '@nestjs/graphql';
import { Cupom } from '../models/cupom';
import { PrismaService } from '@/database/prisma/prisma.service';

@Resolver(() => Cupom)
export class CupomsResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => [Cupom])
  cupoms() {
    return this.prisma.cupom.findMany();
  }
}
