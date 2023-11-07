const { postPokemon } = require('../controllers/postPokemon.js');

const postPokemonHandler = async (req, res) => {
    const {name, image, hp, attack, defense, speed, height, weight, types } = req.body;
    try {
        const response = await postPokemon(name, image, hp, attack, defense, speed, height, weight, types);
        if(!response){
            return res.status(400).send(error.message)
        }
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = { postPokemonHandler }