import express from 'express';
import cors from 'cors';
import { Calculator } from './src/Calculator';
import { AdittionStrategy } from './src/AdittionStrategy';  
import { SubstractionStrategy } from './src/SubstractionStrategy';
import { MultiplicationStrategy } from './src/MultiplicationStrategy';
import { DivisionStrategy } from './src/DivisionStrategy';
import { MemoryStorage } from './src/MemoryStorage';
import{ setupDb, openDb } from './src/database';       


//create the instance of the API
const app=express();
//Enable CORS middleware
app.use(cors());
//It is a built-in middleware that analyzes incoming requests in JSON format.
app.use(express.json());

//initialize the database
setupDb();

//History endpoint to get the calculation history from the database
console.log('before the route  /history defination');

app.get('/history', async (req, res) => {
  console.log('Received request for /history');
  const db = await openDb();
  const history = await db.all('SELECT * FROM calculations ORDER BY timestamp DESC');
  res.json(history);
});

console.log('after the route  /history defination');

//Route to perform calculations
app.post('/calculate',async (req,res)=>{
    const { num1, num2, operation } = req.body;
    console.log(`Received calculation request: ${num1} ${operation} ${num2}`);

    //select the strategy based on the operation
    let strategy;
    switch (operation) {
        case '+':
            strategy= new AdittionStrategy();
            break;
        case '-':
            strategy=new SubstractionStrategy();
            break;
        case '*':
            strategy=new MultiplicationStrategy();
            break;
        case '/':
            strategy=new DivisionStrategy();
            break;
        default:
            return res.json({result: 'Invalid operation'});

         console.log('Estrategia', strategy);
    }
    
    //use the calculator to perform the calculation (POO)
    const memoryStorage = new MemoryStorage();
    const calculator=new Calculator(strategy, memoryStorage);
    const result = calculator.calculate(num1, num2);
    
    //Save the operation and result in the database
    const db= await openDb();
    await db.run(
        'INSERT INTO calculations (num1, num2, operation, result) VALUES (?,?,?,?)',
        num1, num2, operation, result   
    );

    res.json({result});
});

//start the API
app.listen(4000,()=>{
    console.log('API listening on http://localhost:4000');
});