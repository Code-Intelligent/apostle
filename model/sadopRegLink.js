const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const RegLinkSchema = new Schema({
    link : {
        type:String
    },
    
})


module.exports = mongoose.model('SadopRegLink', RegLinkSchema);