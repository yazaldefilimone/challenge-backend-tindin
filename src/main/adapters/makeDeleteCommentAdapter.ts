import { DeleteCommentService } from '@/data/services';
import {  ClasseRepository, CommentRepository } from '@/infra/repositories';
import {  DeleteCommentController } from '@/presentation/controllers'
import { IController } from '@/presentation/contracts'

const makeDeleteCommintAdapter = () :IController=> {
  const classeRepository = new ClasseRepository();
  const commentRepository = new CommentRepository();
  const deleteCommentService  = new DeleteCommentService(commentRepository, classeRepository);
  const deleteCommintController = new DeleteCommentController(deleteCommentService);

  return deleteCommintController
}




export { makeDeleteCommintAdapter }
