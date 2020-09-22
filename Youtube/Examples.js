// Multiply 2 numbers without using the multiplication sign

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

// Get Biggest number in an array with a single iteration

const getBiggest = (arr) => arr.reduce((acc, el) => acc > el ? acc : el) 

const b = getBiggest([50, 100, 200, -544, 458, 1000])
console.log(b)

// Iterating once an array remove Undefined, false, 0 and null

const clean = (arr) => arr.reduce((acc, el) => {
    if (el) {
        acc.push(el)
    }
    return acc
}, []) 

const c = clean([1, undefined, null, 0, 2])
console.log(c)

// A function that flattens the array to one level

const arr = [[1, 2], [[3,4]], [1, []]]
// [1,2, [3,4], 1, []]

const flatten = arr => arr.reduce ((acc, el) => acc.concat(el), [])

const d = flatten(arr)
console.log(d)

// Number of times a word is repeated

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

// check if a string is a palindrome

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