// Este archivo reemplaza al archivo server.js
// Cargamos las variables de entorno definidas en el archivo .env (como DB_NAME, DB_USER, etc.)
/* ATENCION: ES IMPORTANTE CARGAR LAS VARIABLES DE ENTORNO PRIMERO PARA NO TENER PROBLEMAS AL EJECUTAR EL SERVIDOR  */
require('dotenv').config();

// Importamos el framework Express para manejar rutas, middleware y servidor HTTP
const express = require('express');

// Inicializamos la aplicación de Express
const app = express();

// Importamos las rutas de tareas (CRUD de tareas)
const tareasRoutes = require('./routes/tasks');

// Importamos la instancia de Sequelize configurada (conexión a PostgreSQL)
const sequelize = require('./config/db');

// Middleware que permite al servidor interpretar datos en formato JSON (body de peticiones POST/PUT)
app.use(express.json());

// Middleware que permite leer datos enviados desde formularios HTML (form-urlencoded)
app.use(express.urlencoded({ extended: true }));

// Middleware para servir archivos estáticos desde la carpeta 'public'
// Esto permite acceder al HTML, CSS y JS del frontend sin rutas adicionales
app.use(express.static('frontend')); 

// Montamos las rutas de tareas bajo el prefijo /api/tareas
// Por ejemplo: POST /api/tareas, GET /api/tareas, etc.
app.use('/api/tasks', tareasRoutes);

// Sincronizamos los modelos Sequelize con la base de datos PostgreSQL
// Si no existen las tablas, las crea. No borra datos existentes (force: false por defecto)
sequelize.sync()
  .then(() => {
    app.listen(3000, () => console.log('Servidor escuchando en puerto 3000'));
  })
  .catch(err => console.error('Error al sincronizar la base de datos:', err));


/* ¿Qué hace este archivo?

Este es el punto de entrada de tu aplicación. Su función es:
  --> Cargar configuraciones
  --> Conectar con la base de datos PostgreSQL usando Sequelize
  --> Servir los archivos frontend desde public/
  --> Activar las rutas para crear, leer y gestionar tareas
  --> Iniciar el servidor para aceptar peticiones en el puerto 3000 */