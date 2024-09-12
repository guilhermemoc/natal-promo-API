import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Cupom } from './cupom';

@ObjectType()
export class SearchCupomsResult {
  @Field(() => [Cupom])
  items: Cupom[];

  @Field(() => Int)
  total: number;
}
