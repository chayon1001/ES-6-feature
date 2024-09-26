const number = number => number.name;

const res = number({name: 'harishanker ', age: 25});

// console.log(res)



const large = (first,second, third) =>{
    const sum = first + second;
    const mul = sum * third;

    const res = mul + sum;

    return res;
}


const result = large(5, 5, 5);
console.log(result)



// no parameter

const piValue = () => Math.PI;

console.log(piValue())