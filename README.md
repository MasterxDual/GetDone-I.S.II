# Proyecto Desarrollo Web - GetDone

## Estructura General del Proyecto
```
task-manager/
├── frontend/               # Parte del cliente
│   ├── assets/
│   │   ├── images/        # Íconos, logos, gráficos
│   │   └── fonts/         # Fuentes personalizadas
│   ├── css/
│   │   ├── auth.css       # Estilos para autenticación
│   │   ├── admin.css      # Estilos específicos admin
│   │   ├── user.css       # Estilos específicos usuario
│   │   └── main.css       # Estilos compartidos
│   ├── js/
│   │   ├── auth.js        # Lógica de autenticación
│   │   ├── admin.js       # Funcionalidades admin
│   │   ├── user.js        # Funcionalidades usuario
│   │   ├── charts.js      # Gráficos (Chart.js)
│   │   └── notifications.js # Notificaciones
│   ├── views/
│   │   ├── auth/
│   │   │   ├── login.html
│   │   │   └── register.html
│   │   ├── admin/
│   │   │   ├── dashboard.html  # Vista principal admin
│   │   │   ├── tasks.html      # CRUD tareas
│   │   │   ├── projects.html   # Gestión proyectos
│   │   │   ├── users.html      # Asignación tareas
│   │   │   └── reports.html    # Estadísticas
│   │   ├── user/
│   │   │   ├── dashboard.html  # Vista principal usuario
│   │   │   ├── mytasks.html    # Tareas asignadas
│   │   │   ├── profile.html    # Perfil usuario
│   │   │   ├── shared.html     # Proyectos compartidos
│   │   │   └── stats.html      # Estadísticas personales
│   │   └── shared/             # Componentes reutilizables
│   │       ├── navbar.html
│   │       ├── footer.html
│   │       └── notification.html
│   └── index.html              # Página de inicio pública
├── backend/                # Parte del servidor
│   ├── config/             # Configuraciones
│   ├── controllers/        # Controladores
│   ├── models/             # Modelos de datos
│   ├── routes/             # Rutas
│   ├── middlewares/        # Middlewares
│   └── app.js              # Aplicación principal
├── database/               # Scripts y modelos de base de datos
├── docs/                   # Documentación
└── README.md               # Documentación principal
```
