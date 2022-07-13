
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();

// Impoportando rutas
const customerRoutes = require('./routes/customer');

// Setting
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');                    // Motor de plantillas
app.set('views', path.join(__dirname, 'views'));

// Middlewares - 
app.use(morgan('dev')); // ejecutar cambios

// Conexión MYSQL
app.use(myConnection(mysql, {
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: '',
  database: 'crudnodejs'
}, 'single'));
app.use(express.urlencoded({extended: false}));

// Routes
app.use('/', customerRoutes);

// Statics files
app.use(express.static(path.join(__dirname, 'public')));

// Escuchando
app.listen(app.get('port'), () =>{
  console.log("Conectado en el puerto 3000!");
});