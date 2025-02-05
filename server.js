
import jsonServer from "json-server";

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Middleware para evitar status inválido
server.use((req, res, next) => {
  if (req.method === "POST" || req.method === "PUT") {
    const { status } = req.body;
    if (!["ativo", "inativo"].includes(status)) {
      return res.status(400).json({ error: "Status inválido. Use 'ativo' ou 'inativo'." });
    }
  }
  next();
});

server.use(router);
server.listen(3000, () => {
  console.log("🚀 JSON Server rodando em http://localhost:3000");
});
