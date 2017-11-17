/**
 * AlergiaController
 *
 * @description :: Server-side logic for managing Alergias
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  show: function(req, res) {
    Medicamento.find().exec(function(err, medicamentos){
      if (err) sails.log(err);
      res.view({
        medicamento: medicamentos
      })
    });
  },

  nuevo: function(req, res){
    res.view();
  },

  'new': function(req, res) {
    Medicamento.create({
      nombreComercial: req.param('nombreComercial'),
      efectosSec: req.param('efectosSec'),
      contraindicaciones: req.param('contraindicaciones')
    }).exec(function(err, medicamento){
      if (err) sails.log(err);
      res.redirect('back');
    });
  },

  editar: function(req, res) {
    Medicamento.find({
      id: req.param('id')
    }).exec(function(err, medicamento){
      if (err) sails.log(err);
      if (JSON.stringify(medicamento).length <= 2) {
        res.redirect('/404');
      }
      res.view({
        medicamento: medicamento[0]
      })
    });
  },

  update: function(req, res) {
    Medicamento.update({id: req.param('id')},{
      nombreComercial: req.param('nombreComercial'),
      efectosSec: req.param('efectosSec'),
      contraindicaciones: req.param('contraindicaciones')
    }).exec(function(err, medicamento){
      if (err) sails.log(err);
      if (!medicamento) {
        res.redirect('/500');
      }
      res.redirect('/Medicamento/show/'+medicamento[0].id);
    });
  },

  verMedicamentos: function(req,res) {
    var aux = req.param('id');
    Medicamento.query("select medicamento.idMedicamento, medicamento.NomComercial from medicamento"+
    "inner join (select Medicamento_idMedicamento from compactivos where CompActivos like concat('%','"+aux+"','%')) as tablita on medicamento.idMedicamento = tablita.Medicamento_idMedicamento", function(err, result){
      if (err) sails.log(err);
      if (result) {
        aux = JSON.parse(JSON.stringify(result));
        if ( JSON.stringify(result).length <= 2 ) {
          res.redirect('/500');
        }
        else {
          res.view({
            compactivo: req.param('id'),
            medicamento: aux
          });
        }
      }
      else {
        res.redirect('/500');
      }
    });
  },

  verNoTienen: function(req, res) {
    var aux = req.param('id');
    Medicamento.query('Select medicamento.idMedicamento, medicamento.NomComercial from compactivos '+
    'LEFT OUTER JOIN medicamento ON compactivos.Medicamento_idMedicamento = medicamento.idMedicamento ' +
    'where compactivos.CompActivos != \"'+aux+'\";', function(err, result){
      if (err) sails.log(err);
      if (result) {
        aux = JSON.parse(JSON.stringify(result));
        if (JSON.stringify(result).length <= 2 ) {
          res.redirect('/500');
        }
        res.view({
          compactivo: req.param('id'),
          medicamento: aux
        });
      }
      else {
        res.redirect('/500');
      }
    });
  }

};
