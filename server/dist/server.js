"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const logger = require("morgan");
const path = require("path");
const index_1 = require("./api/index");
const originWhitelist_1 = require("./config/originWhitelist");
const port = process.env.PORT || "3000";
const app = express();
app.use(logger("combined"));
app.use(bodyParser.json());
// Configure CORS
app.use(cors({
    methods: ["GET", "POST", "PUT", "DELETE"],
    origin: (origin, next) => {
        if (originWhitelist_1.default().includes(origin)) {
            next(null, true);
        }
        else {
            next(new Error("Origin not allowed"));
        }
    },
}));
app.use("/api", index_1.default);
app.use(express.static(path.join(__dirname + "../client/build")));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "../client/build"));
});
app.listen(port, () => console.log(`Sprint API 🏃‍  on port ${port}`));
//# sourceMappingURL=server.js.map