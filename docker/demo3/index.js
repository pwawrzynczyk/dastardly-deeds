var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())

app.get('/', function (req, res) {
    console.log('serving /')
    res.json({ msg: 'This is Express CORS example.' })
})

app.get('/file', function (req, res) {
    console.log('serving file')
    res.sendFile(`./${req.query.path}`, { root: __dirname })
})

app.listen(8080, function () {
    console.log('CORS-enabled web server listening on port 8080')
})

process.on('SIGINT', function() {
    process.exit();
});