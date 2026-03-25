import {MyNode} from "./MyNode";

export class Record<T>{
    private _head:MyNode<T>;
    
    public constructor(){
        this._head= undefined as unknown as MyNode<T>;
    }
    public push(value:T):void{
        const newNode =new MyNode<T>(value);
        newNode.next=this._head;
        this._head=newNode;
    }

    public pop():T | undefined{
        if (this.isEmpty()){
            return undefined;
        }
        const value=this._head.value;
        this._head=this._head.next;
        return value;
    }

    public isEmpty():boolean{
        return this._head===undefined;
    }


}