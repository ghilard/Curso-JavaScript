//Function declaration

function sayHello(){
    console.log("Hello!");
}

sayHello();

//Função recebe um argumento

function sayHelloTo(name){
    console.log(`Hello ${name}!`);
}

sayHelloTo("Arthur");

//Função com "return"

function returnHi(){
    return "Hi!";
}

const greeting = returnHi();
console.log(greeting);
console.log(returnHi());

//Função recebe um parametro e retorna

function returnHiTo(name){
    return `Hi ${name}!`;
}

console.log(returnHiTo("Arthur"));