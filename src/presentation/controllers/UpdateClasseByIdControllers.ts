import { IUpdateClasseByIdUseCase } from "@/domain/use-cases"
import { IController } from "@/presentation/contracts";
import { httpResponse } from "@/presentation/contracts/http"
import { serverError, badRequest } from '@/presentation/contracts/http'

import { Request } from "express";

export class UpdateClasseByIdController implements IController{
  constructor(private readonly updateClasseByIdUseCase: IUpdateClasseByIdUseCase){}
  async handle(request: Request): Promise<httpResponse>{
    try{
      const { id } = request.params;
      const { name, video, description, date_init, date_end, date_update, total_comments } = request.body
      const classeOrError = await this.updateClasseByIdUseCase.execute(id,{
        name,
        video,
        description,
        date_end,
        date_init,
        date_update,
        total_comments
      });

      if(classeOrError.isLeft()){
        return badRequest(classeOrError.value.message)
      }

      return {
        statusCode:200,
        body:'update sucessfully!!'
      };

    }catch(error){

     return  serverError()
    }
    
  }
}
