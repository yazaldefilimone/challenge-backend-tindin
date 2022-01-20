import { IUpdateClasseByIdUseCase } from "@/domain/use-cases";
import { IClasseRepository } from '@/data/contracts';
import { classeDTO } from '@/data/dtos';
import { Either, left, right } from '@/shared/error-handler/either'
import { NotFound } from '@/domain/errors';

export class UpdateClasseByIdService implements IUpdateClasseByIdUseCase{
  constructor(private readonly classeRepository:IClasseRepository){}
  
  async execute(id : string, { name, total_comments ,video, description, date_end, date_init, date_update }: classeDTO): Promise<Either<NotFound, classeDTO | null>>{
    
    const classeOrError = await this.classeRepository.findById(id);

    const classeUpdate = {
      name,
      video,
      description,
      date_update,
      date_init,
      date_end,
      total_comments
    }
    if(!classeOrError){
      return left(new NotFound('classes'))
    }
    
    const result = await this.classeRepository.updateById(id, classeUpdate)
    return right(result);
  }
}
