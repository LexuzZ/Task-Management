const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schemas/taskSchema');
const resolvers = require('./resolvers/taskResolver');
const { connectDB } = require('./database');

const app = express();

const server = new ApolloServer({ typeDefs, resolvers });
server.start().then(() => {
  server.applyMiddleware({ app });
  connectDB();

  app.listen(4000, () => {
    console.log('Server running on http://localhost:4000/graphql');
  });
});

module.exports = app;