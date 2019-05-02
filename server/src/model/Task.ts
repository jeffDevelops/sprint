import { Schema, model } from 'mongoose';

const TaskSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  complete: {
    type: Boolean,
    default: false,
  },
  subtasks: [{
    type: Schema.Types.ObjectId,
  }],
});

export default model('Task', TaskSchema);

