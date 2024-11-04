//Anonymous Function

(function (a, b, c){
    return a + b + c;
});

//Function expression

const sum = function (a, b){
    return a + b;
}

const result = sum(10, 20);
console.log(result);

const anotherSum = sum;
console.log(anotherSum(3, 7));

let x = 5;
console.log(x);

x = sum;
console.log(x(10, 16));
