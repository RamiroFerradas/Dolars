const swaggerAutogen = require("swagger-autogen")();

const outputFile = "./swagger_output.json";
const endpointsFiles = ["./src/routes/*.js"];
const HOST = process.env.HOST;

const doc = {
  info: {
    version: "", // by default: '1.0.0'
    title: "", // by default: 'REST API'
    description: "", // by default: ''
  },
  host: HOST,
  basePath: "/api", // by default: '/'
  schemes: [], // by default: ['http']
  consumes: [], // by default: ['application/json']
  produces: [], // by default: ['application/json']
  tags: [
    // by default: empty Array
    {
      name: "DEFAULT", // Tag name
      description: "", // Tag description
    },
    // { ... }
  ],
  securityDefinitions: {}, // by default: empty object
  definitions: {}, // by default: empty object (Swagger 2.0)
  components: {}, // by default: empty object (OpenAPI 3.x)
};

const generateSwaggerSpec = async () => {
  await swaggerAutogen(outputFile, endpointsFiles, doc);
  console.log("Swagger spec generado exitosamente");
};

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../../swagger_output.json");

const swaggerDocs = (app) => {
  generateSwaggerSpec();
  app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  app.get("/api/docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerDocument);
  });
};

console.log(`📕 Documentacion disponible en "http://localhost:3001/api/docs"`);

module.exports = { swaggerDocs };
