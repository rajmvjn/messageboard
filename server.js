var express = require('express');
var app = express();
var bodyParser = require('body-parser')

var messages = [{text:'some text', owner:'Tim'}, {text:'other text', owner:'Raj'}]

app.use(bodyParser.json())

app.use( ( req, res, next ) => {
    res.header("Acces-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

var api = express.Router();

api.get('/messages', ( req, res ) => {
    res.send(messages);
})

api.get('/messages/:user', ( req, res ) => {
    var user = req.params.user;
    var result = messages.filter(message => message.owner == user)
    res.json(result);
})

api.post('/messages', ( req, res ) => {
    messages.push(req.body);
    res.json(req.body);
})

app.use('/api', api);

app.listen(63145)
