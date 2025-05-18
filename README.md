# Plataforma Web para Gestion de Tareas - GetDone

```bash
.
├── backend/
│   ├── config/           #Conexión a DB
│   │   └── db.js         # Config PostgreSQL
│   ├── controllers/
│   │   └── tasks.js      # Lógica de tareas
│   ├── models/           # Modelos de sequelize
│   │   └── Task.js       # Modelo de DB
│   ├── routes/           # Rutas de Express
│   │   └── tasks.js      # Rutas API
│   └── server.js         # Servidor Express
├── frontend/
│   ├── css/
│   │   └── style.css     # Estilos globales
│   ├── images/           # Logos/illustraciones
│   ├── js/
│   │   └── app.js        # Lógica frontend
│   ├── views/
│   │   └── auth/
│   │       └── login.html # HTML de login
│   |       └── register.html # HTML de registro
│   └── index.html         # Página principal
├── sql/
│   └── init.sql          # Scripts de tablas
├── .gitignore            # Ignora node_modules, .env, etc
└── README.md             # Guía básica
```
# 🚀 Backend del Proyecto - Gestión de Tareas

Este repositorio contiene el backend desarrollado en **Node.js**, **Express.js** y **PostgreSQL** usando **Sequelize** como ORM. A continuación, se detallan los pasos que cualquier desarrollador del equipo debe seguir para clonar y ejecutar el backend en su entorno local.

---

## ✅ Tecnologías utilizadas

- Node.js
- Express.js
- Sequelize ORM
- PostgreSQL (local)
- dotenv

---

## 🧪 Instrucciones para ejecutar el proyecto localmente

### 1. Instalar las dependencias

```bash
npm install
```

---

### 2. Crear archivo `.env`

En la raíz del proyecto, crear un archivo llamado `.env` con la siguiente estructura:

```env
DB_NAME=nombre_de_tu_db
DB_USER=usuario
DB_PASS=contraseña
DB_HOST=localhost
PORT=3000
```

> Este archivo no se sube al repositorio (está en `.gitignore`), por lo tanto cada dev debe crearlo.

---

### 3. Configurar la base de datos

#### Opción A: Sin migraciones

Si usás `sequelize.sync()`, asegurate de que esté activado en `app.js`:

```js
sequelize.sync({ force: false });
```

#### Opción B: Con migraciones (si usás Sequelize CLI)

```bash
npx sequelize-cli db:migrate
```

---

### 4. Ejecutar el servidor

```bash
npm start
```

O si tenés scripts personalizados:

```bash
node src/app.js
# o con hot reload:
nodemon src/app.js
```

---

### 5. Verificar en el navegador o Postman

```
http://localhost:3000
```

---

## 🛠️ Requisitos previos en la máquina local

- Node.js y npm instalados: https://nodejs.org/es/download
- PostgreSQL activo y configurado
- `.env` configurado con las credenciales correctas

## 📩 Contacto

Para dudas técnicas o errores de configuración, contactá al responsable del backend o al autor del repositorio.

---

¡Listo para programar! 💻

