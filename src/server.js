/* eslint-disable no-console */
import 'airbnb-browser-shims';
import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import helmet from 'helmet';
import depthLimit from 'graphql-depth-limit';
import path from 'path';
import morgan from 'morgan';

import models from './database/models';
import typeDefs from './graphql/typedefs';
import resolvers from './graphql/resolvers';
import loaders from './graphql/dataloaders';
import router from './router';
import { app as appConfig } from './configs';

const app = express();
const assetsPath = path.resolve(__dirname, 'assets');
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {
    return {
      models,
      loaders,
    };
  },
  formatError: (err) => {
    if (err.message.includes('Database Error:')) {
      return new Error('Internal Server Error');
    }
    return err;
  },
  validationRules: [
    depthLimit(7),
  ],
});
const corsOptions = {
  origin: ['*'],
};

/* Middleware */
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet({
  contentSecurityPolicy: false,
}));
app.use('/public', express.static(assetsPath));
app.use(morgan(appConfig.MORGAN_TYPE));
/* End Middleware */

/* Router */
app.use('/hello', router.HelloRouter);
/* End Router */

app.listen(appConfig.SERVER_PORT, '0.0.0.0', async () => {
  console.log(`🚀 Server ready at ${
    appConfig.APP_URL
  }:${
    appConfig.SERVER_PORT
  }${
    apolloServer.graphqlPath
  }`);
});
apolloServer.applyMiddleware({ app });
