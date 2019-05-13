import { Router } from 'express';
import { getOne, getMany, update, destroy } from '../controller/subtasks';

const router: Router = Router();

router.route('/:id')
  .put(update);

export default router;