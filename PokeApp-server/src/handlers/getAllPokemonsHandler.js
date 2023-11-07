const {getAllPokemon} = require('../controllers/getAllPokemons')


const getAllPokemonHandler = async(req, res) => {
    try {
        const pokemons = await getAllPokemon()
        if(pokemons === null || pokemons === undefined) return res.status(404).send({ error: "No Pokemon Found" });
        return res.status(200).json(pokemons)
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = { getAllPokemonHandler }