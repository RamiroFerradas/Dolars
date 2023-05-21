require("dotenv").config();
const { swaggerDocs } = require("./src/routes/swagger.js");
const { sendKeepAliveRequest } = require("./src/util/sendKeepAliveRequest.js");
const app = require("./src/app.js");

const PORT = process.env.PORT || 7070;
const DOLARSI_URL = process.env.DOLARSI_URL;
const HOST = process.env.HOST;
console.log(HOST);

if (!DOLARSI_URL) {
  throw new Error("URL API NO CONFIGURADA");
}
console.log(HOST);

// Iniciando el servidor
app.listen(PORT, async () => {
  sendKeepAliveRequest(HOST);
  swaggerDocs(app, PORT);
  console.log("✅ URL API CONFIGURADA");
  console.log(`🚀 Server listening at port: ${PORT}`);
});
