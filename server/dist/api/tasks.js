"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tasks_1 = require("../controller/tasks");
const router = express_1.Router();
router.route("/")
    .get(tasks_1.getMany)
    .post(tasks_1.create);
router.route("/:id")
    .put(tasks_1.update);
exports.default = router;
//# sourceMappingURL=tasks.js.map