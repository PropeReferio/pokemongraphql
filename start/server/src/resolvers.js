module.exports = {
  Query: {
    pokemon: (_, { id }, { dataSources }) =>
      dataSources.pokeAPI.getPokemonById({ pokeID: id }),
    originalPokes: (_, __, { dataSources}) =>
      dataSources.pokeAPI.getOriginals(),
    startersByType: (_, { type }, { dataSources }) =>
      dataSources.pokeAPI.getStartersByType({ pokeType: type }),
    originalsByType: (_, { type }, { dataSources }) =>
      dataSources.pokeAPI.getOriginalsByType({ pokeType: type }),
    pokesByType: (_, { type }, { dataSources }) =>
      dataSources.pokeAPI.getPokesByType({ pokeType: type }),
    // pokesByType: (_, { type }, { dataSources }) =>
    //   dataSources.pokeAPI.getPokesByType({ pokeType: type })
    // me: (_, __, { dataSources }) => dataSources.userAPI.findOrCreateUser()
  }
};