import { ICreateCommentUseCase } from "@/domain/use-cases";
import { ICommentRepository, IClasseRepository} from '@/data/contracts';
import { commentDTO } from '@/data/dtos';
import { InvalideParamsError , AlreadyExists } from "@/domain/errors"

import { Either, left, right } from '@/shared/error-handler/either';

export class CreateCommentService implements ICreateCommentUseCase{
  constructor(
    private readonly commentRepository:ICommentRepository,
    private readonly classeRepository:IClasseRepository
  ){}
  
  async execute({ comment, date_created, id_class }: commentDTO): Promise<Either<InvalideParamsError | AlreadyExists, commentDTO | any>>{


    const classe = await this.classeRepository.findById(id_class);

    if(!classe){
      return left(new AlreadyExists('classe'));
    }


     await this.commentRepository.create({ id_class, comment, date_created });

    const result = await this.classeRepository.pushByComment(id_class, { comment, id_class, date_created})

    return right(result)
  }
}
