import { Schema, model } from 'mongoose';

const Subtask: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  complete: {
    type: Boolean,
    default: false,
  },
  points: {
    type: Number,
    required: true,
  },
  belongsToTask: {
    type: Schema.Types.ObjectId,
    ref: 'task',
  }
});

export default model('Subtask', Subtask);