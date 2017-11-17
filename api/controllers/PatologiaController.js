/**
 * PatologiaController
 *
 * @description :: Server-side logic for managing Patologias
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  index: function(req, res) {
    Patologia.find().exec(function(err, patologia){
      if (err) sails.log(patologia);
      res.view({
        patologia: patologia
      });
    });
  },

  nuevo: function(req, res) {
    res.view();
  },

  new: function(req, res) {
    Patologia.create(req.params.all()).exec(function(err, patologia){
      if (err) sails.log(err);
      res.redirect('back');
    });
  },

  delete: function(req, res) {
    Describe.destroy({patologia: req.param('id')}).exec(function(err, describe){
      if (err) sails.log(err);
      Patologia.destroy({id: req.param('id')}).exec(function(err, patologia){
        res.redirect('back');
      });
    });
  },

  editar: function(req, res) {
    Patologia.findOne(req.param('id')).exec(function(err, patologia){
      res.view({
        patologia: patologia
      });
    });
  },

  cambiar: function(req, res) {
    Patologia.update(req.param('id'), req.params.all()).exec(function(err, patologia){
      if (err) sails.log(err);
      res.redirect('back');
    });
  },

    frecuencia: function(req, res) {
      var query = Patologia.query("SELECT patologia.NombrePat AS Nombre, COUNT(describe_.Patologia_idPatologia) AS Frecuencia "
      + "From patologia "
      + "INNER JOIN describe_ "
      + "ON patologia.idPatologia = describe_.Patologia_idPatologia "
      + "group by patologia.NombrePat;", function(err, patologia){
      if (err) sails.log(err);
      res.view({
      patologia: patologia,
      });
    });
  },
}
