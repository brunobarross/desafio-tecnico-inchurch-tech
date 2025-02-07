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

// Middleware para verificar se o recurso existe antes de deletar
server.use((req, res, next) => {
  if (req.method === "DELETE") {
    const id = req.params.id;
    const resourceName = req.path.split("/")[1]; // Obtém o nome do recurso da URL
    const db = router.db; // Acessa o banco de dados fake (db.json)

    const resource = db.get(resourceName).find({ id: Number(id) }).value();

    if (!resource) {
      return res.status(404).json({ error: "Recurso não encontrado." });
    }
  }
  next();
});

server.use(router);
server.listen(3000, () => {
  console.log("🚀 JSON Server rodando em http://localhost:3000");
});
