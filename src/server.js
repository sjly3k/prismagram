import { GraphQLServer } from "graphql-yoga";
import dotenv from "dotenv";
import path from "path";
import logger from "morgan";
import schema from "./schema";
import { sendSecretMail } from "./utils";

sendSecretMail("sjly3k@naver.com", "babo baboye");

dotenv.config({
  path: path.resolve(__dirname, ".env"),
});
const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({
  schema,
});
server.express.use(logger("dev"));
server.start(({ port: PORT }) => {
  console.log(`😄 GraphQL Server is Running on http://localhost:${PORT}`);
});
