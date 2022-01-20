import { Model, Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { classeDTO } from "@/data/dtos";

const classeSchema = new mongoose.Schema(
  {
    name:{
    type:String,
    require:true
    },
    last_comments:{
      type:Object,
      require:false
    },
    comments:[{
      type:Object,
      require:false
    }],
    description:{
      type:String,
      require:true
    },
    video:{
      type:String,
      require:true,
      unique:true
    },
    date_init:{
      type:Date,
      default:Date.now,
      require:true
    },
    date_end:{
      type:Date,
      require:true
    },
    date_update:{
      type:Date,
      require:true
    },
    total_comments:{
      type:Number,
      require:true
    }
  }
)

interface ClasseModel extends Omit<classeDTO, '_id'>, Document{}

const ClasseMongoModel:Model<ClasseModel> = mongoose.model<ClasseModel>('classes', classeSchema);

export { ClasseMongoModel }



