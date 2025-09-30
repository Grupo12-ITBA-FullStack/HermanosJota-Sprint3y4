const express = require('express');
const ProductosRouter = express.Router();
const productosController = require('../controller/productosController');





// GET para obtener todos los productos

ProductosRouter.route('/')
.get(productosController.getAllProducts);

// GET para obtener un producto por ID
ProductosRouter.route('/:id')
.get(productosController.getProductById);


 




module.exports = ProductosRouter;