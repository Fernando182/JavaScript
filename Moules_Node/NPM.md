
<p align="center"> NPM (Node Packege Manager) | Gestor de Paquetes </p>

-------

#### Version 
``node -v ``

``npm -v ``

#### Actualizar 
``npm -g npm@latest``

#### Iniciar un proyecto
``git init ``

``npm init -y ``

#### Instalación de dependencias
``npm install moment --save`` o ``npm i moment -S``

``npm install moment --save-dev`` o ``npm i moment -D``

``npm install eslint -O``

*Asegurate de crear .gitignore y agragra ``node_modules``*

``npm install -g nodemon``

#### Lista de dependencias instaladas 
``npm list -g --depth 0 `` 

#### Output de lo que instalara
``npm install react --dry-rum``

``npm install react -f``

#### Revisar que paquetes disponen de nuevas versiones
``npm outdate`` Mas detalle `` npm outdate --dd`` 

#### Actualizar los paquetes 
``npm update``

#### Eliminar paquetes
``npm uninstall json-server``

#### Mantener en el package.json
``npm uninstall webpack --no-save``

#### Eliminar Cache 
``npm cache clean --force ``

``npm cache verify ``

#### Seguridad
``npm audit``

``npm audit fix``

#### Crear un paquete para NPM



Crear un paquete para NPM
Creamos nuestra función
const names = [
    'camilo',
    'andres',
    'luisa',
    'ahmed',
    'sandra',
    'antonio',
    'carlos'
]
const randomNames = () => {
    const name = names[Math.floor(Math.random() * name.length )];
    console.log(name)
}
module.exports = { randomNames }
creamos la  configuración de bin para asegurarnos que es un paquete instalable global.js
#! /usr/bin/env node
let random = require('../src/index')
random.randomNames();
agregamos la configuraci[on de bin al packages.json
"bin": {
    "random-names": "./bin/global.js"
  },
  "preferGlobal": true

Hacemos una referencia de forma global de nuestro paquete, tenemos que estar en la carpeta de lo contiene
sudo npm link
sudo npm i -g /home/rulo/PlaziMaster/cursos/npm/random-name
Crear usuario de npm
npm adduser
Publicar paquete
npm publish
Agregar versión
npm version patch
npm version minor
npm version major






-------
[Source](https://www.npmjs.com)
