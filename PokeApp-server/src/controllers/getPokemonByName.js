const axios = require("axios");
const { Pokemon } = require("../db.js");
const { Op } = require("sequelize");
const URL = "https://pokeapi.co/api/v2/pokemon/";

const getPokemonByName = async (name) => {
  try {
    const pokemonDb = await Pokemon.findOne({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
    });
    if ( pokemonDb !== null && pokemonDb !== undefined ) {
      return pokemonDb;
    }

    const { data } = await axios.get(`${URL}${name}`);
    if (data === null || data === undefined) {
      return null;
    }
    
    return data;
  } catch (error) {
    return null;
  }
};

module.exports = { getPokemonByName };
