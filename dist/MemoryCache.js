"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryCache = void 0;
const Record_1 = require("./Record");
class MemoryCache {
    stack = new Record_1.Record();
    save(value) {
        this.stack.push(value);
    }
    recall() {
        if (this.stack.isEmpty()) {
            throw new Error("No values in memory cache.");
        }
        const value = this.stack.pop();
        this.stack.push(value);
        return value;
    }
    pop() {
        if (this.stack.isEmpty()) {
            throw new Error("No values to pop in memory cache.");
        }
        return this.stack.pop();
    }
}
exports.MemoryCache = MemoryCache;
//# sourceMappingURL=MemoryCache.js.map