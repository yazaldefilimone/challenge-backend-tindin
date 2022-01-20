import { ILoginUserUseCase  } from "@/domain/use-cases";
import { IUserRepository } from '@/data/contracts';
import { userDTO } from '@/data/dtos';
import { InvalideParamsError, AlreadyExists } from "@/domain/errors"
import { compareValue, createJWT } from '@/shared/security'

import {isValidEmail, isValidPassword } from '@/shared/validators';
import { Either, left, right } from '@/shared/error-handler/either';


export class LoginUserService implements ILoginUserUseCase{
  constructor(private readonly userRepository:IUserRepository){}
  
  async execute({  email, password }: any): Promise<Either<InvalideParamsError| AlreadyExists, Omit<userDTO, 'password'>>>{
    
    if(!isValidEmail(email)){
      return left(new InvalideParamsError(email))
    }
     
    if(!isValidPassword(password)) {
      return left(new InvalideParamsError('password'))
    }


    const userOrNull = await this.userRepository.findByEmail(email);

    if(!userOrNull){
      return left(new AlreadyExists('user'));
    }
    


    if(!await compareValue(password, userOrNull.password)){
      return left(new InvalideParamsError('password'))
    }

    const user = {
      name:userOrNull.name,
      email:userOrNull.email,
      _id:userOrNull._id
    }
    const token = await createJWT( { user: userOrNull._id } );




    return right({
      ...user,
      token
    })
  }
}
