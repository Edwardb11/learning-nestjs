import { Schema } from 'mongoose';

export const taskSchema = new Schema({
  title: String,
  description: String,
  done: Boolean,
});
