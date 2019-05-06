import * as db from '../model';

export async function getOne() {
  
}
export async function getMany(req, res) {
  const tasks = await db.Task
    .find({})
    .populate({
      path: 'subtasks',
      model: 'Subtask'
    })
    .catch(error => console.error(error));

  console.log(tasks);

  res.json(tasks);
}
export async function update() {

}
export async function destroy() {

}
