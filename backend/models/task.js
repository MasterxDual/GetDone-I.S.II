// Importamos los tipos de datos que Sequelize proporciona (STRING, DATE, ENUM, etc.)
const { DataTypes } = require('sequelize');

// Importamos la conexión configurada de Sequelize desde el archivo db.js
const sequelize = require('../config/db');

// Definimos el modelo 'Tarea' usando sequelize.define()
// Este modelo representa una tabla llamada 'Tareas' en la base de datos (Sequelize pluraliza por defecto)
const Tarea = sequelize.define('Tarea', {
  // Campo 'title' de tipo texto corto, obligatorio
  title: { type: DataTypes.STRING, allowNull: false },

  // Campo 'description' de tipo texto largo, opcional
  description: { type: DataTypes.TEXT },

  // Campo 'delivery_date' para almacenar solo la fecha (sin hora), obligatorio
  delivery_date: { type: DataTypes.DATEONLY, allowNull: false },

  // Campo 'priority' con valores restringidos a Alta, Media o Baja
  priority: { type: DataTypes.ENUM('Alta', 'Media', 'Baja'), allowNull: false },
}, {
  // Activamos timestamps automáticos, pero solo para createdAt
  timestamps: true,

  // Renombramos el campo 'createdAt' a 'created_at' para que se vea más legible en PostgreSQL
  createdAt: 'created_at',

  // Desactivamos el campo 'updatedAt' (no se necesita en este caso)
  updatedAt: false
});

// Exportamos el modelo para poder usarlo en rutas, controladores o scripts
module.exports = Tarea;

/* Cuando se ejecuta sequelize.sync(), Sequelize crea (o actualiza) una tabla con la estructura definida anteriormente */
