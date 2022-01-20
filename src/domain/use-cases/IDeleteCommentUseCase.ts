import { Either } from '@/shared/error-handler/either';
import { AlreadyExists } from '@/domain/errors'

export interface IDeleteCommentUseCase{
  execute: (id_class:string, id:string) => Promise<Either<AlreadyExists, null>>;
}
