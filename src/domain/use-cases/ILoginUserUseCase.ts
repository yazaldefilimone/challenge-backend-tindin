import { User } from '@/domain/entities';
import { AlreadyExists, InvalideParamsError } from '@/domain/errors';
import { Either } from '@/shared/error-handler/either';

export interface ILoginUserUseCase{
  execute: ({ email, password } :any) => Promise<Either<AlreadyExists| InvalideParamsError, Omit<User, 'password'>>>
}
