import { IListClasseByIdUseCase } from "@/domain/use-cases"
import { IController } from "@/presentation/contracts";
import { httpResponse } from "@/presentation/contracts/http"
import { serverError, ok , badRequest } from '@/presentation/contracts/http'

import { Request } from "express";

export class ListClasseByIdController implements IController{
  constructor(private readonly listClasseByIdUseCase: IListClasseByIdUseCase){}
  async handle(request: Request): Promise<httpResponse>{
    try{
      const { id } = request.params;

      const classeOrError = await this.listClasseByIdUseCase.execute(id);

      if(classeOrError.isLeft()){
        return badRequest(classeOrError.value.message)
      }

      return ok(classeOrError.value);

    }catch(error){

     return  serverError()
    }
    
  }
}
