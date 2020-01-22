require("dotenv").config();
const server = require("./api/server.js");

const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 8080;

server.listen(port, host, () => {
  console.log(`Running at http://${host}:${port}`);
});
