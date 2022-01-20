import { Express ,Router } from 'express'
import { 
  makeCreateUserAdapter,
 makeLoginUserAdapter 
} from '@/main/adapters'

const createUserRouter = Router();
createUserRouter.post('/users', async (request, response) => {
  const result = await makeCreateUserAdapter().handle(request);
  return response.status(result.statusCode).json(result.body)
})


createUserRouter.post('/users/login', async (request, response) => {
  const result = await makeLoginUserAdapter().handle(request);
  return response.status(result.statusCode).json(result.body)
})

export { createUserRouter }
