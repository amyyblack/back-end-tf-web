// middlewares/auth.js
export function validarAdmin(req, res, next) {
  const id = req.header("X-Admin-ID");
  const pass = req.header("X-Admin-PASS");

  if (id !== process.env.ADMIN_ID || pass !== process.env.ADMIN_PASS) {
    return res.status(401).json({ erro: "Credenciais inválidas" });
  }

  next();
}
