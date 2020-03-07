
<p align="center"> NPM (Node Packege Manager) | Curso de NPM en <a href="https://platzi.com/r/fernandofh/" target="_blank"> Platzi</a></p>

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
**Archivo Funcionalidad a Publicar:** ``src/index.js``

```javascript
const names = [
    'Jose',
    'Luis',
    'Pedro',
    'Anita',
    'Julia'
]
const randomNames = () => {
    const name = names[Math.floor(Math.random() * name.length )];
    console.log(name)
}

module.exports = { randomNames }
```

**Archivo Configuracion para Publicar:** ``bin/global.js``
```javascript
#! /usr/bin/env node
let random = require('../src/index')
random.randomNames();
```

**Agregamos la configuracion:** ``packages.json``
```javascript
"bin": {
    "random-names": "./bin/global.js"
  },
  "preferGlobal": true
```

#### Hacemos referencia forma global
``npm link``

``npm i -g <RUTA>``

#### Publicar paquete
`` npm publish ``

#### Actualizar paquete
``npm version minor``

``npm version patch``

``npm version major``

-------
[NPM](https://www.npmjs.com)

[Souce](https://platzi.com/clases/npm/) y un mes gratis [:)](https://platzi.com/r/fernandofh/)
