import express from 'express';
import { createUserRouter } from '../setup/routes/CreateUserRouter';


const app = express();
app.use(express.json());
app.use(createUserRouter)
export default app



