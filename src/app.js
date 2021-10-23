const path = require('path')
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose')
const app = express();

//Conectar a la base de datos
mongoose.connect('mongodb://localhost/crud-mongo')
    .then(db => console.log('DB Conectada'))
    .catch(err => console.log(err));
//importar rutas
const indexRoutes = require('./routes/index');

//Configuraciones
app.set('port',process.env.PORT || 8081)
app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');

//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))

//app routes
app.use('/',indexRoutes);

//Iniciando servidor server
app.listen(app.get('port'),()=>{
    console.log(`Server on port ${app.get('port')}`)
});