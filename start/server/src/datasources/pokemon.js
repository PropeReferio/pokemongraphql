const { RESTDataSource } = require('apollo-datasource-rest');

class PokeAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://pokeapi.co/api/v2/';
  }

  async getPokemonById({ pokeID }) {
    const response = await this.get(`pokemon/${pokeID}`);
    return this.pokeReducer(response);
  }
  
  // getLaunchesByIds({ launchIds }) {
  //   return Promise.all(
  //     launchIds.map(launchId => this.getLaunchById({ launchId })),
  //   );
  // }
  
  // async getAllPokemon() {
  //   const response = await this.get('launches');
  //   return Array.isArray(response)
  //   ? response.map(poke => this.pokeReducer(poke))
  //     : [];
  // }


  pokeReducer(poke) {
    return {
      id: poke.id,
      name: poke.name,
      region: poke.location_area_encounters,
      type1: poke.types[0].type.name,
    };
  }
}

module.exports = PokeAPI;