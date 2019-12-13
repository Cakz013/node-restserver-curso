const express = require('express')
const app = express()
const bodyParser = require('body-parser');
require('./config/config.js');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

//parse application/json
app.use(bodyParser.json())
 
app.get('/usuario', function (req, res) {
    // res.header('application/json');
  res.json('Get usuario');
})
app.post('/usuario', function (req, res) {
    // res.header('application/json');
     let body = req.body;
     if (body.nombre === undefined){
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });
     }else{
        res.json({persona: body});     
     }
})
app.put('/usuario/:id', function (req, res) {
    // res.header('application/json');
    let id = req.params.id;
    res.json({
        id
    });
})
app.delete('/usuario', function (req, res) {
  // res.header('application/json');
  res.json('delete usuario');
})
 
app.listen(process.env.PORT,() => {
console.log('Escuchando el puerto ', process.env.PORT);
})