const { Type } = require('../db')

const postType = async(name)=>{
    try {
        const type = await Type.create({
            name
        })

        return type

    } catch (error) {
        return null
    }
}

module.exports = { postType }