"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Record = void 0;
const MyNode_1 = require("./MyNode");
class Record {
    _head;
    constructor() {
        this._head = undefined;
    }
    push(value) {
        const newNode = new MyNode_1.MyNode(value);
        newNode.next = this._head;
        this._head = newNode;
    }
    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        const value = this._head.value;
        this._head = this._head.next;
        return value;
    }
    isEmpty() {
        return this._head === undefined;
    }
}
exports.Record = Record;
//# sourceMappingURL=Record.js.map