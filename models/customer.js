const Joi = require('joi');
const mongoose = require('mongoose');

const Customer = mongoose.model('Customer', new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  isGold: {
    type: Boolean,
    default: false
  },
  phone: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  }
}));

function validateCustomer(customer) {
  const schema = {
    name: Joi.string().min(5).max(50).required(),
    phone: Joi.string().min(5).max(50).required(),
    isGold: Joi.boolean()
  };

  return Joi.validate(customer, schema);
}

// async function createCustomer(){
//     const customer = new Customer({
//         name:'himadath',
//         isGold:true,
//         phone:9902122345
//     });

    
// const result = await customer.save()
//     console.log(result);
// }
// createCustomer()

exports.Customer = Customer; 
exports.validate = validateCustomer;