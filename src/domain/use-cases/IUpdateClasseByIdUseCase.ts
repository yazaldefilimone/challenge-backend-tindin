import { Classe } from '@/domain/entities';
import { Either } from '@/shared/error-handler/either'
import { NotFound } from '@/domain/errors'
export interface IUpdateClasseByIdUseCase{
  execute: (id:string, { name, date_update, total_comments, video, description, date_init, date_end, }: Classe) => Promise<Either<NotFound, Classe | null>>
}
