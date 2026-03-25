"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
class Calculator {
    operationStrategy;
    memoryStorage = undefined;
    constructor(operationStrategy, memoryStorage) {
        this.operationStrategy = operationStrategy;
        this.memoryStorage = memoryStorage || undefined;
    }
    setOperationStrategy(strategy) {
        this.operationStrategy = strategy;
    }
    setMemoryStorage(storage) {
        this.memoryStorage = storage;
    }
    calculate(a, b) {
        return this.operationStrategy.execute(a, b);
    }
    saveToMemory(value) {
        if (this.memoryStorage) {
            this.memoryStorage.save(value);
        }
        else {
            throw new Error("Memory storage strategy not set.");
        }
    }
    recallMemory() {
        if (this.memoryStorage) {
            return this.memoryStorage.recall();
        }
        else {
            throw new Error("Memory storage strategy not set.");
        }
    }
}
exports.Calculator = Calculator;
//# sourceMappingURL=Calculator.js.map