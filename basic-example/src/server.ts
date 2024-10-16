import { useServer, runServer, type IServer, isVite } from "fullstack-vite";
import services from "./services";
import type { IncomingMessage, ServerResponse } from "http";

export const server: IServer = (req: IncomingMessage, res: ServerResponse) => {
  useServer(
    {
      services,
    },
    req,
    res
  );
};

if (!isVite())
  runServer(server).listen(3000, () =>
    console.log("Server listening on http://localhost:3000")
  );
