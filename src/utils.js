import { adjectives, nouns } from "./words";
import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";
import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.resolve(__dirname, ".env"),
});

export const secretGenerator = () => {
  const randomNumber = Math.floor(Math.random() * adjectives.length);
  return `${adjectives[randomNumber]} ${nouns[randomNumber]}`;
};

export const sendMail = (email) => {
  const options = {
    auth: {
      api_user: process.env.SENDGRID_USERNAME,
      api_key: process.env.SENDGRID_PASSWORD,
    },
  };
  const client = nodemailer.createTransport(sgTransport(options));

  return client.sendMail(email);
};

export const sendSecretMail = (address, secret) => {
  const email = {
    from: "sjly3k@naver.com",
    to: address,
    subject: `Login Secret for Prismagram 😘`,
    html: `Hello! Your Login secret is : <br>${secret}.<br/>`,
  };
  return sendMail(email);
};
