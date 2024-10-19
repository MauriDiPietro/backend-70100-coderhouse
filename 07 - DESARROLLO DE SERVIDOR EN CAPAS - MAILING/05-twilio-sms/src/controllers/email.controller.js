import "dotenv/config";
import { twilioClient } from "../services/email.service.js";

export const sendSms = async (req, res, next) => {
  try {
    const message = {
      body: req.body.message,
      from: process.env.PHONE,
      to: req.body.dest,
    };
    const response = await twilioClient.messages.create(message);
    res.json(response);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const sendWS = async (req, res, next) => {
  try {
    const message = {
      body: req.body.message,
      from: process.env.CEL,
      to: req.body.dest,
      mediaUrl: ['https://cdn.conmebol.com/wp-content/uploads/2014/08/bombonera-750x485.jpg']
    };
    const response = await twilioClient.messages.create(message);
    res.json(response);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
