import { IOperationStrategy } from "./IOperationStrategy";

export class AdittionStrategy implements IOperationStrategy {
    
    execute(a: number, b: number): number {
        return a + b;
    }
}