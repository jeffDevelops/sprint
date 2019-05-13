import { Router } from 'express';
import tasks from './tasks';
import subtasks from './subtasks';

const router = Router();

router.use('/tasks', tasks);
router.use('/subtasks', subtasks);

export default router;
