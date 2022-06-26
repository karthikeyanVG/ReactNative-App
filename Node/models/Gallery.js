const mongoose = require('mongoose');

const Gallery = new mongoose.Schema({
    galleryImage:{
        type:String
    },
    galleryImages:{
        type:String
    },
    galleryImages1:{
        type:String
    },
    galleryTitle:{
        type:String
    },
    gallerySubTitle:{
        type:String
    },
    galleryLink:{
        type:String
    }
});

module.exports = mongoose.model('gallery',Gallery);