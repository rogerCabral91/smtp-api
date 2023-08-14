import { Request, Response } from "express";
import { createTransport } from "nodemailer";
import * as dotenv from "dotenv";

dotenv.config();

export default async function sendEmail(req: Request, res: Response) {
  const { nome, telefone, email } = req.body;

  const transporter = createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_3,
      pass: process.env.PASSWORD,
    },
  });

  try {
    transporter.sendMail({
      from: process.env.EMAIL_3,
      to: process.env.EMAIL_1,
      subject: "Teste de api de e-mail",
      text: `nome: ${nome}, telefone: ${telefone}, email: ${email}`,
    });
  } catch (error) {
    res.status(400).end(JSON.stringify({ message: "Error" }));
    return;
  }
  res.status(200).end(JSON.stringify({ message: "E-mail enviado" }));
}
