import { User } from '@/domain/entities';

export interface ICreateUserUseCase{
  execute: ({ name, email, password } :User) => Promise<User>
}
