import { CreateUserService } from '../../data/services';
import {  FakeUserRepository } from '../../infra/repositories';
import {  CreateUserController } from '../../presentation/controllers'
import { IController } from '../../presentation/contracts'

const makeCreateUserAdapter = () :IController=> {
  const fakeUserRepository = new FakeUserRepository();
  const createUserService  = new CreateUserService(fakeUserRepository);
  const createUserController = new CreateUserController(createUserService);

  return createUserController
}




export { makeCreateUserAdapter }
