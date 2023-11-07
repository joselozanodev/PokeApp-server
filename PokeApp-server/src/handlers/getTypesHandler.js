const { getAllTypes } = require('../controllers/getTypes.js');

const getTypesHandler = async (req, res) => {
    try {
        const response = await getAllTypes();
        if (!response) {
            return res.status(404).send('Types not found')
        }
        return res.status(200).json(response);   
    } catch (error) {
        return res.status(500).send('Internal server error')
    }
}

module.exports = { getTypesHandler }