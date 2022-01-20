import { Classe } from '@/domain/entities';

export interface IListClasseUseCase{
  execute: () => Promise<Classe[]>
}
