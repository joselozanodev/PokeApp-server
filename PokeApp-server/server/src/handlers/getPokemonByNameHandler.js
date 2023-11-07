const { getPokemonByName } = require('../controllers/getPokemonByName.js');

const getPokemonByNameHandler = async (req, res) => {
    const { name } = req.query;
    try {
        const response = await getPokemonByName(name);
        if (!response) {
            return res.status(404).send('Pokemon not found')
        }
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).send('Internal server error')
    }
}

module.exports = { getPokemonByNameHandler }