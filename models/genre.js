const mongoose=require('mongoose');

const GenreSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      unique: true,
      dropDups:true,
      set: value => value.trim().replace(/\s+/g, " ").toLowerCase(),
      validate: [
        {
          validator: async function (value) {
            const count = await this.model('Genre')
            .countDocuments({ name: value });
            return !count;
          },
          message: props => `${props.value} exists. Please try a different genre name.`
        }
      ]
    }
  }, {
    timestamps: true
  });

GenreSchema.methods.getMovies=function () {
  return mongoose.model('Movie').find({
    genre: this._id
  });
}


module.exports=mongoose.model('Genre',GenreSchema);

