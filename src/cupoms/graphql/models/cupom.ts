import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Cupom {
  @Field(() => ID)
  id: string;

  @Field()
  email: string;

  @Field()
  cpf: string;

  @Field()
  name: string;

  @Field()
  tel: string;

  @Field()
  code: string;

  @Field()
  createdAt: Date;
}
