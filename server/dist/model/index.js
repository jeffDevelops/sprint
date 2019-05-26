"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const determineDbHost_1 = require("../environments/determineDbHost");
const Subtask_1 = require("./Subtask");
exports.Subtask = Subtask_1.default;
const Task_1 = require("./Task");
exports.Task = Task_1.default;
const host = determineDbHost_1.default();
if (host instanceof Error) {
    console.error("Exiting because DB Host not configured.");
    process.exit();
}
else {
    mongoose
        .connect(host, { useFindAndModify: false, useNewUrlParser: true })
        .then(() => console.log("Connection to MongoDB Successful"))
        .catch((error) => console.log("Could not connect to database: ", error));
}
//# sourceMappingURL=index.js.map