const EventEmitter=require('node:events');

const emitter=new EventEmitter();

emitter.on("order-pizza",(size,topping)=>{
    console.log(`Order received, Baking a ${size} Pizza with ${topping}`);
})

emitter.on("order-pizza",(size)=>{
    if(size==="large"){
        console.log("serving a complementry drink");
    }
})

console.log("this is not interuppeted by the evebnt")

emitter.emit("order-pizza","large","extra cheese");