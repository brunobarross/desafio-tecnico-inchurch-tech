import jsonServer from "json-server";
import fs from "fs";

const server = jsonServer.create();
const dbFile = "db.json";
const dbTemplate = "db.template.json";
const middlewares = jsonServer.defaults();

// 🔄 Garante que db.json seja restaurado ANTES do servidor iniciar
if (fs.existsSync(dbTemplate)) {
  fs.copyFileSync(dbTemplate, dbFile);
  console.log("🔄 Banco de dados restaurado a partir de db.template.json");
} else {
  console.error("⚠️ Arquivo db.template.json não encontrado! O servidor pode iniciar com dados incorretos.");
}

const router = jsonServer.router(dbFile);

server.use(middlewares);
server.use(jsonServer.bodyParser);

// 🛠 Objeto para rastrear exclusões temporárias (Soft Delete)
const deletedRecords = new Set();

// 🔹 Middleware para validar status no POST/PUT
server.use((req, res, next) => {
  if (req.method === "POST" || req.method === "PUT") {
    const { status } = req.body;
    if (!["ativo", "inativo"].includes(status)) {
      return res.status(400).json({ error: "Status inválido. Use 'ativo' ou 'inativo'." });
    }
  }
  next();
});

// ❌ Middleware para Soft Delete (não remove do banco)
server.use((req, res, next) => {
  if (req.method === "DELETE") {
    const id = req.params.id;
    const resourceName = req.path.split("/")[1];
    const db = router.db;

    const resource = db.get(resourceName).find({ id: Number(id) }).value();

    if (!resource) {
      return res.status(404).json({ error: "Recurso não encontrado." });
    }

    // Adiciona à lista de exclusão temporária
    deletedRecords.add(`${resourceName}-${id}`);

    return res.json({ message: "Recurso ocultado até reiniciar o servidor." });
  }
  next();
});

// 🔍 Middleware para esconder itens deletados nas requisições GET
server.use((req, res, next) => {
  if (req.method === "GET") {
    const resourceName = req.path.split("/")[1];

    if (resourceName && router.db.has(resourceName).value()) {
      const db = router.db;
      const filteredData = db
        .get(resourceName)
        .filter((item) => !deletedRecords.has(`${resourceName}-${item.id}`))
        .value();

      return res.json(filteredData);
    }
  }
  next();
});

// 🔥 Inicia o servidor
server.use(router);
server.listen(3000, () => {
  console.log("🚀 JSON Server rodando em http://localhost:3000");
});
