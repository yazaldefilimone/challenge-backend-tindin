import { IDeleteClasseByIdUseCase } from "@/domain/use-cases"
import { IController } from "@/presentation/contracts";
import { httpResponse } from "@/presentation/contracts/http"
import { serverError, badRequest } from '@/presentation/contracts/http'

import { Request } from "express";

export class DeleteClasseByIdController implements IController{
  constructor(private readonly deleteClasseByIdUseCase: IDeleteClasseByIdUseCase){}
  async handle(request: Request): Promise<httpResponse>{
    try{
      const { id } = request.params;
      const classeOrError = await this.deleteClasseByIdUseCase.execute(id);

      if(classeOrError.isLeft()){
        return badRequest(classeOrError.value.message)
      }

      return {
        statusCode:200,
        body:'delete sucessfully!!'
      };

    }catch(error){

     return  serverError()
    }
    
  }
}
