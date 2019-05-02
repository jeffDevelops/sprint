import * as db from '../model';

export async function getOne() {
  
}
export async function getMany(req, res) {
  const tasks = await db.Task
    .find({})
    .catch(error => console.error(error));

  res.json(tasks);
}
export async function update() {

}
export async function destroy() {

}
