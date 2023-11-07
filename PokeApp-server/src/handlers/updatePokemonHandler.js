const { updatePokemon } = require("../controllers/updatePokemon");

const updatePokemonHandler = async (req, res) => {
        const { name } = req.params;
    try {
        const response = await updatePokemon(name, req.body);
        if(!response){
            return res.status(404).json("Pokemon not found");
        }
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}

module.exports = { updatePokemonHandler };