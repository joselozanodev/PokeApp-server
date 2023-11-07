const { Router } = require('express')
const { getTypesHandler } = require('../handlers/getTypesHandler.js');
const { postTypeHandler } = require('../handlers/postTypesHandler.js')

const typeRouter =  Router()

typeRouter.get('/', getTypesHandler)
typeRouter.post('/', postTypeHandler)

module.exports = typeRouter 