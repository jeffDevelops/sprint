"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const subtasks_1 = require("./subtasks");
const tasks_1 = require("./tasks");
const router = express_1.Router();
router.use("/tasks", tasks_1.default);
router.use("/subtasks", subtasks_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map