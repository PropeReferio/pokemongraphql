module.exports = {
  Query: {
    pokemon: (_, { id }, { dataSources }) =>
      dataSources.pokeAPI.getPokemonById({ pokeID: id }),
    originalPokes: (_, __, { dataSources}) =>
      dataSources.pokeAPI.getOriginals()
    // me: (_, __, { dataSources }) => dataSources.userAPI.findOrCreateUser()
  }
};