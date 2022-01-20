import { commentDTO } from "@/data/dtos";

export interface ICommentRepository {
  find: () => Promise<commentDTO[]>;
  findById: (id:string) => Promise<commentDTO | any>;
  create: ({ comment, date_created, id_class }: commentDTO) => Promise<commentDTO>;
}
