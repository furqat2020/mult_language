const Lang = require('../models/lang_db')

module.exports = {

    show_lang: (req, res) => {
        var lang = "uz"
        Lang.findOne({"lang":lang})
        .then(data => {res.render('index', {data:data})})
        .catch(error => {console.error(error)})
    },

    show_lang_tip: (req, res) => {
        var lang = req.body.lang
        Lang.findOne({"lang":lang})
        .then(data => {res.send(data)})
        .catch(error => {console.error(error)})
    }
}