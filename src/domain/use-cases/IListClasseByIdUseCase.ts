import { Classe } from '@/domain/entities';
import { Either } from '@/shared/error-handler/either'
import { NotFound } from '@/domain/errors'
export interface IListClasseByIdUseCase{
  execute: (_id:string ) => Promise<Either<NotFound, Classe | undefined>>
}
