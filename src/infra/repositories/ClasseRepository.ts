import { IClasseRepository } from "@/data/contracts";
import { classeDTO, commentDTO } from '@/data/dtos'
import { ClasseMongoModel, CommentMongoModel } from "../../infra/models";



export class ClasseRepository implements IClasseRepository{
  constructor(){
  }

  async pushByComment(id:string,{ comment, id_class, date_created }:commentDTO):Promise<classeDTO | any>{
    
    const commentCreate = new CommentMongoModel({ comment, id_class, date_created });
    const classes = await this.findById(id);

    classes.comments.push(commentCreate);
    classes.last_comments = commentCreate
    classes.total_comments = classes.total_comments + 1
    
    const result = await ClasseMongoModel.findByIdAndUpdate(id, classes, { new:true })

    return result
 
  }
  async removeById(id_classe:string, id:string ) : Promise<classeDTO | any>{
    await CommentMongoModel.findByIdAndDelete(id);

    const Classes = await this.findById(id_classe);

    const newComments = Classes.comments.filter((item:any) => item?._id === id)
    if(Classes.last_comments._id === id){
      Classes.last_comments = newComments[-1];
    }

    Classes.comments = newComments;

    Classes.total_comments = Classes.total_comments -1;
    const classes  = await ClasseMongoModel.findByIdAndUpdate(id_classe, Classes , { new:true })

    return classes
  }


  async find (): Promise<classeDTO[]>{
    return await ClasseMongoModel.find()
  }

  async deleteById(id: string): Promise<null>{
    
    await ClasseMongoModel.findByIdAndDelete(id)

    return null
  }
  
  async findById (_id: string) : Promise<classeDTO | any>{
    const classeOrNull = await ClasseMongoModel.findById(_id);
    return classeOrNull ? classeOrNull : null
  }

  async updateById(id: string, { name, total_comments, video, description, date_init, date_end, date_update } : classeDTO) : Promise<classeDTO | null>{
      
      let prop = {
      name,
      total_comments,
      video,
      description,
      date_init,
      date_end,
      date_update,
    }

    const classes  = await ClasseMongoModel.findByIdAndUpdate(id, prop , { new:true })

    return classes
  }

  async findByLink (video: string) : Promise<classeDTO | any>{

    const classeOrNull = await ClasseMongoModel.findOne({ video });
    return classeOrNull
  }

  async create({ name,total_comments, video, description, date_init, date_end, date_update }: classeDTO) : Promise<classeDTO>{
    const classe = await ClasseMongoModel.create({
      name,
      total_comments,
      video,
      description,
      date_init,
      date_end,
      date_update,
    })
    return classe;
  }

  
}
