//Function anonymous
const increment1 = function(n){
    return n + 1;
}

//Arrow Function is always anonymous
const increment2 = (n) => {
    return n + 1;
}

const increment3 = n => { //Não precisa dos parenteses se tiver apenas um paramentro
    return n + 1;
}

const increment4 = n => n + 1; //Não precisa do return 

console.log(increment1(1));
console.log(increment2(5));
console.log(increment3(2));
console.log(increment4(4));

const sum = (a, b) => a + b;
console.log(sum(1, 13));