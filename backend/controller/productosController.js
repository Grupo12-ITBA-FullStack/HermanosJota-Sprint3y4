const productosController = require('../controller/productosController');
const { default: productos } = require('../model/productos');



const getAllProducts = (req, res) => {
  res.json(productos);
};

const getProductById = (req, res) => {
    const id = parseInt(req.params.id);
    const producto = productos.find(p => p.id === id);
    if (producto) {
        res.json(producto);
    } else {
        res.status(404).json({ error: 'Producto no encontrado' });
    }
};

module.exports = {
    getAllProducts, 
    getProductById
};
