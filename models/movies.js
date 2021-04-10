const mongoose=require('mongoose');

const MovieSchema=new mongoose.Schema({
    title: {
        type: String, 
        required: true
    },
    length: {
        type: String,
        required: true
    }, 
    year: {
        type: Number
    },
    synopsis: {
        type: String
    },
    rating: {
        type: String, 
        enum: ["G", "PG", "PG-13", "A-14", "R", "M"]
    },
    genre: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Genre'
    }
}, {
    timestamps: true
});

module.exports= mongoose.model('Movie', MovieSchema);

