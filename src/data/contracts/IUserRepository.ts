import { userDTO } from "@/data/dtos";

export interface IUserRepository {
  find: () => Promise<userDTO[]>;
  findByEmail: (email:string) => Promise<userDTO | undefined>;
  create: ({ name, email, password }: userDTO) => Promise<userDTO>;
}
