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

#### Ejemplo consumiendo API  
____
`` let numero: number = 53;``
api.ts
~~~
interface Usuario {
    login: string;
    name: string;
    blog: string | null;
    location: string | null;
    email: null | string;
    hireable: boolean| null;
    bio: string | null;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
}

export async function getDetallesParaUsuario(
    username: string
):Promise<Usuario> {
    const res = await fetch(`https://api.github.com/users/${username}`);
    const usuario: Usuario = await res.json();

    return usuario;
}
~~~

app.ts
~~~
import { getDetallesParaUsuario } from './api';

async function main(){
    const fernando = await getDetallesParaUsuario('FernandoFH');
    fernando.email?.toLocaleLowerCase();
}
~~~
____
#### Video: [Here](https://www.youtube.com/watch?v=g0jySSHjFT4)
