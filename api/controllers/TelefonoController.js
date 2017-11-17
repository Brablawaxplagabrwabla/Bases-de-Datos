/**
 * TelefonoController
 *
 * @description :: Server-side logic for managing Telefonoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  nuevo: function(req, res) {
    Paciente.find({id: req.param('id')}).exec(function (err, paciente) {
      res.view({
        telefono: paciente
      });
    });
  },

  crear: function(req, res) {
    Telefono.create({
      persona: req.param('persona'),
      telefono: req.param('telefono')
    }).exec( function (err, telefono) {
      if (err) sails.log(err);
      res.redirect('/Paciente/show/'+telefono.persona)
    });
  },

  index: function(req, res) {
    Telefono.find({persona: req.param('id')}).exec( function (err, paciente) {
      if (err) sails.log(err);
      return paciente;
    });
  },

  bye: function(req, res) {
    Telefono.destroy({
      persona: req.param('id').substring(0,1),
      telefono: req.param('id').substring(2)
    }).exec(function(err){
      if (err) sails.log(err);
    });
    res.redirect('back');
  },

  delete: function(req, res) {
    Telefono.destroy({persona: req.param('id')}).exec(function (err) {
      if (err) sails.log(err);
      return;
    });
  },

  cambio: function(req, res) {
    Telefono.find({
      persona: req.param('id').substring(0,1),
      telefono: req.param('id').substring(2)
    }).exec(function(err, telefono){
      res.view({
        telefono:telefono
      });
    })
  }

};

