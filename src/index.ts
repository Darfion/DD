import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import { config } from "dotenv";
import express from "express";
import admin from "firebase-admin";
import { express as voyagerMiddleware } from "graphql-voyager/middleware";
import mongoose from "mongoose";

/* import firebaseConfig from "../../SS.json"; */
import models from "./models";
import resolvers from "./resolvers";
import typeDefs from "./schema";

config();
(async () => {
  const {
    type,
    project_id,
    private_key_id,
    private_key,
    client_email,
    client_id,
    auth_uri,
    token_uri,
    auth_provider_x509_cert_url,
    client_x509_cert_url,
    databaseURL,
  } = process.env;

  const firebaseConfig = {
    type,
    project_id,
    private_key_id,
    private_key,
    client_email,
    client_id,
    auth_uri,
    token_uri,
    auth_provider_x509_cert_url,
    client_x509_cert_url,
    databaseURL,
  };
  console.log(firebaseConfig, "vzgooooo");
  admin.initializeApp({
    credential: admin.credential.cert(firebaseConfig as admin.ServiceAccount),
    databaseURL,
  });

  var db = admin.database();
  db.ref(`/words/vzgo`).push({ word: "8888" }, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("333");
    }
  });

  const app = express();
  const { PORT, FRONT_PORT, MONGODB_URL, APOLLO_PATH } = process.env;

  const corsOptions = {
    origin: FRONT_PORT,
    credentials: true,
  };

  app.use("/voyager", voyagerMiddleware({ endpointUrl: "/graphql" }));
  app.use(cors(corsOptions));

  app.use(async () => {
    console.log("1111");

    /*     const x = firebase.initializeApp(firebaseConfig);
    const db = x.database();
    db.ref(`/words`).push({ word: "vzgo" }, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log("333");
      }
    }); */

    console.log("2222");
  });

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({ req, res }) => {
      const currentUser = null;
      return { res, req, currentUser, models };
    },
  });

  /*   try {
    await mongoose.connect(`${MONGODB_URL}`, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      poolSize: 10,
    });
  } catch (error) {
    console.log(`Mongo DB Host not found!`);
    process.exit(1);
  } */

  server.applyMiddleware({ app, path: APOLLO_PATH, cors: false });

  app.listen({ port: PORT }, () => {
    console.log(`Apollo Server on http://localhost:${PORT}/graphql`);
  });
})();
