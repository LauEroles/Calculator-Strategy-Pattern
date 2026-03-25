import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export async function openDb(){
    return open({
        filename: './calculadora.db',
        driver: sqlite3.Database    
    });
}

export async function setupDb(){
    const db = await openDb();
       await db.exec(`
        CREATE TABLE IF NOT EXISTS calculations (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        num1 REAL,
        num2 REAL,
        operation TEXT,
        result REAL,
        timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
    );
`); 
}