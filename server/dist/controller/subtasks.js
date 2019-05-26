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
function create(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(req.body);
        const subtask = yield db.Subtask
            .create(req.body)
            .catch((error) => console.error(error));
        res.json(subtask);
    });
}
exports.create = create;
// export async function getOne() {
// }
function getMany(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const subtasks = yield db.Subtask
            .find({})
            .catch((error) => console.error(error));
        res.json(subtasks);
    });
}
exports.getMany = getMany;
function update(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { body } = req;
        const updatedSubtask = yield db.Subtask
            .findOneAndUpdate({ _id: req.params.id }, { $set: body }, { new: true })
            .catch((error) => console.error(error));
        res.json(updatedSubtask);
    });
}
exports.update = update;
// export async function destroy() {
// }
//# sourceMappingURL=subtasks.js.map