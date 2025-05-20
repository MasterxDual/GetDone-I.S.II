// Controlador de Usuarios

// Importa byscript para el hasheo seguro de contraseñas
const bcrypt = require('bcryptjs');
// Importa el modelo de Usuario para interactuar con la base de datos
const userModel = require('../models/userModel');

// Importamos Sequelize para poder manejar sus errores específicos
const { UniqueConstraintError } = require('sequelize');

/**
 * Controlador para registrar un nuevo usuario
 * @param {Object} req - Objeto de solicitud HTTP (contiene email y password en el body)
 * @param {Object} res - Objeto de respuesta HTTP
 * @returns {Promise<Object>} - Respuesta JSON con el resultado de la operación
 */
async function register(req, res) {
    // Extrae el email y la contraseña del cuerpo de la solicitud
    const { firstName, lastName,  email, password } = req.body;

    // Validacion basica de campos requeridos
    if (!firstName || !lastName || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        // Busca si ya existe un usuario con el mismo email
        const existingUser = await userModel.findUserByEmail(email);
        if (existingUser) {
            return res.status(409).json({ message: 'Email already in use' });
        }

        // Hashea la contraseña usando bcrypt con un salt de 10 rondas (balance entre seguridad y rendimiento)
        const hashedPassword = await bcrypt.hash(password, 10);

        // Crea un nuevo usuario en la base de datos
        const newUser = await userModel.createUser(
            firstName,
            lastName,
            email,
            hashedPassword
        );

        // Respuesta exitosa (201 Created)
        res.status(201).json({
            message: 'User created successfully',
            user: {
                id: newUser.id,
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                email: newUser.email
            } // Retorna el nuevo usuario sin la contraseña
        });
    } catch (error) {
        // Manejo específico para error de violación de restricción única
        if (error instanceof UniqueConstraintError || 
            (error.name && error.name === 'SequelizeUniqueConstraintError')) {
            return res.status(409).json({ 
                message: 'Email already in use',
                detail: 'This email address is already registered in our system.'
            });
        }


        // Maneja cualquier error que pueda ocurrir durante la operación
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

// Exportar el controlador para su uso en las rutas
module.exports = {
    register,
};