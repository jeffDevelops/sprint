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
const db = require("../model/");
const subtasks_1 = require("./subtasks");
const tasks_1 = require("./tasks");
function dropDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        yield db.Task.deleteMany({});
        yield db.Subtask.deleteMany({});
        console.log("Dropped collections");
        return;
    });
}
function seedTasks() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield db.Task
            .create(tasks_1.default)
            .catch((error) => console.error("Something went wrong inserting tasks: ", error));
    });
}
function seedSubtasks(tasks) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield Promise.all(tasks.map((task) => __awaiter(this, void 0, void 0, function* () {
            const associatedSubtasks = subtasks_1.default[task.name];
            if (!associatedSubtasks) {
                return;
            }
            // Add Task ref, now that Task _id is known
            associatedSubtasks.forEach((subtask) => subtask.belongsToTask = task._id);
            const dbSubtasks = yield db.Subtask
                .create(associatedSubtasks)
                .catch((error) => new Error(`Something went wrong inserting subtasks for a given task: ${error}`));
            if (dbSubtasks instanceof Error) {
                return console.error(dbSubtasks);
            }
            return yield db.Task.findOneAndUpdate({ _id: task._id }, {
                $set: {
                    subtasks: dbSubtasks.map((subtask) => subtask._id),
                },
            }, {
                new: true,
            })
                .catch((error) => console.error("Something went wrong inserting: ", error));
        })));
    });
}
dropDatabase()
    .then(() => seedTasks())
    .then((tasks) => seedSubtasks(tasks))
    .then(() => process.exit())
    .catch((error) => console.error(error));
//# sourceMappingURL=seedDatabase.js.map