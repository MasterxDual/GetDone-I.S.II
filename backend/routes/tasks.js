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

/* Esto permite que cualquier cliente frontend pueda hacer un GET a /api/tasks y reciba un JSON con todas las tareas almacenadas. */
// Endpoint que devuelve todas las tareas guardadas en la base de datos
router.get('/', async (req, res) => {
  try {
    // Consultamos todas las tareas usando Sequelize
    const tareas = await Task.findAll();

    // Devolvemos las tareas como JSON
    res.json(tareas);
  } catch (err) {
    console.error(err);

    // Si hay un error, devolvemos 500 con mensaje de error
    res.status(500).json({ error: 'Error al obtener tareas' });
  }
});

// Ruta PUT para modificar solo la descripción y fecha de entrega de una tarea
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params; //Trae los parametros de la URL
    const { description, delivery_date } = req.body; //Trae el body de la peticion

    //Busca la tarea en la base de datos por su ID o clave primaria
    const task = await Task.findByPk(id);

    //Si no encuentra la tarea, devuelve un error 404
    if (!task) {
      return res.status(404).json({ error: 'Tarea no encontrada' });
    }

    // Solo actualizamos los campos permitidos, evitando que la base de datos pida el title y la priority obligatoriamente
    if(description) task.description = description;
    if(delivery_date) task.delivery_date = delivery_date;

    // Guardamos los cambios en la base de datos
    await task.save();

    // Devolvemos la tarea actualizada como respuesta, convertida en JSON
    res.json({ mensaje: 'Tarea actualizada correctamente', task });

  } catch (error) {
    console.error(error); //Si hay un error, lo mostramos convertido en texto
    res.status(500).json({ error: 'Error al actualizar la tarea' });
  }
});


/* 
En app.js:
  app.use('/autos', autosRoutes);

En autosRoutes.js:
  router.get('/')  →  GET /autos
  router.get('/nuevo')  →  GET /autos/nuevo

  El / es el inicio del submódulo, no del sitio completo.
*/


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
