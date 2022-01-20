import { Router } from 'express'
import { 
  makeCreateClasseAdapter,
  makeListClasseAdapter, 
  makeListClasseByIdAdapter,
  makeUpdateClasseByIdAdapter,
  makeDeleteClasseByIdAdapter
} from "@/main/adapters";

import  { authUserJwtMiddleware } from '@/main/setup/middlewares';


const classeRouter = Router();
classeRouter.post('/classes', authUserJwtMiddleware, async (request, response) => {
  const result = await makeCreateClasseAdapter().handle(request);
      
  return response.status(result.statusCode).json(result.body)
})


classeRouter.get('/classes', async (request, response) => {
  const result = await makeListClasseAdapter().handle(request);
  return   response.status(result.statusCode).json(result.body)
})

classeRouter.get('/classes/:id', async (request, response) => {
  const result = await makeListClasseByIdAdapter().handle(request);
  return   response.status(result.statusCode).json(result.body)
})

classeRouter.put('/classes/:id', async (request, response) => {
  const result = await makeUpdateClasseByIdAdapter().handle(request);
  return   response.status(result.statusCode).json({ message : result.body})
})

classeRouter.delete('/classes/:id', async (request, response) => {
  const result = await makeDeleteClasseByIdAdapter().handle(request);
  return   response.status(result.statusCode).json({ message : result.body})
})



export { classeRouter }
