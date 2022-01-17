import { ICreateUserUseCase } from "@/domain/use-cases";
import { IUserRepository } from '@/data/contracts';
import { userDTO } from '@/data/dtos';
import { InvalideParamsError, AlreadyExists } from "@/domain/errors"


import { isValidName, isValidEmail, isValidPassword } from '@/shared/validators';
import { Either, left, right } from '@/shared/error-handler/either';


export class CreateUserService implements ICreateUserUseCase{
  constructor(private readonly userRepository:IUserRepository){}
  
  async execute({ name, email, password }: userDTO): Promise<Either<InvalideParamsError| AlreadyExists, userDTO>>{
    
    if(isValidEmail(email)){
      return left(new InvalideParamsError(email))
    }
    
    if(isValidName(name)){
      return left(new InvalideParamsError(name))
    }
    
    if(isValidPassword(password)) {
      return left(new InvalideParamsError('password'))
    }

    const userOrNull = await this.userRepository.findByEmail(email);

    if(!userOrNull){
      return left(new AlreadyExists('user'));
    }

    const user = await this.userRepository.create({ name, password, email });

    return right(user)
  }
}
