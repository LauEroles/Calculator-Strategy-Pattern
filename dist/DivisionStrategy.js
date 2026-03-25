"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DivisionStrategy = void 0;
class DivisionStrategy {
    execute(a, b) {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    }
}
exports.DivisionStrategy = DivisionStrategy;
//# sourceMappingURL=DivisionStrategy.js.map