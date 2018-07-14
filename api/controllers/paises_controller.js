'use strict'

var paises = require('../models/paises_model');

exports.list_all_paises = function(req, res) {
  paises.find({}, function(error, pais) {
    if(error)
      response.send(error);
    console.log(pais);
    res.send(pais);
  });

};

exports.crear = function (req, res) {
  let pais = new paises (
    {
      name: req.body.name,
    }
  );

  pais.save (function (err) {
    if(err) {
      return next (err);
    }
    res.send('Notice created successfully');
  });
}
