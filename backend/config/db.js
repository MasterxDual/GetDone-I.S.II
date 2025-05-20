//Conexion a postgresql
//Añadimos sequelize al archivo
const { Sequelize } = require('sequelize');


//Creamos una instancia de Sequelize y la configuramos con los valores del archivo .env
//Esto permite que las credenciales estén protegidas y no se codifiquen directamente en el código
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST, // Dirección del servidor de la base de datos (usualmente 'localhost')
    dialect: 'postgres', // Tipo de base de datos (PostgreSQL en este caso)
    logging: false // Desactiva los logs SQL por consola (útil para evitar ruido)
  }
);

// Exportamos la instancia de Sequelize para que pueda ser utilizada en otros archivos del proyecto
module.exports = sequelize;

/*¿Dónde se usa luego?

--> En los modelos (task.js, user.js, etc.) que se definen con sequelize.define(...)
--> En el archivo app.js para ejecutar sequelize.sync() o verificar conexión
--> En migraciones si usás Sequelize CLI */
