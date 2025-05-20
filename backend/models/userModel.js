// Modulo de Usuario

// Importa el Pool de conexiones a la base de datos definido en db.js
const pool = require('./db');

/**
 * Busca un usuario por su direccion de email en la base de datos
 * @param {string} emial - Email del usuario a buscar
 * @returns {Promise<Object|null>} - Objeto del usuario encontrado o null si no se encuentra
 */
async function findUserByEmail(email) {
    // Ejecuta una consulta SQL parametrizada para buscar por email
    // $1 es un marcador de posición para el primer parámetro (evita inyecciones SQL)
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

    // Retorno el primer registro encontrado (rows[0]) o undefined si no hay resultados
    return result.rows[0];
}


/**
 * Crea un nuevo usuario en la base de datos
 * @param {string} firstName - Nombre del nuevo usuario
 * @param {string} lastName - Apellido del nuevo usuario
 * @param {string} email - Email del nuevo usuario
 * @param {string} hashedPassword - Contraseña ya hasheada (no almacenar contraseñas de texto plano) del nuevo usuario
 * @returns {Promise<Object>} - Objeto con los datos basicos de usarios creado (sin la contraseña)
 */
async function createUser(firstName, lastName, email, password) {
    // Ejecuta una inserción SQL parametrizada para crear un nuevo usuario
    // La clausula RETURNING especifica que datos queremos recibir tras la inserción
    const result = await pool.query(
        'INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4) RETURNING id, first_name, last_name, email',
        [firstName, lastName, email, password]
    );

    // Retorna el registro creado (sin incluir el campo passwoerd por seguridad)
    return result.rows[0];
}

// Exporta las funciones para que puedan ser utilizadas en otros módulos
module.exports = {
    findUserByEmail,
    createUser,
};