const URL = "https://pokeapi.co/api/v2/pokemon"
const { Pokemon } = require('../db.js')
const axios = require('axios')

const getPokemonById = async(id)=>{
    try {
        if(id.includes('-')){
            const pokemonDb = await Pokemon.findByPk(id)
            if(pokemonDb){
                return pokemonDb
            }
        }

        const { data } = await axios.get(`${URL}/${id}`)
        if(!data){ 
            return null
        }
        
        return data
    } catch (error) {
        return null
    }
}

module.exports = { getPokemonById }