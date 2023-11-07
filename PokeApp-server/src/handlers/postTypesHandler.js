const { postType } = require('../controllers/postTypes')


const postTypeHandler = async(req, res)=>{
    const { name } = req.body
    try {
        
        const response = await postType(name)

        if(!response){
            return res.status(400).send('Cannot post Type')
        }

        return res.json(response)

    } catch (error) {
        return res.status(500).json({error: error.message})
    }
} 

module.exports = { postTypeHandler }