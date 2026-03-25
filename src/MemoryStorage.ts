import { IMemoryStorage } from "./IMemoryStorage";

export class MemoryStorage implements IMemoryStorage {

    private value:number=0;

    save(value:number):void{
        this.value=value;

    }
    recall():number{
        return this.value;
    }
    
}   


//falta implementar las clases MemoryStorage y MemoryCache que hereda de esta interface, y el diagrama de clases para mostrar esta relacion