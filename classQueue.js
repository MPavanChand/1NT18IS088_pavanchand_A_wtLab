class Queue {
   
    constructor(){
      
      this.data = [];
      this.rear = 0;
      this.size = 10;
    }
    
    enqueue(element) {
     if(this.rear < this.size ) {
           this.data[this.rear] = element;
           this.rear = this.rear + 1;
      }
   }
   length() {
     
      return this.rear;
   }
   isEmpty() {
    
     return this.rear === 0;
   }
  
   dequeue() {
    
      if(this.isEmpty() === false) {
           
           this.rear = this.rear-1;
           return this.data.shift();
      }
   }
   print() { 
    for(let i =0; i < this.rear; i++) {
       console.log(this.data[i]);
     }
   }
    clear() {
       this.data.length = 0;
       this.rear = 0;
    }
 }

 let queue = new Queue();
 queue.enqueue(1);
 queue.enqueue(2);
 queue.enqueue(3);
 queue.enqueue(4);

 queue.print();
 
 console.log("the length of the queue is  " + queue.length());

queue.dequeue();
console.log(queue.data);

console.log(queue.isEmpty());

queue.clear();
queue.print();
console.log(queue.isEmpty());