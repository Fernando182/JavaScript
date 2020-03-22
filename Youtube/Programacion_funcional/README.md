## Programacion Funcional Js

#### Parte 1: Array Filter
El método `filter()` crea un nuevo `array` con todos los elementos que cumplan la condición implementada por la función dada.

Retorna un arreglo nuevo con la misma o menor cantidad de elementos y es un metodo inmutable.

```javascript
const numeros = [1,2,3,4,5,6,7,8,9];

const numFiltrados = numeros.filter(x => x<5) ; 
console.log (numFiltrados);
```
Output
```Output 
$ node Index.js
[ 1, 2, 3, 4 ]
```
Otro Ejemplo 
```javascript
const mascotas =[
{nombre: 'Toto', edad: 12, raza:'perro'},
{nombre: 'Chancho', edad: 3, raza:'perro'},
{nombre: 'Gato', edad: 10, raza:'perro'},
{nombre: 'Pelusa', edad: 16, raza:'gato'}
];

const perros = mascotas.filter(x => x.raza === 'perro');
console.log (perros);

const gatos = mascotas.filter(x => x.raza === 'gato');
console.log (gatos);
```
Output
```Output 
Estos son los Perros
[
  { nombre: 'Toto', edad: 12, raza: 'perro' },
  { nombre: 'Chancho', edad: 3, raza: 'perro' },
  { nombre: 'Gato', edad: 10, raza: 'perro' }
]
Estos son los Gatos
[ { nombre: 'Pelusa', edad: 16, raza: 'gato' } ]
```
___
#### Parte 2: Array Map


___
#### Playlist: [here](https://www.youtube.com/playlist?list=PLSnadb41DsdKMddToNitoXrgHK7CEbUki)


