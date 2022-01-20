import { DeleteClasseByIdService } from '@/data/services';
import {  ClasseRepository } from '@/infra/repositories';
import {  DeleteClasseByIdController } from '@/presentation/controllers'
import { IController } from '@/presentation/contracts'

const makeDeleteClasseByIdAdapter = () :IController=> {
  const classeRepository = new ClasseRepository();
  const deleteClasseByIdService  = new DeleteClasseByIdService(classeRepository);
  const deleteClasseController = new DeleteClasseByIdController(deleteClasseByIdService);

  return deleteClasseController
}




export { makeDeleteClasseByIdAdapter }
