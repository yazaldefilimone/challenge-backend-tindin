import { LoginUserService } from '../../data/services';
import {  UserRepository } from '../../infra/repositories';
import {  LoginUserController } from '../../presentation/controllers'
import { IController } from '../../presentation/contracts'

const makeLoginUserAdapter = () :IController=> {
  const userRepository = new UserRepository();
  const loginUserService  = new LoginUserService(userRepository);
  const loginUserController = new LoginUserController(loginUserService);

  return loginUserController
}




export { makeLoginUserAdapter }
