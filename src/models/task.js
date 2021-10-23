const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    titulo: String,
    descripcion: String,
    estatus: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('task',taskSchema);