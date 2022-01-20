import { IDeleteClasseByIdUseCase } from "@/domain/use-cases";
import { IClasseRepository } from '@/data/contracts';
import { classeDTO } from '@/data/dtos';
import { Either, left, right } from '@/shared/error-handler/either'
import { NotFound } from '@/domain/errors';

export class DeleteClasseByIdService implements IDeleteClasseByIdUseCase{
  constructor(private readonly classeRepository:IClasseRepository){}
  
  async execute(id : string): Promise<Either<NotFound, null>>{
    
    const classeOrError = await this.classeRepository.findById(id);

    if(!classeOrError){
      return left(new NotFound('classes'))
    }
    
     await this.classeRepository.deleteById(id);
    
    return right(null);
  }
}
