const { Pokemon, Type } = require('../db.js');

const updatePokemon = async (name, {image ,hp, attack, defense, speed, height, weight, types}) => {
    try {
        const pokemon = await Pokemon.findOne({where: { name }, include: Type})
        
        if(!pokemon){
            return null
        }

        if(types){
            const typesToChange = await Promise.all(types.map(type=> Type.findOne({where: { name: type}})))
            await pokemon.setTypes(typesToChange);
        }

        pokemon.image = image;
        pokemon.hp = hp;
        pokemon.attack = attack;
        pokemon.defense = defense;
        pokemon.speed = speed;
        pokemon.height = height;
        pokemon.weight = weight;
        pokemon.types = types;

        await pokemon.save();
        return pokemon;
    } catch (error) {
        return null
    }
}

module.exports = {updatePokemon};