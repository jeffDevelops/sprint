import * as db from '../model';

export async function getOne() {
  
}

export async function getMany(req, res) {
  const subtasks = await db.Subtask
    .find({})
    .catch(error => console.error(error));

  res.json(subtasks);
}

export async function update(req: { body: { body: any; }; params: { id: any; }; }, res: { json: (arg0: void) => void; }) {
  const { body } = req.body;
  console.log('UPDATING SUBTASK');
  console.log({ body })
  const updatedSubtask = await db.Subtask
    .findOneAndUpdate({ _id: req.params.id }, { $set: { body }}, { new: true })
    .catch(error => console.error(error));

  console.log({ updatedSubtask })

  res.json(updatedSubtask);
}

export async function destroy() {

}
