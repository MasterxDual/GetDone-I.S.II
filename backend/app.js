// Servidor Principal

// Importar dependencias: Framework Express y el Middleware CORS
const express = require('express');
const cors = require('cors');

// Importa las rutas de usuarios
const userRoutes = require('./routes/userRoutes');

// Crear una instancia de la aplicación Express
const app = express();

// Configurar el middleware CORS para permitir solicitudes de diferentes orígenes
app.use(cors()); // Habilita CORS para todas las rutas
app.use(express.json()); // Permite el parseo de JSON en las solicitudes

// Configuracion de rutas
app.use('/api/users', userRoutes); // Monta la rutas de usuarios bajo /api/users

// Puerto del servidor
const PORT = 3000;

// Ruta raiz
app.get('/', (req, res) => {
    res.send('Welcome to the API of GetDone');
});

// Iniciar el servidor y escuchar en el puerto definido
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});