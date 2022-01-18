import { Express ,Router } from 'express'
import { makeCreateUserAdapter } from '../../adapters/makeCreateUserAdapter'

const createUserRouter = Router();
createUserRouter.post('/users', async (request, response) => {
  const result = await makeCreateUserAdapter().handle(request);
      
  return response.status(result.statusCode).json(result.body)
})


export { createUserRouter }
