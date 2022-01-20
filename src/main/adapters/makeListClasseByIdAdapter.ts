import { ListClasseByIdService } from '@/data/services';
import {  ClasseRepository } from '@/infra/repositories';
import {  ListClasseByIdController } from '@/presentation/controllers'
import { IController } from '@/presentation/contracts'

const makeListClasseByIdAdapter = () :IController=> {
  const classeRepository = new ClasseRepository();
  const listClasseByIdService  = new ListClasseByIdService(classeRepository);
  const listClasseController = new ListClasseByIdController(listClasseByIdService);

  return listClasseController
}




export { makeListClasseByIdAdapter }
