const { Router } = require('express')
const { getAllPokemonHandler } = require('../handlers/getAllPokemonsHandler.js');
const { getPokemonByIdHandler } = require('../handlers/getPokemonByIdHandler.js');
const { getPokemonByNameHandler } = require('../handlers/getPokemonByNameHandler.js');
const { postPokemonHandler } = require('../handlers/postPokemonHandler.js');
const { deletePokemonHandler } = require('../handlers/deletePokemonHandler.js');
const { updatePokemonHandler } = require('../handlers/updatePokemonHandler.js');

const pokemonRouter = Router()

pokemonRouter.get('/search', getPokemonByNameHandler)
pokemonRouter.get('/', getAllPokemonHandler);
pokemonRouter.get('/:id', getPokemonByIdHandler)
pokemonRouter.post('/', postPokemonHandler)
pokemonRouter.put('/:name', updatePokemonHandler)
pokemonRouter.delete('/:name', deletePokemonHandler)

module.exports = pokemonRouter