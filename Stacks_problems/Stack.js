class Stack {
    constructor(){
        this.item = []
    }
    push(element){
        this.item.push(element)
    }
    pop(element){
        this.item.pop(element)
    }
    peek(){
       return this.item[this.item.length -1]
    }
    size(){
        return this.item.length
    }
    isEmpty(){
        return this.item.length === 0
    }
    print(){
        return console.log(this.item.toString);
    }

}

const stack = new Stack()

console.log(stack.isEmpty())