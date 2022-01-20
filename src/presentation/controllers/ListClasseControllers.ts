import { IListClasseUseCase } from "@/domain/use-cases"
import { IController } from "@/presentation/contracts";
import { httpResponse } from "@/presentation/contracts/http"
import { serverError, ok } from '@/presentation/contracts/http'
import { serializePagination } from '../../shared/utils'
import { Request } from "express";

export class ListClasseController implements IController{
  constructor(private readonly createClasseUseCase: IListClasseUseCase){}
  async handle(request: Request): Promise<httpResponse>{
    try{
      const page = request.query.page as any;
      const limit = request.query.limit as any;


      const classes = await this.createClasseUseCase.execute();

      const pagination = serializePagination({ page, limit })

      return ok(classes.slice(pagination.page, pagination.limit));

    }catch(error){

     return  serverError()
    }
    
  }
}
