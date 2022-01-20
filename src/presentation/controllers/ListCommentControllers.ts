import { IListCommentUseCase } from "@/domain/use-cases";
import { IController } from "@/presentation/contracts";
import { httpResponse } from "@/presentation/contracts/http"
import { badRequest, create } from '@/presentation/contracts/http'

import { Request } from "express";

export class ListCommentController implements IController{
  constructor(private readonly listCommentUseCase: IListCommentUseCase){}

  async handle(request: Request): Promise<httpResponse>{
    const { id_class, id } = request.params

    const commentOrError = await this.listCommentUseCase.execute(id_class, id);

    if(commentOrError.isLeft()){
      return badRequest(commentOrError.value.message);
    }

    return create(commentOrError.value);
    
  }
}
