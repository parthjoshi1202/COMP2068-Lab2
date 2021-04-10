const Movie=require('../models/movies');

exports.index = async (request, response, next) => {
    try {
      const movies = await Movie.find().populate('genre');

      response.status(200).json(movies);
    } catch (error) {
      next(error);
    }
  };


exports.show = async (request, response, next) => {
    try {
      const { id } = request.params;

      const movie = await Movie.findById(id).populate('genre');

      response.status(200).json(movie);
    } catch (error) {
      next(error);
    }
  };


exports.create = async (request, response, next) => {
    try {
      const {
        title,
        length,
        year,
        synopsis,
        rating,
        genre
      } = request.body;

      const movie = await Movie.create({
        title,
        length,
        year,
        synopsis,
        rating,
        genre
      });

      response.status(200).json({
        message: "Movie was created successfully",
        status: "success",
        movie
      });
    } catch (error) {
      next(error);
    }
  };


  exports.update =async (request, response, next) => {
    try {
      const{ id,
        title,
        length,
        year,
        synopsis,
        rating,
        genre } = request.body;
  
      await Movie.findOneAndUpdate({ _id: id}, {
        id,
        title,
        length,
        year,
        synopsis,
        rating,
        genre
      });

      const movie= await Movie.findById(id);
  
      response.status(200)
      .json({
        message: "Movie was updated successfully",
        status: "succcess",
        movie
      });
    } catch (error) {
      next(error);
  }
  };



  exports.destroy = async (request, response, next) => {
    try {
      const { id } = request.body;

      await Movie.findOneAndDelete({ _id: id });
      
      response.status(200)
      .json({
        message: "Movie was deleted successfully",
        status: "success"
      });
    } catch (error) {
      next(error);
    }
  };

