const students = [
    {name: 'Arthur', score: 9.5},
    {name: 'João', score: 7.8},
    {name: 'Maria', score: 10},
    {name: 'Julia', score: 9.2}
]

const greatStudent = student => student.score >= 9;
const getScore = el => el.score;
const avg = (acc, el, i, array) => {
    if (i === array.length - 1) {
        return (acc + el) / array.length;
    } else{
        return acc + el;
    }
}

console.log(
    students.filter(greatStudent).map(getScore).reduce(avg)
)