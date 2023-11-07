const { Pokemon, Type} = require("../db.js");

const getAllDbPokemons = async () => {
  try {
    const dbPokemons = await Pokemon.findAll({
      include: Type
    });
    const pokemonObject = dbPokemons.map((pokemon) => {
      const pokemonId = pokemon.id;
      const pokemonName = pokemon.name;
      const pokemonStats = [pokemon.hp, pokemon.attack, pokemon.defense, pokemon.speed];
      const pokemonSprite = {
        front_default: pokemon.image,
      }
      const pokemonTypes = pokemon.types.map((type) => type.name)

      const pokemonData ={
        pokemonId,
        pokemonName,
        pokemonStats,
        pokemonSprite,
        pokemonTypes,
        pokemonCreated: true,
      }
      return pokemonData;
    })
    
    return pokemonObject;
  } catch (error) {
    return null;
  }
};

module.exports = getAllDbPokemons;