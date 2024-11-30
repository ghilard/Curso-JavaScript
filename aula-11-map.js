const numbers = [1, 2, 3, 4, 5, 6];

const numberV2 = numbers.map(el => el * 2);

console.log(numbers, numberV2);

const students = [
    {name: 'Arthur', score: 9.5},
    {name: 'João', score: 7.8},
    {name: 'Maria', score: 10},
    {name: 'Julia', score: 9.2}
]

const getScore = el => el.score;

const result = students.map(getScore).map(Math.ceil);

console.log(students, result);