var express = require('express');
var app = express();

var messages = [{text:'some text', owner:'Tim'}, {text:'other text', owner:'Raj'}]

app.get('/messages', (req, res) => {
    res.send(messages);
})

app.listen(1234)
