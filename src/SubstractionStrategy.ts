import { IOperationStrategy } from "./IOperationStrategy";

export class SubstractionStrategy implements IOperationStrategy {
    
    execute(a: number, b: number): number {
        return a - b;
    }
}

//TODO implement unit testing