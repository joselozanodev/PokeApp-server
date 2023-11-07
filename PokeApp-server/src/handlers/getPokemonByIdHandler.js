const { getPokemonById } = require('../controllers/getPokemonById')

const getPokemonByIdHandler = async (req, res) => {
   const { id } = req.params
   try {
      const response = await getPokemonById(id)
      if(!response){
         return res.status(404).send('Pokemon not found')
      }
      return res.status(200).json(response)
   } catch (error) {
    return res.status(500).send('Internal server error')
   }
}

module.exports = { getPokemonByIdHandler }