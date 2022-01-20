import { Classe } from '@/domain/entities';
import { AlreadyExists, InvalideParamsError } from '@/domain/errors';
import { Either } from '@/shared/error-handler/either';

export interface ICreateClasseUseCase{
  execute: ({ name, video, date_end, date_init, description, date_update, total_comments } :Classe) => Promise<Either<AlreadyExists| InvalideParamsError, Classe>>
}
