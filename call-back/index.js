function greet(name) {
  console.log(`Hello ${name}`);
}

function greetAnkit(greetFn){
    const name="Ankit";
    greetFn(name);
}


greetAnkit(greet);
