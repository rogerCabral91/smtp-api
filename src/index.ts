import express, { Request, Response } from "express";
import { json } from "body-parser";
import sendEmail from "./send";

const app = express();
const port: number = parseInt(process.env.PORT as string, 10) || 3000;

app.get("/", (_req: Request, res: Response) => {
  return res.send("Express Typescript on Vercel");
});

app.get("/ping", (_req: Request, res: Response) => {
  return res.send("pong 🏓");
});

app.post("/send", json(), (req: Request, res: Response) => {
  sendEmail(req, res);
});

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`);
});
