
<p align="center"> PM2 | Administrador de Procesos de Nodejs. Nodejs en Producción</p>

----
#### Installation
``npm install pm2 -g ``

#### Start an app
``pm2 start app.js ``

``Specify an app name ``: ``--name <app_name>``

#### List managed applications
``pm2 list o pm2 ls``

#### Managing processes
``pm2 restart app_name``

``pm2 reload app_name``

``pm2 stop app_name``

``pm2 delete app_name``

- ``all``: To act on all processes.
- ``id``:  To act on a specific process id.

#### Auto restart apps on file change
``pm2 start app.js --watch``

#### Monitoring CPU/Memory
``pm2 monit``

#### Log management
``pm2 logs -h``

#### Startup Script Generator
``pm2 startup``

#### Disabling startup system
``pm2 unstartup``

#### Generate configuration
``pm2 ecosystem``

This will generate a sample ``ecosystem.config.js``
