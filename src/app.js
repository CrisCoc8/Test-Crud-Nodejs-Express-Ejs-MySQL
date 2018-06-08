const express = require('express');
const path = require('path');
const morgan = require('morgan'); //peticiones
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();

// Importando Rutas
//const customerRoutes = require('./routes/customer');
const customerRoutes = require('./routes/customer');

//Configurar express "Settings"
//-----------------------------------------------------------------------------
app.set('port',process.env.PORT || 3000);
//Definiendo el motor de platillas
app.set('view engine', 'ejs');
//Indicamos donde esta el motor de platillas
app.set('views', path.join(__dirname, 'views'));


//middlewares (PETICIONES (de donde llegan y se muestra en consola))
//----------------------------------------------------------------------------
app.use(morgan('dev'));
app.use(myConnection(mysql, {
  host: 'localhost',
  user: 'root',
  password: 'U1223006020',
  port: 3306,
  database: 'juegos'
},'single'));
app.use(express.urlencoded({extended: false}));

//routes(URL's de usuarios)
//----------------------------------------------------------------------------
app.use('/', customerRoutes);

// Static Files (Imagenes CSS, JS, etc)
app.use(express.static(path.join(__dirname, 'public')));


//Iniciar el servidor con el numero del puerto
//----------------------------------------------------------------------------
app.listen(app.get('port'), () => {
  console.log('Server on port 3000');
});
