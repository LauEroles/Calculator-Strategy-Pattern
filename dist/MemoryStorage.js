"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryStorage = void 0;
class MemoryStorage {
    value = 0;
    save(value) {
        this.value = value;
    }
    recall() {
        return this.value;
    }
}
exports.MemoryStorage = MemoryStorage;
//# sourceMappingURL=MemoryStorage.js.map