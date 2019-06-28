const Usuario = require('../models/Usuario');

module.exports = {
    async getAll(req, res) {
        try {
            const usuarios = await Usuario.find().sort('id');

            return res.json(usuarios);
        } catch (err) {
            return res.send(err);
        }
    },
    
    async getOne(req, res) {
        try {
            const usuario = await Usuario.find({ _id: req.params.id });

            return res.json(usuario);
        } catch (err) {
            return res.send(err);
        }   
    },

    async Authenticate(req, res) {
        try {
            const { email, senha } = req.body;

            // const usuario = await Usuario.find({  });

            if (usuario)
                return res.send(true);

            return res.send(false);
        } catch (err) {
            return res.send(err);
        }
    },

    async store(req, res) {
        try {
            const { email, username, cpf, senha } = req.body;

            // // verificação de email, cpf e username
            // // email
            // const response = await Usuario.find({ email: email });
            // const aux = response.data;

            // if (aux.length === 0)
            //     return res.send('Email já cadastrado!');

            // // cpf
            // response = await Usuario.find({ cpf: cpf });
            // aux = response.data;

            // if (aux.length != 0)
            //     return res.send('CPF já cadastrado!');

            // // username
            // response = await Usuario.find({ username: username });
            // aux = response.data;

            // if (aux.length != 0)
            //     return res.send('Nome de usuário já cadastrado!');

            const usuario = await Usuario.create({
                email,
                username,
                cpf,
                senha
            });

            return res.json(usuario);
        } catch (err) {
            return res.send(err);
        }
    },

    async update(req, res) {
        try {

        } catch (err) {

        }
    },

    async remove(req, res) {
        try {
            const usuarioRemovido = await Usuario.deleteOne({ _id: req.params.id });

            return res.json(usuarioRemovido);
        } catch (err) {
            return res.send(err);
        }
    },
};