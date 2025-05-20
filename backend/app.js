// Servidor Principal

// Importar dependencias: Framework Express y el Middleware CORS
// Cors permite que el servidor acepte solicitudes de diferentes dominios (Cross-Origin Resource Sharing)
// Esto es útil para aplicaciones frontend que se ejecutan en un dominio diferente al del backend
// de la API (por ejemplo, si el frontend está en localhost:3000 y el backend en localhost:5000)
const express = require('express');
const cors = require('cors');

// Importa las rutas de usuarios
const userRoutes = require('./routes/userRoutes');

// Importa la configuración de Sequelize para establecer la conexión a la base de datos
const sequelize = require('./config/sequelize');

// Crear una instancia de la aplicación Express
const app = express();

// Configurar el middleware CORS para permitir solicitudes de diferentes orígenes
app.use(cors()); // Habilita CORS para todas las rutas
app.use(express.json()); // Permite el parseo de JSON en las solicitudes

// Configuracion de rutas
app.use('/api/users', userRoutes); // Monta la rutas de usuarios bajo /api/users

// Puerto del servidor
const PORT = 3000;

// Ruta raiz/de inicio
// Esta ruta responde a las solicitudes GET en la raíz del servidor (http://localhost:3000/)
app.get('/', (req, res) => {
    res.send('Welcome to the API of GetDone');
});


// Sincronización de la base de datos e inicio del servidor
// -------------------------------------------------------
// sequelize.sync() sincroniza los modelos de Sequelize con las tablas de la base de datos:
// - Si las tablas no existen, las crea (en desarrollo).
// - Si existen, verifica que coincidan con los modelos (opcionalmente con alter: true).
sequelize.sync()
    .then(() => {
        // Una vez sincronizada la BD, inicia el servidor en el puerto especificado.
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch(err => {
        // Si hay un error en la conexión o sincronización, lo muestra en consola.
        console.error('Unable to connect to the database:', err);
    });



/* Funcionalidad Deprecada: */

// // Iniciar el servidor y escuchar en el puerto definido
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });