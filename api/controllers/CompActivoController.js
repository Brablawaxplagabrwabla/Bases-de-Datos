/**
 * CompActivoController
 *
 * @description :: Server-side logic for managing compactivoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  nuevo: function(req, res) {
    res.view({
      medicamento: req.param('id')
    });
  },

  'new': function (req, res) {
    CompActivo.create({
      medicamento: req.param('medicamento'),
      compActivo: req.param('compuestoActivo')
    }).exec(function(err, compactivo){
      if (err || !compactivo) {
        sails.log(err);
        res.redirect('/');
      }
      res.redirect('back');
    });
  },

  show: function(req, res) {
    CompActivo.find({medicamento: req.param('id')}).exec(function(err, compactivos){
      if (err) sails.log(err);
      if (compactivos) {
        if (JSON.stringify(compactivos).length <= 2 ) {
          res.redirect('/404');
        }
      }
      else if (!compactivos) {
        res.redirect('/');
      }
      Medicamento.find({id: req.param('id')}).exec(function(err, medicamento){
        if (err) sails.log(err);
        res.view({
          compactivos: compactivos,
          medicamento: medicamento
        });
      });
    });
  },

  /*borrar: function(req, res) {
    var medicamento;
    var compactivo;
    for (var i = 0 ; i < req.param('id').length ; i++ ) {
      if (req.param('id').substring(i,i+1) == "+") {
        medicamento = req.param('id').substring(0, i);
        compactivo = req.param('id').substring(i+1);
      }
    }
    CompActivo.query("delete from compactivos where Medicamento_idMedicamento ="+medicamento+" and CompActivos like '%"+compactivo+"%'  ", function(err, result){
      if (err) sails.log(err);
      if (result) {
        result = JSON.parse(JSON.stringify(result));
        if (JSON.stringify(result).length <= 2) {
          res.redirect('/500');
        }
        res.redirect('/');
      }
      else {
        res.redirect('/500');
      }
    });
  },*/

};

