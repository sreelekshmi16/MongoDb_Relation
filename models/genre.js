const Joi = require('joi');
const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  }
});

const Genre = mongoose.model('Genre', genreSchema);

function validateGenre(genre) {
  const schema = {
    name: Joi.string().min(3).required()
  };

  return Joi.validate(genre, schema);
}


async function createGenre(){
    const genre = new Genre({
        name:'Action'
       
    });
    
const result = await genre.save()
    console.log(result);
}
// createGenre()

exports.genreSchema = genreSchema;
exports.Genre = Genre; 
exports.validate = validateGenre;