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

  async getOriginals() {
    let arr = [];
    for (let i = 1; i < 152; i++) {
      let response = await this.get(`pokemon/${i}`);
      arr.push(response);
    }
    return arr.map(poke => this.pokeReducer(poke))
  }
  async getStartersByType({ pokeType }) {
    let arr = [];
    for (let i = 1; i < 10; i++) {
      let response = await this.get(`pokemon/${i}`);
      for (let j = 0; j < response.types.length; j++) {
        if (response.types[j].type.name === pokeType)
        arr.push(response);
      }
    }
    return arr.map(poke => this.pokeReducer(poke))
  }

  async getOriginalsByType({ pokeType }) {
    let arr = [];
    for (let i = 1; i < 152; i++) {
      let response = await this.get(`pokemon/${i}`);
      for (let j = 0; j < response.types.length; j++) {
        if (response.types[j].type.name === pokeType)
        arr.push(response);
      }
    }
    return arr.map(poke => this.pokeReducer(poke))
  }
  async getPokesByType({ pokeType }) {
    let arr = [];
    for (let i = 1; i < 894; i++) {
      let response = await this.get(`pokemon/${i}`);
      for (let j = 0; j < response.types.length; j++) {
        if (response.types[j].type.name === pokeType)
        arr.push(response);
      }
    }
    return arr.map(poke => this.pokeReducer(poke))
  }
  // async getPokesByType({ pokeType }) {
  //   let arr = [];
  //   let response = await this.get(`type/${pokeType}`);

  //   return response.pokemon.map(poke => this.pokeReducer(poke))
  // }
  
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
      type2: poke.types[1] && poke.types[1].type.name,
    };
  }
  // pokeReducer(poke) {
  //   return {
  //     id: poke.id,
  //     name: poke.name,
  //     region: poke.location_area_encounters,
  //     type1: poke.types[0].type.name,
  //     type2: poke.types[1].type.name,
  //   };
  // }
}

module.exports = PokeAPI;