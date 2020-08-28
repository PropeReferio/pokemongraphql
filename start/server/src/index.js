require('dotenv').config();
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const { createStore } = require('./utils');
const resolvers = require('./resolvers');

// const LaunchAPI = require('./datasources/launch');
// const UserAPI = require('./datasources/user');
const PokeAPI = require('./datasources/pokemon');

const store = createStore();

const server = new ApolloServer({ 
  typeDefs,
  resolvers,
  dataSources: () => ({
    pokeAPI: new PokeAPI(),
    // launchAPI: new LaunchAPI(),
    // userAPI: new UserAPI({ store })
  }),
  engine: {    
    reportSchema: true,
    variant: "current"
  }
});

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
