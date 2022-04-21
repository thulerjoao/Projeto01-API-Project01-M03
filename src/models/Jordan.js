const mongoose = require('mongoose')

const JordanSchema = new mongoose.Schema({
    modelo: {type: String, require: true},
    descricao:{type: String, require: true},
    foto:{type: String, require: true},
    preco:{type: Number, require: true},
})

const Jordan = mongoose.model('jordans', JordanSchema)

module.exports = Jordan;
