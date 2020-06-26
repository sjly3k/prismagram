import path from "path";
import { makeExecutableSchema } from "graphql-tools";
import { fileLoader, mergeResolvers, mergeTypes } from "merge-graphql-schemas";

// __dirname : /Users/mmt-seungjin/Documents/prismagram/src/
// /api/**/*.graphql : src folder 내부에 있는 src folder로 들어가기 -> src 내부의 모든 폴더 들어가기 -> graphql로 끝나는 모든 파일 가져오기
const allTypes = fileLoader(path.join(__dirname, "/api/**/*.graphql"));
const allResolvers = fileLoader(path.join(__dirname, "/api/**/*.js"));

const schema = makeExecutableSchema({
  typeDefs: mergeTypes(allTypes),
  resolvers: mergeResolvers(allResolvers),
});

export default schema;
