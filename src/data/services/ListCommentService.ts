import { IListCommentUseCase } from "@/domain/use-cases";
import { ICommentRepository, IClasseRepository} from '@/data/contracts';
import { commentDTO } from '@/data/dtos';
import { AlreadyExists } from "@/domain/errors"

import { Either, left, right } from '@/shared/error-handler/either';

export class ListCommentService implements IListCommentUseCase{
  constructor(
    private readonly classeRepository:IClasseRepository
  ){}
  
  async execute(id:string): Promise<Either<AlreadyExists, commentDTO[] | undefined>>{


    const classe = await this.classeRepository.findById(id);

    if(!classe){
      return left(new AlreadyExists('classe'));
    }




    return right(classe.comments)
  }
}
