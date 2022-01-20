import { ILoginUserUseCase } from "@/domain/use-cases"
import { IController } from "@/presentation/contracts";
import { httpResponse } from "@/presentation/contracts/http"
import { badRequest, create } from '@/presentation/contracts/http'

import { Request } from "express";

export class LoginUserController implements IController{
  constructor(private readonly loginUserUseCase: ILoginUserUseCase){}

  async handle(request: Request): Promise<httpResponse>{
    const { email, password } = request.body
    const userOrError =  await this.loginUserUseCase.execute({ email, password });

    if(userOrError.isLeft()){
      return badRequest(userOrError.value.message);
    }

    return create(userOrError.value);
    
  }
}
