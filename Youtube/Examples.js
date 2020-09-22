// Multiplicar 2 numeros sin usar el signo *

const multiply = (a , b) => {
    let result = 0
    const positive = Math.abs(b) == b

    for (i = 0 ;i < Math.abs(b); i++){
        result = positive ? result + a : result - a
    }
    
    return result
}

const a = multiply(-5,5)
console.log(a)