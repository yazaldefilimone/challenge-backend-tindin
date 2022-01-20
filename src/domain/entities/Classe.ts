import { Comments  } from '@/domain/entities'
export type Classe = {
  _id?:string
  name:string;
  description:string;
  video:string;
  date_init:Date;
  date_end:Date;
  date_update:Date;
  total_comments:number;
  comments?:Array<Comments>;
  last_comments?:Comments;
}


