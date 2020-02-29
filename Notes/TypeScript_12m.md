### Intro a TypeScript en 12 minutos
____

#### SuperSet javascript

<p align="center">
  <img src="https://github.com/FernandoFH/JavaScript/blob/master/Notes/IMG/SuperSetJs.JPG">
</p>

#### Variable 
____

`` let verdadero: boolean = true; ``

`` let numero: number = 53;``

`` let nombre:string = "Fernando"; ``

#### Ventajas 
____
* Detección de errores 
* Mejores Herramientas 
* Productividad 
* Mejora la legibilidad del código 

#### Traspilacion 
____
<p align="center">
  <img src="https://github.com/FernandoFH/JavaScript/blob/master/Notes/IMG/TrsnPilar.JPG">
</p>

#### Ejemplo
____
~~~
let verdadero: boolean = true;

let numero: number = 123;

let nombre: string = 'Fernando Hernandez';

let personas: {
    nombre: string,
    apellido: string,
    edad: number
} = {
    nombre: 'Fernando',
    apellido: 'Hernandez',
    edad: 30
};

let list: string[] = ['manzanas','peras','mangos'];

function sumar(a: number, b: number): number{
    return a + b;
}

let promesa: Promise<string> = Promise.resolve('cumplida'); 
~~~

#### Ejemplo Real 
____


____
#### Video: [Here](https://www.youtube.com/watch?v=g0jySSHjFT4)


