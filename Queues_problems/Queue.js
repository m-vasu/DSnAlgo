class Queue {
    constructor(){
        this.items={}
        this.rear = 0
        this.front = 0
    }

    isEmpty(){
        return this.rear - this.front === 0
    }

    enqueue(element){
        this.items[this.rear] = element
        this.rear++
    }
    dequeue(){
        const item = this.items[this.front]
        delete this.items[this.front]
        this.front++
        return item
    }
    peek(){
        return this.items[this.front]
    }

}