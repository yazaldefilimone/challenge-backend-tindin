import { Express ,Router } from 'express'
import { 
  makeListCommintAdapter,
  makeDeleteCommintAdapter,
  makeCreateCommintAdapter
} from '@/main/adapters'

const createCommentRouter = Router();

createCommentRouter.post('/classes/comment/:id', async (request, response) => {
  const result = await makeCreateCommintAdapter().handle(request);
  return response.status(result.statusCode).json(result.body)
})

createCommentRouter.delete('/classes/:id_class/:id', async (request, response) => {
  const result = await makeDeleteCommintAdapter().handle(request);
  return response.status(result.statusCode).json(result.body)
})

createCommentRouter.get('/classes/:id_class/:id', async (request, response) => {
  const result = await makeListCommintAdapter().handle(request);
  return response.status(result.statusCode).json(result.body)
})

export { createCommentRouter }
