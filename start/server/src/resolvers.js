module.exports = {
  Query: {
    pokemon: (_, { id }, { dataSources }) =>
      dataSources.pokeAPI.getPokemonById({ pokeID: id }),
    originalPokes: (_, __, { dataSources}) =>
      dataSources.pokeAPI.getOriginals(),
    startersByType: (_, { type }, { dataSources }) =>
      dataSources.pokeAPI.getStartersByType({ pokeType: type }),
    originalsByType: (_, { type }, { dataSources }) =>
      dataSources.pokeAPI.getOriginalsByType({ pokeType: type })
    // me: (_, __, { dataSources }) => dataSources.userAPI.findOrCreateUser()
  }
};