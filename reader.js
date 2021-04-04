const fs = require('fs')
const util = require('util')

const readerFile = util.promisify(fs.readFile)
const reader = async (path) =>{
    return await readerFile(path,'utf-8')
}

module.exports = reader