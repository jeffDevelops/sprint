import { Router } from "express";
import subtasks from "./subtasks";
import tasks from "./tasks";

const router = Router();

router.use("/tasks", tasks);
router.use("/subtasks", subtasks);

export default router;
