import * as mongoose from "mongoose";
import determineDbHost from "../environments/determineDbHost";

import Subtask from "./Subtask";
import Task from "./Task";

const host: (string | Error) = determineDbHost();
if (host instanceof Error) {
  console.error("Exiting because DB Host not configured.");
  process.exit();
} else {
  mongoose
    .connect(host, { useFindAndModify: false, useNewUrlParser: true })
    .then(() => console.log("Connection to MongoDB Successful"))
    .catch((error) => console.log("Could not connect to database: ", error));
}

export { Task, Subtask };
