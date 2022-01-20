import { IUserRepository } from '@/data/contracts';
import { userDTO  } from '@/data/dtos';

import { UserMongoModel } from '@/infra/models'

export class UserRepository implements IUserRepository{
  async create({ name, email, password }: userDTO): Promise<Omit<userDTO, 'password'>>{
  
    const user = await UserMongoModel.create({ name, email, password })  
     
    return {
      name: user.name,
      email: user.email,
      _id: user._id
    };
  }

  async find():Promise<userDTO[]>{
    const  users = await UserMongoModel.find();

    return users
  }

  async findByEmail(email: string) :Promise<userDTO | any>{
    const userOrNull = await UserMongoModel.findOne({ email })

    return userOrNull;
  }

}
