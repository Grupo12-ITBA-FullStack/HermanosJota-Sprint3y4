const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const ProductosRouter = require('./routes/productos');
 

// Le dice a Express que si llega un cuerpo de petición en formato JSON, lo convierta en un objeto JavaScript.
app.use(express.json());
app.use(function(req, res, next) {
  // Aquí usamos console.log para mostrar el método HTTP y la URL
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next(); 
});

app.use('/api/productos', ProductosRouter);
 
// --- RUTAS ---
app.get('/', (req, res) => {
  res.send('¡Bienvenido al API de Mueblería Jota!');
});
 


 
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});