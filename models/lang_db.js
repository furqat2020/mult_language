const mongoose = require('mongoose')

var mult_langSchema = new mongoose.Schema({
    title: {type:String, required:true},
    content: {type:String, required:true},
    lang: {type:String, required:true}
})

module.exports = mongoose.model('lang', mult_langSchema)