const express = require('express'),
ejs = require('ejs'),
bodyParser = require('body-parser'),
mongoose = require('mongoose'),
app = express()

const router = require('./routes/langRouter')

mongoose.connect("mongodb://localhost/mult_lang", {useNewUrlParser:true, useUnifiedTopology:true})
mongoose.Promise = global.Promise
mongoose.connection.on('open', () => {console.log("Baza bilan ulandi...")})

app.set('view engine', 'ejs')
app.set('port', process.env.PORT || 1700)

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:false}))
app.use('/', router)

app.listen(app.get('port'), () => {console.log("Server ishga tushdi. PORT: " + app.get('port'))})