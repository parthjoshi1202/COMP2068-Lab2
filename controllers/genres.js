//const { request, response } = require('express');
const Genre=require('../models/Genre');

exports.index = async (request, response, next) => {
    try {
      const genres = await Genre.find();

      response.status(200)
      .json(genres);
    } catch (error) {
      next(error);
    }
  };

  exports.show = async (request, response, next) => {
    try {
      const { id } = request.params;
      const genre = await Genre.findById(id);
      const movies = await genre.getMovies();

      response.status(200)
      .json({ ...genre._doc, movies });
    } catch (error) {
      next(error);
    }
  };

exports.create=async(request, response, next) => {
    try {
        const { name } = request.body;
        const genre= await Genre.create ({ name });

        response.status(200)
        .json({
            message: "Genre created successfully",
            status:"success",
            genre
        });
    } catch (error) {
        next(error);
    }
};


exports.update =async (request, response, next) => {
  try {
    const{ id, name } = request.body;

    await Genre.findOneAndUpdate({ _id: id}, {name});
    const genre= await Genre.findById(id);

    response.status(200)
    .json({
      message: "Genre was updated successfully",
      status: "succcess",
      genre
    });
  } catch (error) {
    next(error);
}
};


exports.destroy = async (request, response, next) => {
  try {
    const { id } = request.body;
    
    await Genre.findOneAndDelete({ _id: id });
    response.status(200)
    .json({
      message: "Genre was deleted successfully",
      status: "success"
    });
  } catch (error) {
    next(error);
  }
};