import { userDTO } from "@/data/dtos";

export interface IUserRepository {
  find: () => Promise<userDTO[]>;
  findByEmail: (email:string) => Promise<userDTO | any>;
  create: ({ name, email, password }: userDTO) => Promise<Omit<userDTO, 'password'>>;
}
