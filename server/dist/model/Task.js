"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const TaskSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    description: String,
    complete: {
        type: Boolean,
        default: false,
    },
    subtasks: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Subtask",
        }],
});
exports.default = mongoose_1.model("Task", TaskSchema);
//# sourceMappingURL=Task.js.map