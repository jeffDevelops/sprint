import { Router } from 'express';
import { getOne, getMany, update, destroy } from '../controller/tasks';

const router: Router = Router();

router.route('/')
  .get(getMany);

export default router;