const { Pokemon, Type } = require("../db.js");

const postPokemon = async (name,image, hp, attack, defense, speed, height, weight, types) => {
  try {
    if (
      !name ||
      !image ||
      !hp ||
      !attack ||
      !defense ||
      !types
    ) {
      return null
    }

    const newPokemon = await Pokemon.create({
      name,
      image,
      hp,
      attack,
      defense,
      speed: speed || null,
      height: height || null,
      weight: weight || null,
    });

    const typeObjects = await Type.findAll({
      where: {
        name: types
      }
    });

    await newPokemon.addTypes(typeObjects);

    return newPokemon;
    
  } catch (error) {
    return null
  }
};

module.exports = { postPokemon };
