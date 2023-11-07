const { Pokemon } = require('../db.js');

const deletePokemon = async (name) => {

    try {
        const pokemon = await Pokemon.destroy({
            where: { name: name }
        })
        if(!pokemon){
            return null
        }
        return pokemon
    } catch (error) {
        return null
    }
}

module.exports = {deletePokemon};