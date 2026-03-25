"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculator_1 = require("./calculator");
const AdittionStrategy_1 = require("./AdittionStrategy");
const SubstractionStrategy_1 = require("./SubstractionStrategy");
const MultiplicationStrategy_1 = require("./MultiplicationStrategy");
const DivisionStrategy_1 = require("./DivisionStrategy");
const MemoryStorage_1 = require("./MemoryStorage");
function main() {
    const adittion = new AdittionStrategy_1.AdittionStrategy();
    const substraction = new SubstractionStrategy_1.SubstractionStrategy();
    const multiplication = new MultiplicationStrategy_1.MultiplicationStrategy();
    const division = new DivisionStrategy_1.DivisionStrategy();
    const memoryStorage = new MemoryStorage_1.MemoryStorage();
    const calculator = new calculator_1.Calculator(adittion, memoryStorage);
    calculator.setOperationStrategy(adittion);
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
    calculator.setMemoryStorage(new MemoryStorage_1.MemoryStorage());
    calculator.saveToMemory(resultAdittion);
    calculator.saveToMemory(resultSubstraction);
    calculator.saveToMemory(resultMultiplication);
    calculator.saveToMemory(resultDivision);
    const recalledValue = calculator.recallMemory();
    console.log(`Recalled Value: ${recalledValue}`);
}
main();
//# sourceMappingURL=index.js.map