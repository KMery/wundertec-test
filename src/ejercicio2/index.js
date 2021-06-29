// 2.- Escribe un programa que guarde en un array e imprima los números primos dentro de un rango
// dado.


//2 will take as an exception
const isNotEven = (num) => {
    if (num === 2 || num % 2 !== 0) {
        return true;
    }
    return false;
}

const isDivisibleForOtherNums = (num) => {
    for (let i = 2; i < 10; i++) {
        if (i !== num && num % i === 0) {
            return true;
        }
    }
    return false;
}

const primeNumbers = (numBase, numLimit) => {
    let primes = [];
    if (isNaN(numBase) === false && isNaN(numLimit) === false) {
        while (numBase <= numLimit) {
            if (numBase > 1) {
                let is_not_even = isNotEven(numBase);
                let is_divisible_by_others = isDivisibleForOtherNums(numBase);
                if (is_not_even && !is_divisible_by_others) {
                    primes.push(numBase);
                }
            }
            numBase++;
        }
        
    } else {
        console.error('entries must be numbers');
    }
    return primes;
}

module.exports = {primeNumbers};