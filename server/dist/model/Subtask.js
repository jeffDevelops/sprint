"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Task_1 = require("./Task");
const Subtask = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    description: String,
    complete: {
        type: Boolean,
        default: false,
    },
    points: {
        type: Number,
        required: true,
    },
    belongsToTask: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "task",
    },
});
Subtask.pre("save", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const subtask = this;
        console.log(subtask.belongsToTask);
        const updatedTask = yield Task_1.default.findOneAndUpdate({ _id: subtask.belongsToTask }, { $push: { subtasks: subtask._id } }).catch((error) => {
            console.error(error);
            next(error);
        });
        console.log({ updatedTask });
        return next(null);
    });
});
exports.default = mongoose_1.model("Subtask", Subtask);
//# sourceMappingURL=Subtask.js.map