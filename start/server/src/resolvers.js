module.exports = {
  Query: {
    pokemon: (_, { id }, { dataSources }) =>
      dataSources.pokeAPI.getPokemonById({ pokeID: id }),
    // me: (_, __, { dataSources }) => dataSources.userAPI.findOrCreateUser()
  }
};