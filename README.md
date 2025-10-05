# E-Commerce Mueblería Hermanos Jota - Backend/Client (Sprint 3 y 4)

Proyecto con frontend en React (create-react-app) y backend en Node.js y Express.

## Integrantes
- Aaron Tournoud
- Agustin Barbero
- Francisco Azim
- Matias Navone
- Ramiro Martinez
  
Estructura:

- `/backend` — API con Express que sirve los datos de los productos desde un archivo local.
- `/client` — Aplicación React (SPA) que consume la API y muestra catálogo, detalle y carrito.

### Requisitos

- Node.js
- npm

### Instalación (Windows / PowerShell)

1. Instalar dependencias del backend

```powershell
cd .\backend
npm install
```

2. Instalar dependencias del frontend

```powershell
cd ..\client
npm install
```

### Ejecutar en desarrollo

Primero arrancar el backend (por defecto en el puerto 4000):

```powershell
cd .\backend
npm start
```

Luego en otra terminal arrancar el cliente React:

```powershell
cd .\client
npm start
```

El cliente espera que la API esté disponible en `http://localhost:4000`. El backend incluye un CORS simple para desarrollo.

### Endpoints

- `GET /api/productos` — devuelve el array de productos.
- `GET /api/productos/:id` — devuelve un producto por id o 404 si no existe.
- `POST /api/productos` — stub protegido por middleware `auth` y validación.
- `PUT /api/productos/:id` — stub protegido por middleware `auth` y validación.


