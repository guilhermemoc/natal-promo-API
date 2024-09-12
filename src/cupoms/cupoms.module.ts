import { DatabaseModule } from '@/database/database.module';
import { Module } from '@nestjs/common';
import { CupomsResolver } from './graphql/resolvers/cupoms.resolver';

@Module({
  imports: [DatabaseModule],
  providers: [CupomsResolver],
})
export class CupomsModule {}
