document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('formTarea').addEventListener('submit', function (e) {
        // Prevenimos el comportamiento por defecto del formulario (que recarga la página)
        e.preventDefault();

        // Creamos un objeto FormData con los datos del formulario actual
        const formData = new FormData(this);

        // Convertimos ese FormData en un objeto plano de JavaScript (clave: valor)
        const data = Object.fromEntries(formData.entries());

        // Usamos fetch para enviar una petición HTTP POST al backend con los datos del formulario
        fetch('/api/tasks', {
            method: 'POST', // Método HTTP: crear recurso
            headers: { 'Content-Type': 'application/json' }, // Indicamos que el cuerpo es JSON
            body: JSON.stringify(data) // Convertimos los datos a formato JSON
        })
        // Cuando recibimos respuesta, la convertimos a JSON y mostramos un mensaje de éxito
        .then(res => res.json())
        .then(res => alert('Tarea creada correctamente'))
        // Si ocurre un error en la solicitud, mostramos un mensaje de error al usuario
        .catch(err => alert('Error al crear tarea'));
    })
});

/*¿Qué hace este código en resumen?

--> Intercepta el envío del formulario
--> Lee los datos del usuario (title, description, priority, etc.)
--> Los convierte a JSON
--> Los envía al backend Express (/api/tasks)
--> Muestra un mensaje al usuario según la respuesta */
