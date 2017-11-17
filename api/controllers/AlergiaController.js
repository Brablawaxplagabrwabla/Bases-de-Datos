/**
 * AlergiaController
 *
 * @description :: Server-side logic for managing Alergias
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  nuevo: function(req, res) {
    Paciente.findOne(req.param('id')).exec(function (err, paciente) {
      if (err) sails.log(err);
      res.view({
        alergia: paciente
      });
    });
  },

  crear: function(req, res) {
    Alergia.create({
      afectado: req.param('afectado'),
      alergia: req.param('alergia')
    }).exec( function (err, alergia) {
      if (err) sails.log(err);
      res.redirect('/Paciente/show/'+alergia.afectado)
    });
  },

  index: function(req, res) {
    Alergia.find({afectado: req.param('id')}).exec( function (err, paciente) {
      if (err) sails.log(err);
      return paciente;
    });
  },

  delete: function(req, res) {
    Alergia.destroy({afectado: req.param('id')}).exec(function (err) {
      if (err) sails.log(err);
      return;
    });
  },

  bye: function(req, res) {
    Alergia.destroy({
      afectado: req.param('id').substring(0,1),
      alergia: req.param('id').substring(2)
    }).exec(function(err){
      if (err) sails.log(err);
    });
    res.redirect('back');
  },

};

