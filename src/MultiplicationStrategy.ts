import { IOperationStrategy } from "./IOperationStrategy";

export class MultiplicationStrategy implements IOperationStrategy {    
    
    execute(a: number, b: number): number {
        return a * b;
    }
}