import { Router } from "express";
import { create, /* destroy, */ getMany, /* getOne,*/ update } from "../controller/tasks";

const router: Router = Router();

router.route("/")
  .get(getMany)
  .post(create);

router.route("/:id")
  .put(update);

export default router;
