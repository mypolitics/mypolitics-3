import { IncomingMessage, ServerResponse } from "http";
import { init } from "../../services/sentry";

init();

const handler = (req: IncomingMessage, res: ServerResponse): void => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("pong");
};

export default handler;
