'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PaisesSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the task'
  }
});

module.exports = mongoose.model("Paises", PaisesSchema);
