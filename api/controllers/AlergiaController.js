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
      res.redirect('back');
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
    var afectado;
    var alergia;
    for (var i = 0 ; i < req.param('id').length ; i++ ) {
      if (req.param('id').substring(i,i+1) == "+") {
        afectado = req.param('id').substring(0, i);
        alergia = req.param('id').substring(i+1);
      }
    }
    Alergia.query("delete from alergias where Paciente_idPaciente = "+afectado+" and Alergia like '%"+alergia+"%'", function(err, alergia){
      if (err) sails.log(err);

    });
    res.redirect('back');
  },

};

