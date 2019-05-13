import * as db from '../model';

export async function getOne() {
  
}

export async function create(req, res) {
  await db.Task
    .create(req.body)
    .then(created => res.json(created))
    .catch(error => {
      console.error(error);
      res.status(500).json(error)
    });
}

export async function getMany(req, res) {
  const tasks = await db.Task
    .find({})
    .populate({
      path: 'subtasks',
      model: 'Subtask',
    })
    .catch(error => console.error(error));

  res.json(tasks);
}

export async function update(req, res) {
  console.log(req.body);
  const updated = await db.Task
    .findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    )
    .populate({
      path: 'subtasks',
      model: 'Subtask',
    })
    .catch(error => {
      console.error(error);
      res.status(500).json(error);
    });

  res.json(updated);
}

export async function destroy() {

}
