const Produto = require('../models/Produto');

module.exports = {
    async getAll(req, res) {
        try {
            const produtos = await Produto.find().sort('id');

            return res.json(produtos);
        } catch (err) {
            return res.send(err);
        }
    },
    
    async getOne(req, res) {
        try {
            const produto = await Produto.find({ id: req.params.id });

            return res.json(produto);
        } catch (err) {
            return res.send(err);
        }        
    },

    async store(req, res) {
        try {
            const { nome, tipo, genero, faixaEtaria, tamanho, cor, preco, promocao, marca } = req.body;

            // const busca = await Produto.find({ ra: req.body.ra });
            // if (busca.length != 0)
            //     return res.send('RA já cadastrado!');

            const produto = await Produto.create({
                nome,
                tipo,
                genero,
                faixaEtaria,
                tamanho,
                cor,
                preco,
                promocao,
                marca
            });

            // req.io.emit('incluir-aluno', produto);

            return res.json(produto);
        } catch (err) { 
            return res.send(err);
        }
    },

    async update(req, res) {

    },

    async updateByRa(req, res) {
        try {
            const busca = await Produto.find({ _id: req.params._id });
            if (busca.length == 0)
                return res.send('Produto não cadastrado!');

            const produto = busca[0];            
            const updatedProduto = await Produto.findByIdAndUpdate(produto._id, req.body, {new: true});

            // req.io.emit('alterar-aluno', aluno);
    
            return res.json(updatedProduto);
        } catch(err) {
            return res.send(err)
        }        
    },

    async updateById(req, res) {
        try {
            const updatedProduto = await Produto.updateOne(
                { _id: req.params.id },
                {$set: {
                    ra: req.body.ra,
                    nome: req.body.nome,
                    email: req.body.email
                }}
            );
    
            return res.json(updatedProduto);
        } catch(err) {
            return res.send(err)
        }        
    },

    async remove(req, res) {

    },

    async removeByRa(req, res) {
        try {
            const removedProduto = await Produto.deleteOne({ ra: req.params.ra });

            // req.io.emit('remover-aluno', removedaluno);

            return res.json(removedProduto);   
        } catch (err) {
            return res.send(err);
        }
    },

    async removeById(req, res) {
        const removedProduto = await Produto.deleteOne({ _id: req.params.id });

        return res.json(removedProduto);
    } 
};