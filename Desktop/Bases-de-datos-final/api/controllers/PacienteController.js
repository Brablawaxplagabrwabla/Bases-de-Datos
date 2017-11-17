/**
 * PacienteController
 *
 * @description :: Server-side logic for managing Pacientes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  nuevo: function(req, res) {
    Medico.findOne(req.param('id')).exec( function(err, medico) {
      res.view({
        medico: medico
      })
    });
  },

  nuevoPaciente: function(req, res) {
    Paciente.create({
      cedula: req.param('cedula'),
      nombre: req.param('nombre'),
      apellido: req.param('apellido'),
      edo_civil: req.param('edo_civil'),
      direccion: req.param('direccion'),
      nivel_educativo: req.param('nivel_educativo'),
      fecha_nac: req.param('fecha_nac'),
      nacionalidad: req.param('nacionalidad'),
      sexo: req.param('sexo'),
      correo: req.param('correo'),
      estado: req.param('estado')
    }).exec( function (err, paciente){
      if (err || !paciente ) {
        return;
      }
    });
    res.redirect('/');
  },

  'new': function(req, res) {
    Paciente.create({
      cedula: req.param('cedula'),
      nombre: req.param('nombre'),
      apellido: req.param('apellido'),
      edo_civil: req.param('edo_civil'),
      direccion: req.param('direccion'),
      nivel_educativo: req.param('nivel_educativo'),
      fecha_nac: req.param('fecha_nac'),
      nacionalidad: req.param('nacionalidad'),
      sexo: req.param('sexo'),
      correo: req.param('correo'),
      estado: req.param('estado')
    }).exec( function (err, paciente){
      if (err || !paciente ) {
        return;
      }
      else {
        Historia.create({
          fechaHist: '1901-01-01',
          sintomas: 'Sin definir',
          notas: 'Sin definir',
          peso: 0,
          estatura: 0,
          diagnostico: 'Sin definir'
        }).exec( function(err, historia) {
          if (err) sails.log(err);
          Tiene.create({
            paciente: paciente.id,
            medico: req.param('medico'),
            historia: historia.id
          }).exec( function (err, historia) {
            if (err) sails.log(err);
            Medico.findOne(req.param('medico')).exec( function(err, medico) {
              if (err) sails.log(err);
              res.redirect('back');
            });
          });
        });
      }
    });
  },

  crear: function(req, res) {
    Paciente.create(req.params.all(), function(err, paciente) {
      if (err) sails.log(err);
      res.redirect('back');
    });
  },

  showMedico: function (req, res) {
    var pacientes = req.param('id').substring(0,1);
    var medicos = req.param('id').substring(2);
    Paciente.findOne({id: pacientes}).exec(function (err, paciente) {
      Alergia.find({afectado: pacientes}).exec(function (err, alergia) {
        Telefono.find({persona: pacientes}).exec(function (err, telefono) {
          Medico.findOne({id: medicos}).exec(function(err, medico) {
            Tiene.find({paciente: pacientes}).exec(function (err, tiene) {
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
                  res.redirect('/');
                  return;
                }
                aux2 = JSON.parse(JSON.stringify(result));
                aux2 = aux2;
                res.view({
                  paciente: paciente,
                  alergias: alergia,
                  telefonos: telefono,
                  medico: medico,
                  historias: aux2
                });
              })
              }
              else {
                res.view({
                  paciente: paciente,
                  alergias: alergia,
                  telefonos: telefono,
                  medico: medico,
                  historias: null
                });
              }
            });
          });
        });
      });
    });
  },

  showPaciente: function (req, res) {
    var pacientes = req.param('cedula');
    Paciente.findOne({cedula: pacientes}).exec(function (err, paciente) {
      Alergia.find({afectado: pacientes}).exec(function (err, alergia) {
        Telefono.find({persona: pacientes}).exec(function (err, telefono) {
            Tiene.find({paciente: pacientes}).exec(function (err, tiene) {
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
                  res.view({
                  paciente: paciente,
                  alergias: alergia,
                  telefonos: telefono,
                  historias: null
                });
                  return;
                }
                aux2 = JSON.parse(JSON.stringify(result));
                aux2 = aux2;
                res.view({
                  paciente: paciente,
                  alergias: alergia,
                  telefonos: telefono,
                  historias: aux2
                });
              })
              }
              else {
                res.view({
                  paciente: paciente,
                  alergias: alergia,
                  telefonos: telefono,
                  historias: null
                });
              }
            });
          });
        });
      });
  },


  delete: function (req, res) {

  var historiasABorrar = Tiene.query('select Historia_idHistoria from tiene where Paciente_idPaciente = ' + req.param('id'),
    function (err, historia) {
      historiasABorrar = JSON.parse(JSON.stringify(historia));
      sails.controllers.describe.delete(historiasABorrar, res);
      sails.controllers.alergia.delete(req, res);
      sails.controllers.telefono.delete(req, res);
      sails.controllers.tiene.delete(req, res);
      sails.controllers.historia.delete(historiasABorrar, res);
      Paciente.destroy(req.param('id')).exec(function (err) {
        if (err) {
          sails.log(err)
        }
      });
      res.redirect('back');
    });
  },

  editar: function(req, res) {
    Paciente.findOne(req.param('id')).exec(function(err, paciente){
      res.view({
        paciente: paciente
      })
    });
  },

  refrescar: function(req, res) {
    Paciente.update(req.param('id'), req.params.all(), function(err){
      if (err) sails.log(err);
      res.redirect('back');
    });
  }

};

