const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

const UsuarioSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        trim: true
    },
    cpf: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    senha: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

// UsuarioSchema.pre(store, function(next) {
//     var usuario = this;

//     if (!usuario.isModified('senha')) return next();

//     bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
//         if (err) return next(err);

//         bcrypt.hash(usuario.senha, salt, function(err, hash) {
//             if (err) return next(err);

//             usuario.senha = hash;
//             next();
//         });
//     });
// });

// UsuarioSchema.methods.compararSenha = function(senhaInformada, cb) {
//     bcrypt.compare(senhaInformada, this.senha, function(err, coincide) {
//         if (err) return cb(err);
//         cb(null, coincide);
//     });
// };

module.exports = mongoose.model('Usuario', UsuarioSchema);