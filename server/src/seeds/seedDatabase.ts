import * as db from "../model/";
import subtasks from "./subtasks";
import tasksToSeed from "./tasks";

async function dropDatabase(): Promise<void> {
  await db.Task.deleteMany({});
  await db.Subtask.deleteMany({});
  console.log("Dropped collections");
  return;
}

async function seedTasks(): Promise<any> {
  return await db.Task
    .create(tasksToSeed)
    .catch((error) => console.error("Something went wrong inserting tasks: ", error));
}

async function seedSubtasks(tasks): Promise<any> {
  return await Promise.all(tasks.map(async (task) => {
    const associatedSubtasks: any[] = subtasks[task.name];

    if (!associatedSubtasks) { return; }

    // Add Task ref, now that Task _id is known
    associatedSubtasks.forEach((subtask) => subtask.belongsToTask = task._id);

    const dbSubtasks = await db.Subtask
      .create(associatedSubtasks)
      .catch((error) => new Error(`Something went wrong inserting subtasks for a given task: ${error}`));

    if (dbSubtasks instanceof Error) { return console.error(dbSubtasks); }

    return await db.Task.findOneAndUpdate(
      { _id: task._id },
      {
        $set: {
          subtasks: dbSubtasks.map((subtask) => subtask._id),
        },
      },
      {
        new: true,
      })
      .catch((error) => console.error("Something went wrong inserting: ", error));

  }));
}

dropDatabase()
  .then(() => seedTasks())
  .then((tasks) => seedSubtasks(tasks))
  .then(() => process.exit())
  .catch((error) => console.error(error));
