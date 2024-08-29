// const add=require("./add");
// console.log('Hello, world!');

// const sum=add(2,3);
// console.log(sum);

// require("./batman");
// require("./superman");


// module caching
// const superHero = require('./super-hero');
// console.log(superHero.getName());
// superHero.setName('Superman');
// console.log(superHero.getName());

// const newSuperHero = require('./super-hero');
// console.log(newSuperHero.getName());
// module caching end

// how to alter module caching
// const SuperHero= require('./super-hero');
// const batman= new SuperHero('Batman');
// console.log(batman.getName());

// batman.setName('Ankit');
// console.log(batman.getName());

// const newSuperHero= require('./super-hero');
// const superman= new newSuperHero('SuperMan');
// console.log(superman.getName());

// how to alter module caching end

// simple patteren to impirt and export 
// const add= require('./add');
// console.log(add(2,3));


// importing using object
// const math= require('./math');
// console.log(math.add(2,3));
// console.log(math.sub(3,2));

// importing using object with ES6 
// const math= require('./math');
// const {add,sub}= math;
// console.log(add(2,3));
// console.log(sub(3,2));

// const data = require('./data.json');
// console.log(data.name);

