import 'reflect-metadata';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';

const app: express.Application = express();
const path = '/graphql';
const PORT = process.env.PORT || 4000;

const main = async () => {
  const schema = await buildSchema({
    resolvers: [__dirname + '/**/*.resolver.ts'],
  });

  const apolloServer = new ApolloServer({
    schema,
    introspection: true,
    playground: true,
    tracing: true,
    // cacheControl: true,
  });

  apolloServer.applyMiddleware({ app, path });

  app.listen(PORT, () => {
    console.log('🚀 started http://localhost:4000/graphql');
  });
};

main();
