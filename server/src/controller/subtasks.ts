import * as db from "../model";

export async function create(req, res): Promise<void> {
  console.log(req.body);
  const subtask = await db.Subtask
    .create(req.body)
    .catch((error) => console.error(error));

  res.json(subtask);
}

// export async function getOne() {

// }

export async function getMany(req, res): Promise<void> {
  const subtasks = await db.Subtask
    .find({})
    .catch((error) => console.error(error));

  res.json(subtasks);
}

export async function update(req, res): Promise<void> {
  const { body } = req;
  const updatedSubtask = await db.Subtask
    .findOneAndUpdate({ _id: req.params.id }, { $set: body }, { new: true })
    .catch((error) => console.error(error));

  res.json(updatedSubtask);
}

// export async function destroy() {

// }
