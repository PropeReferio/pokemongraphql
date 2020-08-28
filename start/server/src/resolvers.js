module.exports = {
  Query: {
    pokemon: (_, { id }, { dataSources }) =>
      dataSources.pokeAPI.getPokemonById({ pokeID: id }),
    originalPokes: (_, __, { dataSources}) =>
      dataSources.pokeAPI.getOriginals(),
    startersByType: (_, { type1 }, { dataSources }) =>
      dataSources.pokeAPI.getStartersByType({ pokeType: type1 })
    // me: (_, __, { dataSources }) => dataSources.userAPI.findOrCreateUser()
  }
};