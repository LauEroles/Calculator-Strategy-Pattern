import { IOperationStrategy } from "./IOperationStrategy";

export class DivisionStrategy implements IOperationStrategy {
    
    execute(a: number, b: number): number {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    }
}