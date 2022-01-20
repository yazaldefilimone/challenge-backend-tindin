import { UpdateClasseByIdService } from '@/data/services';
import {  ClasseRepository } from '@/infra/repositories';
import {  UpdateClasseByIdController } from '@/presentation/controllers'
import { IController } from '@/presentation/contracts'

const makeUpdateClasseByIdAdapter = () :IController=> {
  const classeRepository = new ClasseRepository();
  const updateClasseByIdService  = new UpdateClasseByIdService(classeRepository);
  const updateClasseController = new UpdateClasseByIdController(updateClasseByIdService);

  return updateClasseController
}




export { makeUpdateClasseByIdAdapter }
