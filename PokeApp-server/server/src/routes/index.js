const { Router } = require('express');
const { getAllPokemonHandler } = require('../handlers/getAllPokemonsHandler.js');
const { getPokemonByIdHandler } = require('../handlers/getPokemonByIdHandler.js');
const { getPokemonByNameHandler } = require('../handlers/getPokemonByNameHandler.js');
const { postPokemonHandler } = require('../handlers/postPokemonHandler.js');
const { deletePokemonHandler } = require('../handlers/deletePokemonHandler.js');
const { updatePokemonHandler } = require('../handlers/updatePokemonHandler.js');
const  typeRouter  = require('./types.js');
const pokemonRouter = require('./pokemon.js')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/pokemon', pokemonRouter)
router.use('/types', typeRouter)

module.exports = router;
