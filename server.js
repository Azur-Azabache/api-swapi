var express = require('express');
var app = express();
var server = app.listen(3003, encender);

function encender() {
  console.log('Servidor Encendido');
}
app.use(express.static('public'));