const validateProducto = (req, res, next) => {
  const { nombre, precio, stock } = req.body;
  if (!nombre || precio === undefined || stock === undefined) {
    return res.status(400).json({ message: 'Faltan datos obligatorios del producto' });
  }
  if (typeof precio !== 'number' || precio < 0) {
    return res.status(400).json({ message: 'El precio debe ser un número positivo' });
  }
  if (typeof stock !== 'number' || stock < 0) {
    return res.status(400).json({ message: 'El stock debe ser un número positivo' });
  }
  next();
};

module.exports = validateProducto;