import { CreateUserService } from '../../data/services';
import {  UserRepository } from '../../infra/repositories';
import {  CreateUserController } from '../../presentation/controllers'
import { IController } from '../../presentation/contracts'

const makeCreateUserAdapter = () :IController=> {
  const userRepository = new UserRepository();
  const createUserService  = new CreateUserService(userRepository);
  const createUserController = new CreateUserController(createUserService);

  return createUserController
}




export { makeCreateUserAdapter }
