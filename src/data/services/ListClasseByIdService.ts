import { IListClasseByIdUseCase } from "@/domain/use-cases";
import { IClasseRepository } from '@/data/contracts';
import { classeDTO } from '@/data/dtos';
import { Either, left, right } from '@/shared/error-handler/either'
import { NotFound } from '@/domain/errors';

export class ListClasseByIdService implements IListClasseByIdUseCase{
  constructor(private readonly classeRepository:IClasseRepository){}
  
async execute(_id : string ): Promise<Either<NotFound, classeDTO | undefined >>{
    
    const classeOrError = await this.classeRepository.findById(_id );

    if(!classeOrError){
      return left(new NotFound('classes'))
    }

    return right(classeOrError);
  }
}
