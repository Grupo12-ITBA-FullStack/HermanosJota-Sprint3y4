const express = require('express');
const ProductosRouter = express.Router();
const productosController = require('../controller/productosController');
const validateProducto = require('../middlewares/validateProducto');
const authMiddleware = require('../middlewares/auth');



// GET para obtener todos los productos

ProductosRouter.route('/')
.get(productosController.getAllProducts);

// GET para obtener un producto por ID
ProductosRouter.route('/:id')
.get(productosController.getProductById);


// Crear producto (requiere validación y auth)
ProductosRouter.post('/', authMiddleware, validateProducto, (req, res) => {
  // lógica para agregar producto
  res.json({ message: 'Producto agregado correctamente' });
});

// Actualizar producto
ProductosRouter.put('/:id', authMiddleware, validateProducto, (req, res) => {
  // lógica para actualizar producto
  res.json({ message: 'Producto actualizado correctamente' });
});



module.exports = ProductosRouter;