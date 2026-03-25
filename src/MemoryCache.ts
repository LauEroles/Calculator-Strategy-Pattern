import { IMemoryStorage } from "./IMemoryStorage";
import { Record } from "./Record";

//TODO improve this class to implement a stack of  structs with the value and the operation type
//to be able to recall the last value of an specific operation.

export class MemoryCache implements IMemoryStorage {
    private stack: Record<number> = new Record<number>();

    // Save the value on the stack (push)
    save(value: number): void {
        this.stack.push(value);
    }

    // Devuelve el último valor guardado (peek)
    recall(): number {
        if (this.stack.isEmpty()) {
            throw new Error("No values in memory cache.");
        }
        // For peek, make pop and then push again to keep the value in the stack
        const value = this.stack.pop();
        this.stack.push(value!);
        return value!;
    }

    // Quita y devuelve el último valor guardado (pop)
    pop(): number {
        if (this.stack.isEmpty()) {
            throw new Error("No values to pop in memory cache.");
        }
        return this.stack.pop()!;
    }
}
//falta implementar las clases MemoryStorage y MemoryCache que hereda de esta interface, y el diagrama de clases para mostrar esta relacion