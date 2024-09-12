import { generate } from 'gerador-validador-cpf';
import { Cupom } from '../graphql/models/cupom';
import { faker } from '@faker-js/faker';

export function CupomDataBuilder(props: Partial<Cupom>): Omit<Cupom, 'id'> {
  return {
    email: props.email ?? faker.internet.email(),
    cpf: props.cpf ?? generate(),
    name: props.name ?? faker.person.fullName(),
    tel: props.tel ?? faker.phone.number(),
    code: props.code ?? faker.string.alphanumeric(7),
    createdAt: props.createdAt ?? new Date(),
  };
}
