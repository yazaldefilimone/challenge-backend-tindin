import { CreateClasseService } from '@/data/services';
import {  ClasseRepository } from '@/infra/repositories';
import {  CreateClasseController } from '@/presentation/controllers'
import { IController } from '@/presentation/contracts'

const makeCreateClasseAdapter = () :IController=> {
  const classeRepository = new ClasseRepository();
  const createClasseService  = new CreateClasseService(classeRepository);
  const createClasseController = new CreateClasseController(createClasseService);

  return createClasseController
}




export { makeCreateClasseAdapter }
