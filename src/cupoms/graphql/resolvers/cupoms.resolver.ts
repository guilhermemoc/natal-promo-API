import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Cupom } from '../models/cupom';
import { CreateCupomInput } from '../inputs/create-cupom.input';
import { CreateCupomUsecase } from '@/cupoms/usecases/create-cupom.usecase';
import { Inject } from '@nestjs/common';

@Resolver(() => Cupom)
export class CupomsResolver {
  // @Inject(ListCupomUsecase.Usecase)
  // private listCupomUseCase: ListCupomUsecase.Usecase;

  @Inject(CreateCupomUsecase.Usecase)
  private createCupomUseCase: CreateCupomUsecase.Usecase;

  // @Query(() => SearchCupomsResult)
  // async malls() {
  //   return await this.listCupomUseCase.execute();
  // }

  @Mutation(() => Cupom)
  createCupom(@Args('data') data: CreateCupomInput) {
    return this.createCupomUseCase.execute(data);
  }
}
