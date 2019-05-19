import { Router } from 'express';
import { create, getOne, getMany, update, destroy } from '../controller/subtasks';

const router: Router = Router();

router.route('/:id')
  .post(create)
  .put(update);

export default router;