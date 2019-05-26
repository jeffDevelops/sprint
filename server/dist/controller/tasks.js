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
const db = require("../model");
// export async function getOne() {
// }
function create(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        yield db.Task
            .create(req.body)
            .then((created) => res.json(created))
            .catch((error) => {
            console.error(error);
            res.status(500).json(error);
        });
    });
}
exports.create = create;
function getMany(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const tasks = yield db.Task
            .find({})
            .populate({
            model: "Subtask",
            path: "subtasks",
        })
            .catch((error) => console.error(error));
        res.json(tasks);
    });
}
exports.getMany = getMany;
function update(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(req.body);
        const updated = yield db.Task
            .findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
            .populate({
            model: "Subtask",
            path: "subtasks",
        })
            .catch((error) => {
            console.error(error);
            res.status(500).json(error);
        });
        res.json(updated);
    });
}
exports.update = update;
// export async function destroy() {
// }
//# sourceMappingURL=tasks.js.map