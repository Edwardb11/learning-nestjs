import { Document } from 'mongoose';
// hereda propiedades de document de mongosee puede ser una tarea o un documento
export interface Task extends Document {
  id?: number;
  title: string;
  description: string;
  done: boolean;
}
