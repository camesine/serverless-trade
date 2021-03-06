const mongoose = require('mongoose')
const config = require('../config/config')
mongoose.connect(config.DATABASE.SERVER)
mongoose.Promise = global.Promise

const UserSchema = mongoose.Schema({
    Email: {
			type: String,
			required: true,
    },
    Nombre: {
			type: String,
			required: true,
    },
    Apellido: {
			type: String,
			required: true,
    },
    Edad: {
			type: Number,
			required: true,
    },
    Password: {
			type: String,
			required: true,
		},
		NewPassword: {
			type: String,
			required: true,
    },
})

module.exports = mongoose.model('User', UserSchema)
