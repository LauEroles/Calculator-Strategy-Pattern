"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyNode = void 0;
class MyNode {
    _value;
    _next;
    constructor(value) {
        this._value = value;
        this._next = undefined;
    }
    get value() {
        return this._value;
    }
    get next() {
        return this._next;
    }
    set next(node) {
        this._next = node;
    }
}
exports.MyNode = MyNode;
//# sourceMappingURL=MyNode.js.map