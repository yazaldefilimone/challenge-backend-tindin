import { Comments } from '@/domain/entities';
import { Either } from '@/shared/error-handler/either';
import { AlreadyExists } from '@/domain/errors'

export interface IListCommentUseCase{
  execute: (id_class:string, id:string) => Promise<Either<AlreadyExists, Comments[] | undefined>>
}
