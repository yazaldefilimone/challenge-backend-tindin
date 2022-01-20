import express from 'express';
import { createUserRouter, classeRouter, createCommentRouter } from '../setup/routes';
import { authUserJwtMiddleware } from '../setup/middlewares'
const app = express();
app.use(express.json());



app.use(createUserRouter)
app.use(authUserJwtMiddleware)
app.use(classeRouter)
app.use(createCommentRouter)
export default app



