import { classeDTO, commentDTO } from "@/data/dtos";

export interface IClasseRepository {
  find: () => Promise<classeDTO[]>;
  findByLink: (video:string) => Promise<classeDTO | null >;
  findById: (_id:string ) => Promise<classeDTO | undefined>;
  updateById: (id:string, { name, description, date_end, date_init, date_update, total_comments, video }: classeDTO ) => Promise<classeDTO | null>;
  deleteById: (id:string) => Promise<null>;
  create: ({ name, description, date_end, date_init, date_update, total_comments, video }: classeDTO) => Promise<classeDTO>;
  pushByComment: (id:string,{ comment, id_class, date_created }:commentDTO) => Promise<classeDTO | null>;
  removeById:(id_classe:string, id:string ) => Promise<classeDTO | any>
}
