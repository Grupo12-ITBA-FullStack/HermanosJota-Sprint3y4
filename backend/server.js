const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

const ProductosRouter = require('./routes/productos');

// Middlewares
const loggerMiddleware = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');

// Le dice a Express que si llega un cuerpo de petición en formato JSON, lo convierta en un objeto JavaScript.
app.use(express.json());

// Usamos el middleware de logging globalmente
app.use(loggerMiddleware);


app.use('/api/productos', ProductosRouter);
 
// --- RUTAS ---
app.get('/', (req, res) => {
  res.send('¡Bienvenido al API de Mueblería Jota!');
});
 

// Middleware de errores al final
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});