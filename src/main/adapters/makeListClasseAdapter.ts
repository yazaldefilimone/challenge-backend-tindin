import { ListClasseService } from '@/data/services';
import {  ClasseRepository } from '@/infra/repositories';
import {  ListClasseController } from '@/presentation/controllers'
import { IController } from '@/presentation/contracts'

const makeListClasseAdapter = () :IController=> {
  const classeRepository = new ClasseRepository();
  const listClasseService  = new ListClasseService(classeRepository);
  const listClasseController = new ListClasseController(listClasseService);

  return listClasseController
}




export { makeListClasseAdapter }
