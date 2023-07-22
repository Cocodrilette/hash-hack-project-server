import WebSocket from "ws";
import { commitmentResponder } from "./responders/commitment.responder";
import { revealResponder } from "./responders/reveal.responder";
import express from "express";
import { revealsController } from "./controllers/reveals.controller";
import { commitmentsController } from "./controllers/commitments.controller";
import cors from "cors";

const app = express();
const wss = new WebSocket.Server({ port: 8080, host: "localhost" });

app.use(
  cors({
    origin: "*",
  })
);

console.log("Socket listening on ws://localhost:8080");

wss.on("connection", (ws) => {
  console.log("Client connected");

  ws.on("message", (message) => {
    const data = JSON.parse(message.toString()) || message;

    if (data.commitment) return commitmentResponder(data.commitment);
    if (data.reveal) return revealResponder(data.reveal);

    console.log({ data });
  });

  ws.on("disconect", () => console.log("Client disconnected"));
});

app.get("/commitments", commitmentsController);

app.get("/reveals", revealsController);

app.listen(3040, () =>
  console.log("Express listening on http://localhost:3040")
);
