import { Cupom } from '../graphql/models/cupom';
import { ICreateCupom } from './create-cupom';

export interface ICupomsRepository {
  create(data: ICreateCupom): Promise<Cupom>;
  update(cupom: Cupom): Promise<Cupom>;
  delete(id: string): Promise<Cupom>;
  findById(id: string): Promise<Cupom>;
  findByEmail(email: string): Promise<Cupom>;
  findByCpf(cpf: string): Promise<Cupom>;
  get(id: string): Promise<Cupom>;
}
