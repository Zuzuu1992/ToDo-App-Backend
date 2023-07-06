import SwaggerUI from "swagger-ui-express";
import YAML from "yamljs";

const swaggerMiddleware = () => {
  const options = {
    customCss: ".swagger-ui .topbar { display: none }",
    customSiteTiTle: "TodoApp",
  };

  const swaggerDocument = YAML.load("./src/databases/swagger.yaml");
  return [SwaggerUI.serve, SwaggerUI.setup(swaggerDocument, options)];
};

export default swaggerMiddleware;
