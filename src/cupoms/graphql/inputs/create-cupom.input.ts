import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateCupomInput {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  cpf: string;

  @Field()
  tel: string;

  @Field()
  code: string;
}
