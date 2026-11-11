const jwt = require("jsonwebtoken");

function requireAdmin(req, res, next) {
  const authorization = req.headers.authorization || "";
  const [scheme, token] = authorization.split(" ");
  if (scheme !== "Bearer" || !token) {
    return res.status(401).json({ success: false, message: "Authentication required." });
  }
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET, {
      issuer: "arafsir-portfolio",
      audience: "portfolio-admin",
    });
    req.admin = { id: payload.sub, username: payload.username };
    return next();
  } catch {
    return res.status(401).json({ success: false, message: "Session is invalid or expired." });
  }
}

module.exports = { requireAdmin };
