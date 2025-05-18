// Importamos Express para crear rutas del backend
const express = require('express');

// Inicializamos el router de Express para definir endpoints en este archivo
const router = express.Router();

// Importamos el modelo 'Task' desde la carpeta de modelos
// Este modelo está vinculado a la tabla de PostgreSQL
const Task = require('../models/task');

// Ruta POST que recibe los datos de una nueva tarea desde el cliente (formulario frontend)
router.post('/', async (req, res) => {
  try {
    // Extraemos los campos enviados en el body del formulario (HTML o JSON)
    const { title, description, delivery_date, priority } = req.body;

    // Creamos una nueva tarea en la base de datos usando Sequelize
    const tarea = await Task.create({
      title,
      description,
      delivery_date,
      priority: priority // Este valor debe coincidir con el ENUM definido: 'Alta', 'Media' o 'Baja'
    });
    
    // Respondemos con estado 201 (creado) y la tarea generada
    res.status(201).json({ mensaje: 'Tarea creada', tarea });
  } catch (err) {
    // Si ocurre un error en la base de datos o en los datos enviados, lo capturamos
    console.error(err);

    // Enviamos un error genérico
    res.status(500).json({ error: 'Error al crear tarea' });
  }
});

// Exportamos este router para que pueda ser usado en app.js o index.js
module.exports = router;

/*¿Dónde se conecta esto? 
En tu archivo app.js o server.js, lo usás así:

const express = require('express');
const app = express();
const tareasRoutes = require('./routes/tasks'); // ruta a este archivo

app.use(express.json()); // Middleware para leer JSON en las peticiones
app.use('/api/tasks', tareasRoutes); // Tu ruta queda activa en /api/tareas

Entonces, si tu frontend hace un POST a http://localhost:3000/api/tareas, 
este endpoint va a procesar la solicitud y crear la tarea en PostgreSQL.

*/
