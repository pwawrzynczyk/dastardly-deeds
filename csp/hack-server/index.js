var express = require('express')
var cors = require('cors')
var app = express()
var fs = require('fs');

app.use(cors())

app.get('*', function (req, res) {
    const data = req.query.data;
    fs.appendFile('./hack-log.txt', data + '\t', function (err) {
        if (err) console.log(err)
    });
    res.sendStatus(200)
})

app.listen(3333)
