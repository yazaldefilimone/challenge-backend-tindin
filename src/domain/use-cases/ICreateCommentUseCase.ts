import { Comments } from '@/domain/entities';
import { InvalideParamsError,  AlreadyExists } from '@/domain/errors';
import { Either } from '@/shared/error-handler/either';

export interface ICreateCommentUseCase{
  execute: ({ id_class, date_created, comment } :Comments) => Promise<Either<InvalideParamsError | AlreadyExists, Comments>>
}
