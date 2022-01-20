import { ICreateCommentUseCase } from "@/domain/use-cases";
import { IController } from "@/presentation/contracts";
import { httpResponse } from "@/presentation/contracts/http"
import { badRequest, create } from '@/presentation/contracts/http'

import { Request } from "express";

export class CreateCommentController implements IController{
  constructor(private readonly createCommentUseCase: ICreateCommentUseCase){}

  async handle(request: Request): Promise<httpResponse>{
    const { id } = request.params
    const { comment, date_created }  = request.body;

    const commentOrError = await this.createCommentUseCase.execute({ id_class:id, comment, date_created  });

    if(commentOrError.isLeft()){
      return badRequest(commentOrError.value.message);
    }

    return create(commentOrError.value);
    
  }
}
