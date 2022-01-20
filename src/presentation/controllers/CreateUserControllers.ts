import { ICreateUserUseCase } from "../../domain/use-cases"
import { IController } from "../../presentation/contracts";
import { httpResponse } from "../../presentation/contracts/http"
import { badRequest, create } from '../../presentation/contracts/http'

import { Request } from "express";

export class CreateUserController implements IController{
  constructor(private readonly createUserUseCase: ICreateUserUseCase){}

  async handle(request: Request): Promise<httpResponse>{
    const { name, email, password }  = request.body;
    const userOrError = await this.createUserUseCase.execute({ name, email, password });

    if(userOrError.isLeft()){
      return badRequest(userOrError.value.message);
    }

    return create(userOrError.value);
    
  }
}
