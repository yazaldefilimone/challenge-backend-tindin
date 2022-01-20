import { IListClasseUseCase } from "@/domain/use-cases";
import { IClasseRepository } from '@/data/contracts';
import { classeDTO } from '@/data/dtos';


export class ListClasseService implements IListClasseUseCase{
  constructor(private readonly classeRepository:IClasseRepository){}
  
  async execute(): Promise<classeDTO[]>{
    
    const classeOrNull = await this.classeRepository.find();

    return classeOrNull
  }
}
