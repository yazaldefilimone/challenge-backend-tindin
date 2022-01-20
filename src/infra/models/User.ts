import { Model, Document } from 'mongoose';
import * as monoose from 'mongoose';
import { userDTO } from "@/data/dtos";


const userSchema = new monoose.Schema(
  {
    name:{
    type:String,
    require:true
    },
    email:{
      type:String,
      require:true
    },
    password:{
      type:String,
      require:true
    }
  }
)
interface UserModel extends Omit<userDTO, '_id'>, Document{}

const UserMongoModel:Model<UserModel> = monoose.model<UserModel>('users', userSchema); 


export { UserMongoModel }



