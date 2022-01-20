import { CreateCommentService } from '../../data/services';
import {  ClasseRepository, CommentRepository } from '../../infra/repositories';
import {  CreateCommentController } from '../../presentation/controllers'
import { IController } from '../../presentation/contracts'

const makeCreateCommintAdapter = () :IController=> {
  const classeRepository = new ClasseRepository();
  const commentRepository = new CommentRepository();
  const createCommentService  = new CreateCommentService(commentRepository, classeRepository);
  const createCommintController = new CreateCommentController(createCommentService);

  return createCommintController
}




export { makeCreateCommintAdapter }
