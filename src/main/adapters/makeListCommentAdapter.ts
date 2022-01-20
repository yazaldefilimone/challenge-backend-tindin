import { ListCommentService } from '../../data/services';
import {  ClasseRepository, CommentRepository } from '../../infra/repositories';
import {  ListCommentController } from '../../presentation/controllers'
import { IController } from '../../presentation/contracts'

const makeListCommintAdapter = () :IController=> {
  const classeRepository = new ClasseRepository();
  const commentRepository = new CommentRepository();
  const listCommentService  = new ListCommentService(classeRepository);
  const listCommintController = new ListCommentController(listCommentService);

  return listCommintController
}




export { makeListCommintAdapter }
