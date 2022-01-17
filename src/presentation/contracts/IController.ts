import { httpResponse } from '../../presentation/contracts/http'
import { Request, Response } from 'express';

export interface IController {
  handle: (request:Request, response?:Response) => Promise<httpResponse>
}
