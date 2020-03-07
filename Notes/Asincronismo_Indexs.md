#### Callback 
```javascript
function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1,num2);
}

console.log(calc(2, 3, sum));


function date(callback) {
    console.log(new Date);
    setTimeout(()=> {
        let date = new Date;
        callback(date);
    }, 3000)
}

function printDate(dateNow) {
    console.log(dateNow);
}

date(printDate);
```

#### Promises 
```javascript
const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Hey!');
        } else {
            reject('UPS!');
        }
    });
}

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));

    const somethingWillHappen2 = () => {
        return new Promise((resolve, reject) => {
          if(true){
            setTimeout(() => {
                resolve('True');
                }, 2000)
          } else {
                const error = new Error('Whoops');
                reject(error);
            }
        });
      }
      
      somethingWillHappen2()
        .then((response) =>console.log(response))
        .catch((error) =>console.error(error));

              
      Promise.all([somethingWillHappen(), somethingWillHappen2()])
      .then((response) =>console.log(response))
      .catch((error) =>console.log(error));
```

#### Async/await 
```javascript
const doSomethingAsync = () => {
    return new Promise ((resolve, reject) =>{
        (true)
        ? setTimeout (() => resolve ('Do Something Async'), 3000)
        : reject (new Error('Test Error'))
    });
}

const doSomething = async () => {
    const something = await doSomethingAsync();
    console.log(something);
}

console.log('Before');
doSomething();
console.log('After');

const anotherFunction = async () => {
    try {
        const something = await doSomethingAsync();
        console.log(something);
    } catch (error){
        console.error(error)
    }
}

console.log('Before 1');
anotherFunction();
console.log('After 1');
```

-------
[Platzi](https://platzi.com/r/fernandofh/)
