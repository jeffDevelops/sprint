import { Router } from 'express';
import tasks from './tasks';

const router = Router();

router.use('/tasks', tasks);

export default router;
