import { PORT } from "./config/config";
import Logger from "./helpers/logger";
import createServer from "./server";


const server = createServer()

server.listen({ port: PORT as number }, (err, address) => {
  if (err) {
    Logger.error(err);
    process.exit(1);
  }
  Logger.info(`Server listening at ${address}`);
});