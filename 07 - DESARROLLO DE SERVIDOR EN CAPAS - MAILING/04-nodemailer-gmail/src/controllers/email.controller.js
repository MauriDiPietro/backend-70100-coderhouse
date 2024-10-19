import { transporter } from "../services/email.service.js";
import "dotenv/config";
import hbs from "nodemailer-express-handlebars";
import path from "path";
import { templateHtml } from "./template.js";

export const sendGmail = async (req, res, next) => {
  try {
    const { dest, name } = req.body;
    const gmailOptions = {
      from: process.env.EMAIL,
      to: dest,
      subject: "Bienvenido/a",
      html: templateHtml(dest, name),
      attachments: [
        {
          path: `${process.cwd()}/src/controllers/resumen-de-cuenta.txt`,
          filename: `resumen-${name}`,
        },
      ],
    };
    await transporter.sendMail(gmailOptions);
    res.json({ status: "success" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const hbsOptions = {
  viewEngine: {
    extName: ".handlebars",
    partialsDir: path.resolve("./src/views"),
    defaultLayout: false,
  },
  viewPath: path.resolve("./src/views"),
  extName: ".handlebars",
};

export const sendGmailHbs = async (req, res, next) => {
  try {
    const { dest, name } = req.body;
    transporter.use("compile", hbs(hbsOptions));

    const emailOptionsHbs = {
      from: process.env.EMAIL,
      to: dest,
      subject: "Bienvenido/a",
      template: "email", //nombre de la plantilla
      context: {
        title: "Bienvenido/a a la comisión 70100",
        text: "El curso de Backend inicia el 21/10/2024 a la hora 11.30",
      },
    };
    await transporter.sendMail(emailOptionsHbs);
    res.json({ status: "success" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
