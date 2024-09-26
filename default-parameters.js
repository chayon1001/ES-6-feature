function add (num1 = 0, num2 = 0){
    const sum = num1 + num2;

    return sum;
}

// const res = add(5)
// console.log(res)


function name (first, last = ''){
    const full = first + ' ' + last;

    return full;
}

const res = name('rahim', 'karim')
console.log(res)