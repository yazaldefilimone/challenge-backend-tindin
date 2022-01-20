import { Model, Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { commentDTO } from "@/data/dtos";


const commentSchema = new mongoose.Schema(
  {
    id_class:{
      type: mongoose.Schema.Types.ObjectId,
      require:true,
      ref: "classes"
    },
    comment:{
      type:String,
      require:true
    },
    date_created:{
      type:String,
      require:true
    }
  },
  {
    timestamps:true
  }
)
interface commentModel extends Omit<commentDTO, '_id'>, Document{}

const CommentMongoModel:Model<commentModel> = mongoose.model<commentModel>('comments', commentSchema); 


export { CommentMongoModel }



