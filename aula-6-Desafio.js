// Create a range function
// range(5) -> [1,2,3,4,5]
// range(6, 11) -> [6,7,8,9,10]
// range(10, 19, 2) -> [10,12,14,16,18]
// range(6, 2) -> [6,5,4,3,2]
// range(8, -3, 4) -> [8,4,0]

function desafio(a, b, c){
    const num = [];
    let n1;
    let i;
    if (c == undefined){
        c = 1;
    } 

    if(b == undefined)
        { //b NÃO possui valor
            n1 = a; 
            i = 1;
        } else {//b possui valor      
            n1 = b; 
            i = a;
        
        };

    if(a > b){
        for(i; i >= n1; i += -c ){
            num.push(i);
        }
        return num;
    }


    for(i; i <= n1; i += c ){
        num.push(i);
    }

    return num;
        
}

// range(5) -> [1,2,3,4,5]
console.log(desafio(7));

// range(6, 11) -> [6,7,8,9,10]
console.log(desafio(7, 12));

// range(10, 19, 2) -> [10,12,14,16,18]
console.log(desafio(2, 12, 2));

// range(6, 2) -> [6,5,4,3,2]
console.log(desafio(10, 3));

// range(8, -3, 4) -> [8,4,0]
console.log(desafio(8, -3, 2));
