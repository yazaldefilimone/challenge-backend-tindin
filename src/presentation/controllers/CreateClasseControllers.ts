import { ICreateClasseUseCase } from "@/domain/use-cases"
import { IController } from "@/presentation/contracts";
import { httpResponse } from "@/presentation/contracts/http"
import { badRequest, create } from '@/presentation/contracts/http'

import { Request } from "express";

export class CreateClasseController implements IController{
  constructor(private readonly createClasseUseCase: ICreateClasseUseCase){}

  async handle(request: Request): Promise<httpResponse>{
    const { name,video, description, date_init, date_end, total_comments, date_update }  = request.body;
    const userOrError = await this.createClasseUseCase.execute({ name, description,total_comments,  date_update, date_init, date_end, video });

    if(userOrError.isLeft()){
      return badRequest(userOrError.value.message);
    }

    return create(userOrError.value);
    
  }
}
