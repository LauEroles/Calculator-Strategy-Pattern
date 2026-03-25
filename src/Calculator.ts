import { IOperationStrategy } from "./IOperationStrategy";
import { IMemoryStorage } from "./IMemoryStorage";


export class Calculator {  

    private operationStrategy: IOperationStrategy;
    private memoryStorage: IMemoryStorage | undefined = undefined;


    constructor(operationStrategy: IOperationStrategy, memoryStorage?: IMemoryStorage) {
        this.operationStrategy = operationStrategy;
        this.memoryStorage = memoryStorage || undefined;
    }

    public setOperationStrategy(strategy: IOperationStrategy): void {
        this.operationStrategy = strategy;
    }

    public setMemoryStorage(storage: IMemoryStorage): void {
        this.memoryStorage = storage;
    }

    public calculate(a: number, b: number): number {
        return this.operationStrategy.execute(a, b);
    }

    public saveToMemory(value: number): void {
        if (this.memoryStorage) {
            this.memoryStorage.save(value);
        } else {
            throw new Error("Memory storage strategy not set.");
        }
    }

    public recallMemory(): number {
        if (this.memoryStorage) {
            return this.memoryStorage.recall();
        } else {
            throw new Error("Memory storage strategy not set.");
        }
    }   


}

//TODO implement unit testing