/**
 *  TO-DO:
 *  Redirigir al login
 */
function logout() {
      window.location.href = "LOGIN.html";
    }


/**
 *  Actualizar lista de tareas, solicita al backend un JSON desde
 *  http://localhost:3000/tasks con los siguientes campos por cada tarea:
 *  [
 *    {
 *      "title": string,         // Título de la tarea
 *      "description": string,   // Descripción breve
 *      "priority": string,      // Prioridad (por ejemplo: 'Alta', 'Media', 'Baja')
 *      "due_date": string       // Fecha de vencimiento en formato 'YYYY-MM-DD'
 *    },
 *    ...
 *  ]
 *
 *  La función limpia el contenido actual del contenedor con id 'taskList'
 *  y agrega dinámicamente los elementos correspondientes a cada tarea recibida.
 */
async function loadTasks() {
    try {
      const res = await fetch('http://localhost:3000/tasks');
      const tasks = await res.json();
      const list = document.getElementById('taskList');

      list.innerHTML = ''; // limpiamos antes de agregar

      tasks.forEach(task => {
        const html = `
          <div class="row align-items-center task-item">
            <div class="col-auto">
              <img src="https://cdn-icons-png.flaticon.com/512/3209/3209265.png" alt="Task Icon" class="task-img">
            </div>
            <div class="col">
              <h5 class="mb-0">${task.title}</h5>
              <p class="text-muted mb-0">${task.description}</p>
            </div>
            <div class="col-auto task-meta">
              <strong>Prioridad: ${task.priority}</strong><br>
              <span class="text-muted">Exp: ${task.due_date}</span>
            </div>
          </div>
        `;
        list.innerHTML += html;
      });
    } catch (error) {
      console.error('Error cargando tareas:', error);
    }
  }

/**
 * TO-DO:
 * Redireccion a creacion de tareas
 */
function goToCreateTask() {
    window.location.href = "CREARTAREAS.html";
  }


  // Llamamos la función al cargar la página
  window.onload = loadTasks;