# Plataforma Web para Gestion de Tareas - GetDone

```bash
.
├── backend/
│   ├── config/
│   │   └── db.js         # Config PostgreSQL
│   ├── controllers/
│   │   └── tasks.js      # Lógica de tareas
│   ├── models/
│   │   └── Task.js       # Modelo de DB
│   ├── routes/
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