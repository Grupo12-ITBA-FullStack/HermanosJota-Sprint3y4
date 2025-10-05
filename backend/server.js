const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

const ProductosRouter = require('./routes/productos');

// Middlewares
const loggerMiddleware = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');

// Le dice a Express que si llega un cuerpo de petición en formato JSON, lo convierta en un objeto JavaScript.
app.use(express.json());

// CORS 
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    return res.status(200).json({});
  }
  next();
});

// Usamos el middleware de logging globalmente
app.use(loggerMiddleware);


app.use('/api/productos', ProductosRouter);
 
// --- RUTAS ---
app.get('/', (req, res) => {
  res.send('¡Bienvenido al API de Mueblería Jota!');
});
 

// Middleware de errores al final
app.use((req,res,next) => res.status(404).json({ message: 'Ruta no encontrada' }));

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});