import { IDeleteCommentUseCase } from "@/domain/use-cases";
import { ICommentRepository, IClasseRepository} from '@/data/contracts';
import { commentDTO } from '@/data/dtos';
import { InvalideParamsError , AlreadyExists } from "@/domain/errors"

import { Either, left, right } from '@/shared/error-handler/either';

export class DeleteCommentService implements IDeleteCommentUseCase{
  constructor(
    private readonly commentRepository:ICommentRepository,
    private readonly classeRepository:IClasseRepository
  ){}
  
    async execute (id_class:string, id:string): Promise<Either<AlreadyExists, null>>{


    const classe = await this.classeRepository.findById(id_class);

    if(!classe){
      return left(new AlreadyExists('classe'));
    }


     const result = await this.classeRepository.removeById(id_class, id);


    return right(result)
  }
}
