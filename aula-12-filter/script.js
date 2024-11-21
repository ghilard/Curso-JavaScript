const numbers = [1, 2, 3, 4, 5, 6];

const greaterThanZero = el => el > 0;
const greaterThanTen = el => el > 10;
const even = el => el % 2 == 0;

console.log(numbers.filter(el => el > 0));
console.log(numbers.filter(greaterThanZero));
console.log(numbers.filter(greaterThanTen));
console.log(numbers.filter(even));

const students = [
    {name: 'Arthur', score: 9.5},
    {name: 'João', score: 7.8},
    {name: 'Maria', score: 10},
    {name: 'Julia', score: 9.2}
]

const greatStudent = student => student.score >= 9;

console.log(students.filter(greatStudent));
console.log(students);
