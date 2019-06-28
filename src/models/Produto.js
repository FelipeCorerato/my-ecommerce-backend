const mongoose = require('mongoose');

const ProdutoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    genero: {
        type: String,
        required: true
    },
    faixaEtaria: {
        type: String,
        required: true
    },
    tamanho: {
        type: String,
    },
    cor: {
        type: String,
        required: true
    },
    preco: {
        type: String,
        required: true
    },
    promocao: {
        type: String,
        defalut: '0'
    },
    marca: {
        type: String,
        default: null
    },
    foto: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Produto', ProdutoSchema);