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

//  Una funcion que aplane los arreglos a un nivel 

const arr = [[1, 2], [[3,4]], [1, []]]
// [1,2, [3,4], 1, []]

const flatten = arr => arr.reduce ((acc, el) => acc.concat(el), [])

const d = flatten(arr)
console.log(d)

// cantidad de veces que se repite una palabra 

const repeated = str => {
    const lowered = str.toLowerCase()
    const splitted = lowered.split(' ')
    const reduced = splitted.reduce((acc, el) => {
        if(acc[el]){
            acc[el]++
        } else {
            acc[el] = 1 
        }
        return acc
    }, {})  
    return Object.entries(reduced).reduce((acc, el) => acc[1] > el[1] ? acc : el)
}

const e = repeated('This is a repeated word test this is a a')
console.log(e)

// verificar si un strean es un palindromo 

const isPalindrome = (str) => {
    str = str.replace(/\s/g, '')
    const lowered = str.toLowerCase()
    const splitted = lowered.split('')
    const reversed = splitted.reverse()
    const joined = reversed.join('')

    return lowered == joined
}

const f = isPalindrome('Tana')
console.log(f)