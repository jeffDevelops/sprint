"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1() {
    switch (process.env.NODE_ENV) {
        case "staging": {
            console.error("Environment not configured to receive requests from anywhere.");
            return [
            // TODO:
            ];
        }
        case "production": {
            console.error("Environment not configured to receive requests from anywhere.");
            return [
            // TODO:
            ];
        }
        default: return [
            "http://localhost:3001",
        ];
    }
}
exports.default = default_1;
//# sourceMappingURL=originWhitelist.js.map