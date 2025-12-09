export function validarAdmin(req, res, next) {
  const user = req.header("X-Admin-ID");
  const pass = req.header("X-Admin-PASS");

  if (user !== "admin" || pass !== "123") {
    return res.status(401).json({ erro: "Acesso negado. Credenciais inválidas." });
  }

  next();
}
