import { randomUUID } from "crypto";

import { IUserRepository } from "@/data/contracts";
import { userDTO } from '@/data/dtos'

export class FakeUserRepository implements IUserRepository{
  private readonly database:userDTO[]
  constructor(){
    this.database = [];
  }

  async find (): Promise<userDTO[]>{
    return this.database;
  }

  async findByEmail (email: string) : Promise<userDTO | undefined>{
    const userOrNull = this.database.find(user => user.email === email);

    return userOrNull
  }

  async create({ name, email, password }: userDTO) : Promise<userDTO>{
    let user:userDTO = {
      _id: randomUUID(),
      name,
      email,
      password
    }
    
    this.database.push(user);

    return user;
  }
}
