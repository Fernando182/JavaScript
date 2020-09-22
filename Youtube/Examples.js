// Multiplicar 2 numeros sin usar el signo *

const multiply = (a , b) => {
    let result = 0
    const positive = Math.abs(b) == b

    for (i = 0 ;i < Math.abs(b); i++){
        result = positive ? result + a : result - a
    }

    return result
}

const a = multiply (5, -3)
console.log(a)

// Obtener numero mayor de un array con una sola iteracion 

const getBiggest = (arr) => arr.reduce((acc, el) => acc > el ? acc : el) 

const b = getBiggest([50, 100, 200, -544, 458, 1000])
console.log(b)

//  iterando una sola vez un arreglo eliminar Undifene,  false,  0 y null

const clean = (arr) => arr.reduce((acc, el) => {
    if (el) {
        acc.push(el)
    }
    return acc
}, []) 

const c = clean([1, undefined, null, 0, 2])
console.log(c)