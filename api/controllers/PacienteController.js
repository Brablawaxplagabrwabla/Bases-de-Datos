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
      sexo: req.param('sexo'),
      nombre1: req.param('nombre1'),
      nombre2: req.param('nombre2'),
      apellido1: req.param('apellido1'),
      apellido2: req.param('apellido2'),
      fecha_nac: req.param('fecha_nac'),
      direccion: req.param('direccion'),
      email: req.param('correo'),
      estado: req.param('estado'),
      tiposangre: req.param('tiposangre'),
    }).exec( function (err, paciente){
      if (err || !paciente ) {
        sails.log(err);
        return;
      }
    });
    res.redirect('/');
  },

  'new': function(req, res) {
    TipoSangre.find({tiposangre: req.param('TipoSangre')}).exec(function(err, tipo){
      if (err || !tipo) {
        sails.log(err);
        res.redirect('/500');
      }
      else {
        Estado.query("SELECT * FROM estado where Estado like '%"+req.param('estado')+"%'", function(err, estado){
          if (err || !estado) {
            sails.log(err);
            res.redirect('/500');
          }
          else {
            Paciente.find({cedula: req.param('cedula')}).exec(function(err, paciente){
              if (JSON.stringify(paciente).length > 2) {
                res.redirect('back');
              }
              else {
                Paciente.create({
                  cedula: req.param('cedula'),
                  nombre1: req.param('nombre1'),
                  nombre2: req.param('nombre2'),
                  apellido1: req.param('apellido1'),
                  apellido2: req.param('apellido2'),
                  sexo: req.param('sexo'),
                  fecha_nac: req.param('fecha_nac'),
                  direccion: req.param('direccion'),
                  email: req.param('email'),
                  estado: estado[0].idEstado,
                  tiposangre: tipo[0].id
                }).exec(function(err, paciente){
                  if (err) sails.log(err);
                  Historia.create({
                    fechaHist: '1901-01-01',
                    sintomas: 'Sin definir',
                    notas: 'Sin definir',
                    peso: 0,
                    estatura: 0,
                    diagnostico: 'Sin definir',
                    intervenido: 0,
                    diabetes: 0,
                    hipertenso: 0,
                    fumador: 0,
                    referidoPor: 10000
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
                });
              }
            });
          }
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

  show: function (req, res) {
    var pacientes;
    var medicos;
    for (var i = 0 ; i < req.param('id').length ; i++ ) {
      if (req.param('id').substring(i,i+1) == "+") {
        pacientes = req.param('id').substring(0, i);
        medicos = req.param('id').substring(i+1);
      }
    }
    Paciente.findOne({id: pacientes}).exec(function (err, paciente) {
      Alergia.find({afectado: pacientes}).exec(function (err, alergia) {
        Telefono.find({persona: pacientes}).exec(function (err, telefono) {
          Medico.findOne({id: medicos}).exec(function(err, medico) {
            Tiene.find({paciente: pacientes}).exec(function (err, tiene) {
              TipoSangre.find({id: paciente.tiposangre}).exec(function(err, tiposangre){
                Estado.find({id: paciente.estado}).exec(function(err, estado){
                  estado = JSON.parse(JSON.stringify(estado));
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
                    var aux2 = Historia.query('select historia.*, medico.Apellido from medico\n' +
                      'inner join historia\n' +
                      'on historia.ReferidoPor = medico.idMedico and ('+aux+')', function(err, result){
                      if (!result) {
                        res.redirect('/');
                      }
                      aux2 = JSON.parse(JSON.stringify(result));
                      var intervenido;
                      var diabetes;
                      var hipertenso;
                      var fumador;
                      if ( aux2[0].Intervenido == 1 ) {
                        intervenido = "Sí";
                      }
                      else {
                        intervenido = "No";
                      }
                      if ( aux2[0].Diabetes == 1 ) {
                        diabetes = "Sí";
                      }
                      else {
                        diabetes = "No";
                      }
                      if ( aux2[0].Hipertenso == 1 ) {
                        hipertenso = "Sí";
                      }
                      else {
                        hipertenso = "No";
                      }
                      if ( aux2[0].Fumador == 1 ) {
                        fumador = "Sí";
                      }
                      else {
                        fumador = "No";
                      }
                      res.view({
                        tiposangre: tiposangre[0],
                        paciente: paciente,
                        alergias: alergia,
                        telefonos: telefono,
                        medico: medico,
                        tiposangre: tiposangre[0],
                        estado: estado[0],
                        intervenido: intervenido,
                        hipertenso: hipertenso,
                        diabetico: diabetes,
                        fumador: fumador,
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
                      tiposangre: tiposangre[0],
                      estado: estado[0],
                      intervenido: null,
                      hipertenso: null,
                      diabetico: null,
                      fumador: null,
                      historias: null
                    });
                  }
                });
              });
            });
          });
        });
      });
    });
  },

  showPaciente: function (req, res) {
    var pacientes = req.param('cedula');
    Paciente.findOne({cedula: pacientes}).exec(function (err, paciente) {
        if(paciente){
        Telefono.find({persona: paciente.id}).exec(function (err, telefono) {
            Tiene.find({paciente: paciente.id}).exec(function (err, tiene) {
              TipoSangre.find({id: paciente.tiposangre}).exec(function(err, tipodesangre){
                Estado.find({id: paciente.estado}).exec(function(err, estadovive){

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
                  telefonos: telefono,
                  historias: null,
                  tiposangre: tipodesangre,
                  estado: estadovive,
                });
                  return;
                }
                aux2 = JSON.parse(JSON.stringify(result));
                res.view({
                  paciente: paciente,
                  telefonos: telefono,
                  historias: aux2,
                  tiposangre: tipodesangre,
                  estado: estadovive,
                });
              })
              }
              else {
                res.view({
                  paciente: paciente,
                  telefonos: telefono,
                  historias: null,
                  tiposangre: tipodesangre,
                  estado: estadovive,
                });
              }
            });
              });
            });

        });
    }else{
      res.redirect("/");
    }
      });
  },


  delete: function (req, res) {
    Alergia.destroy({
      afectado: req.param('id')
    }).exec(function(err){
      if (err) sails.log(err);
      Telefono.destroy({
        persona: req.param('id')
      }).exec(function(err){
        if(err) sails.log(err);
        Consulta.destroy({
          paciente: req.param('id')
        }).exec(function(err){
          if (err) sails.log(err);
          Tiene.destroy({
            paciente: req.param('id')
          }).exec(function(err){
            if (err) sails.log(err);
            res.redirect('back');
          });
        });
      });
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
    TipoSangre.find({tiposangre: req.param('TipoSangre')}).exec(function(err, tipo) {
      if (err) sails.log(err);
      Estado.query("SELECT * FROM estado where Estado like '%"+req.param('estado')+"%'", function(err, estado) {
        if (err) sails.log(err);
        Paciente.update(req.param('id'), {
          nombre1: req.param('nombre1'),
          nombre2: req.param('nombre2'),
          apellido1: req.param('apellido1'),
          apellido2: req.param('apellido2'),
          sexo: req.param('sexo'),
          fecha_nac: req.param('fecha_nac'),
          direccion: req.param('direccion'),
          email: req.param('email'),
          estado: estado[0].idEstado,
          tiposangre: tipo[0].id
        }, function (err) {
          if (err) sails.log(err);
          res.redirect('back');
        });
      });
    });
  }

};
