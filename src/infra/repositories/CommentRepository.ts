import { ICommentRepository } from '@/data/contracts';
import { commentDTO  } from '@/data/dtos';

import { CommentMongoModel, ClasseMongoModel} from '@/infra/models'

export class CommentRepository implements ICommentRepository{

  async create({ comment, id_class, date_created }: commentDTO): Promise<commentDTO>{
  
    const commented = await CommentMongoModel.create({ comment, date_created, id_class })  
     
    return commented
  }

  async find():Promise<commentDTO[]>{
    const  comments = await CommentMongoModel.find();

    return comments
  }

  async findById(id: string) :Promise<commentDTO | any>{
    const CommentOrNull = await CommentMongoModel.findOne({ id })
   
    return CommentOrNull;
  }



}
