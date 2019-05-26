import { Document, model, Schema} from "mongoose";
import Task from "./Task";

interface ISubtask extends Document {
  name: string;
  description: string;
  complete: boolean;
  points: number;
  belongsToTask: string;
}

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
    ref: "task",
  },
});

Subtask.pre<ISubtask>("save", async function(next) { // ! note the non-arrow function
  const subtask = this;
  console.log(subtask.belongsToTask);
  const updatedTask = await Task.findOneAndUpdate(
    { _id: subtask.belongsToTask },
    { $push: { subtasks: subtask._id } },
  ).catch((error) => {
    console.error(error);
    next(error);
  });
  console.log({updatedTask});
  return next(null);
});

export default model<ISubtask>("Subtask", Subtask);
