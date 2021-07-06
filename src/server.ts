require("dotenv").config();
import http from "http";

import app from "./app";
import Connection from "./config/dbConnection";
import logger from "./logger";

const server: http.Server = http.createServer(app);
const port: string | number = process.env.PORT || 5005;

const startServer = async (): Promise<void> => {
  server.listen(port, () => {
    logger.info(`Server Started on ${port}`);
  });
  await Connection.dbConnect();
};

startServer();
