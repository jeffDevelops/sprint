import { Router } from "express";
import { create, /* destroy, */ getMany, /* getOne, */ update } from "../controller/subtasks";

const router: Router = Router();

router.route("/:id")
  .post(create)
  .put(update);

export default router;
