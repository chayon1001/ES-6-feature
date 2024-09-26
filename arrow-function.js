// normal function declaration

// function add (a, b){
//     const res = a + b;
//     return res;
// }

function add (a, b){
  
    return a + b;
}

const res = add(10, 5);
console.log(res);



// function expression

const add2 = function(a, b){
    return a + b
}

const res2 = add2(10, 5);
console.log(res2);




// arrow function


const add3 = (a , b) => a + b;

const sum = add3(40, 40);
console.log(sum)