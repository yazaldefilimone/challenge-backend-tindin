import { User } from '@/domain/entities';
import { AlreadyExists, InvalideParamsError } from '@/domain/errors';
import { Either } from '@/shared/error-handler/either';

export interface ICreateUserUseCase{
  execute: ({ name, email, password } :User) => Promise<Either<AlreadyExists| InvalideParamsError, User>>
}
