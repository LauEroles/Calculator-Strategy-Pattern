import { Calculator } from "./Calculator";
import { IOperationStrategy } from "./IOperationStrategy";
import { IMemoryStorage } from "./IMemoryStorage";
import { AdittionStrategy } from "./AdittionStrategy";
import { SubstractionStrategy } from "./SubstractionStrategy";
import { MultiplicationStrategy } from "./MultiplicationStrategy";
import { DivisionStrategy } from "./DivisionStrategy";
import { MemoryStorage } from "./MemoryStorage";


function main() {
  


    const adittion: IOperationStrategy = new AdittionStrategy(); // Example strategy, can be replaced with any other strategy        
    const substraction: IOperationStrategy = new SubstractionStrategy(); // Example strategy, can be replaced with any other strategy
    const multiplication: IOperationStrategy = new MultiplicationStrategy(); // Example strategy, can be replaced with any other strategy
    const division: IOperationStrategy = new DivisionStrategy(); // Example strategy, can be replaced with any other strategy
    
    const memoryStorage: IMemoryStorage = new MemoryStorage(); // Example memory storage, can be replaced with any other memory storage

    const calculator = new Calculator(adittion, memoryStorage);

    // Set the desired operation strategy (e.g., addition, subtraction, multiplication, division)
    calculator.setOperationStrategy(adittion);

    // Perform a calculation
    const resultAdittion = calculator.calculate(5, 3);
    console.log(`Result Adittion: ${resultAdittion}`);

    calculator.setOperationStrategy(substraction);
    const resultSubstraction = calculator.calculate(5, 3);
    console.log(`Result Substraction: ${resultSubstraction}`);

    calculator.setOperationStrategy(multiplication);
    const resultMultiplication = calculator.calculate(5, 3);
    console.log(`Result Multiplication: ${resultMultiplication}`);

    calculator.setOperationStrategy(division);
    const resultDivision = calculator.calculate(5, 3);
    console.log(`Result Division: ${resultDivision}`);      

    // Save the result to memory
    calculator.setMemoryStorage(new MemoryStorage());
    calculator.saveToMemory(resultAdittion);
    calculator.saveToMemory(resultSubstraction);
    calculator.saveToMemory(resultMultiplication);
    calculator.saveToMemory(resultDivision); 

    // Recall the value from memory
    const recalledValue = calculator.recallMemory();
    console.log(`Recalled Value: ${recalledValue}`);
}

main();


