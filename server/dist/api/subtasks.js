"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const subtasks_1 = require("../controller/subtasks");
const router = express_1.Router();
router.route("/:id")
    .post(subtasks_1.create)
    .put(subtasks_1.update);
exports.default = router;
//# sourceMappingURL=subtasks.js.map