import * as express from "express";
import * as cors from "cors";
import * as bodyParser from "body-parser";
import * as expressWinston from "express-winston";
import * as http from "http";
import * as winston from "winston";

import { PORT } from "./constants";
import { logger } from "./log";

async function startListening(app: express.Application): Promise<http.Server> {
  return new Promise<http.Server>((res, rej) => {
    const server = app.listen(PORT, () => {
      logger.info(`Server listening on http://localhost:${PORT}`);
      res(server);
    });
  });
}
