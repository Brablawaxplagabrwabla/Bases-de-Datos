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
      Paciente.findOne({id: req.param('persona')}).exec(function (err, paciente) { 
        if (err) sails.log(err);
        Telefono.find({persona: paciente.id}).exec(function (err, telefono) {
          if (err) sails.log(err);
            Tiene.find({paciente: paciente.id}).exec(function (err, tiene) {
              if (err) sails.log(err);
              TipoSangre.find({id: paciente.tiposangre}).exec(function(err, tiposangre){
                sails.log(tiposangre);
                Estado.find({id: paciente.estado}).exec(function(err, estado){
                  sails.log(estado);
              var aux = '';
              if (tiene) {
              for (var i = 0 ; i < tiene.length ; i++ ) {
                if ( i == tiene.length - 1 ) {
                  aux += ('idHistoria = '+tiene[i].historia);
                }
                else {
                  aux += ('idHistoria = '+tiene[i].historia+' or ');
                }
              }
              var aux2 = Historia.query('select * from historia where '+aux, function(err, result){
                if (!result) {
                  res.view('Paciente/showPaciente/', {
                  paciente: paciente,
                  telefonos: telefono,
                  historias: null,
                  tiposangre: tiposangre,
                  estado: estado,
                });
                  return;
                }
                aux2 = JSON.parse(JSON.stringify(result));
                aux2 = aux2;
                res.view('Paciente/showPaciente/',{
                  paciente: paciente,
                  telefonos: telefono,
                  historias: aux2,
                  tiposangre: tiposangre,
                  estado: estado,
                });
              })
              }
              else {
                res.view('Paciente/showPaciente/',{
                  paciente: paciente,
                  telefonos: telefono,
                  historias: null,
                  tiposangre: tiposangre,
                  estado: estado,
                });
              }
            });
              });
            });
          
        });
      });
    });
  },

  index: function(req, res) {
    Telefono.find({persona: req.param('id')}).exec( function (err, paciente) {
      if (err) sails.log(err);
      return paciente;
    });
  },

  bye: function(req, res) {
    var persona;
    var telefono;
    for(var i = 0; i< req.param('id').length; i++){
      if(req.param('id').substring(i,i+1) == "+"){
        persona = req.param('id').substring(0,i);
        telefono = req.param('id').substring(i+1);
      }
    }
    Telefono.destroy({
      persona: persona,
      telefono: telefono
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
    var persona;
    var telefono;
    for (var i = 0 ; i < req.param('id').length ; i++ ) {
      if (req.param('id').substring(i,i+1) == "+") {
        persona = req.param('id').substring(0, i);
        telefono = req.param('id').substring(i+1);
      }
    }
    Telefono.find({
      persona: persona,
      telefono: telefono
    }).exec(function(err, telefono){
      res.view({
        telefono:telefono
      });
    })
  }

};

