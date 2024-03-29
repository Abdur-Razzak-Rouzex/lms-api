require("dotenv").config();

const http = require("http");
require("./config/db-connect");

const app = require("./app/app");
const PORT = process.env.PORT || 3000;

//Server
const server = http.createServer(app);

server.listen(PORT, console.log(`Server is running on port ${PORT}`));
