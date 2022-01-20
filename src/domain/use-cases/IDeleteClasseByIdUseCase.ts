import { Classe } from '@/domain/entities';
import { Either } from '@/shared/error-handler/either'
import { NotFound } from '@/domain/errors'
export interface IDeleteClasseByIdUseCase{
  execute: (id:string) => Promise<Either<NotFound, null>>
}
