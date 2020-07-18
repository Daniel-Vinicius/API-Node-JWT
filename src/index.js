const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// const app = express(); para iniciar a api
app.use(bodyParser.json()); //para entender json
app.use(bodyParser.urlencoded({extended: false}));
//urlencoded para ele entender parametros via url
//app.listen = porta que eu quero ouvir

require('./app/controllers/index')(app);



app.listen(3000)

