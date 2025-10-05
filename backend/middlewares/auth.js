//middleware básico de autenticación:
const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).json({ message: 'No autorizado' });
  // Si tu API usa JWT, podrías verificarlo aquí
  next();
};

module.exports = authMiddleware;