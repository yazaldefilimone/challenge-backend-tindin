import { ICreateClasseUseCase } from "@/domain/use-cases";
import { IClasseRepository } from '@/data/contracts';
import { classeDTO } from '@/data/dtos';
import { InvalideParamsError, AlreadyExists } from "@/domain/errors"


import { isValidLink, isValidName, isValidText } from '@/shared/validators';
import { Either, left, right } from '@/shared/error-handler/either';


export class CreateClasseService implements ICreateClasseUseCase{
  constructor(private readonly classeRepository:IClasseRepository){}
  
  async execute({ name, video, description, date_end, date_init, total_comments, date_update}: classeDTO): Promise<Either<InvalideParamsError| AlreadyExists, classeDTO>>{
    
    if(!isValidName(name)){
      return left(new InvalideParamsError(name))
    }

    if(!isValidLink(video)){
      return left(new InvalideParamsError(video))
    }

    if(!isValidText(description)){
      return left(new InvalideParamsError('description'));
    } 

    const classeOrNull = await this.classeRepository.findByLink(video);

    if(classeOrNull){
      return left(new AlreadyExists('classe'));
    }

    const classe = await this.classeRepository.create(
      { 
        name, video, date_update,
        date_init, date_end, 
        total_comments, description
      }
    );

    return right(classe)
  }
}
