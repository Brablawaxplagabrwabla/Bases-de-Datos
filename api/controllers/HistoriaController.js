/**
 * HistoriaController
 *
 * @description :: Server-side logic for managing Historias
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  nuevo: function(req, res) {
    var pacientes = req.param('id').substring(0,1);
    var medicos = req.param('id').substring(2);
    Paciente.findOne(pacientes).exec(function(err, paciente){
      Medico.findOne(medicos).exec(function(err, medico){
        res.view({
          paciente: paciente,
          medico: medico
        });
      });
    });
  },

  'new': function(req, res) {
    var fumador;
    var diabetes;
    var intervenido;
    var hipertenso;
    if (req.param('fumador') == 'on') {
      fumador = 1;
    }
    else {
      fumador = 0;
    }
    if (req.param('diabetico') == 'on') {
      diabetes = 1;
    }
    else {
      diabetes = 0;
    }
    if (req.param('intervenido') == 'on') {
      intervenido = 1;
    }
    else {
      intervenido = 0;
    }
    if (req.param('hipertenso') == 'on') {
      hipertenso = 1;
    }
    else {
      hipertenso = 0;
    }
    Paciente.findOne(req.param('paciente')).exec(function(err, paciente){
      Medico.findOne(req.param('medico')).exec(function(err, medico){
         Historia.create({
          fechaHist: req.param('fechaHist'),
          sintomas: req.param('sintoma'),
          peso: req.param('peso'),
          estatura: req.param('estatura'),
          notas: req.param('notas'),
          diagnostico: req.param('diagnostico'),
          referidoPor: '10000',
          diabetes: diabetes,
          intervenido: intervenido,
          hipertenso: hipertenso,
          fumador: fumador
         }).exec(function(err, historia){
           Tiene.create({
             paciente: paciente.id,
             medico: medico.id,
             historia: historia.id
           }).exec(function(err) {
             if (err) sails.log(err);
             res.redirect('back');
           })
         });
      });
    });
  },

  delete: function(req, res) {
    var object = req[0];
    _.forEach(object, Historia.destroy({id: object.Historia_idHistoria}, function(err){
      if (err) sails.log(err);
      return;
    }));
  },

  editar: function(req, res) {
    Historia.find(req.param('id'), function(err, historia){
      res.view({
        historia: historia
      })
    });
  },

  refrescar: function(req, res) {
    var fumador;
    var diabetes;
    var intervenido;
    var hipertenso;
    if (req.param('fumador') == 'on') {
      fumador = 1;
    }
    else {
      fumador = 0;
    }
    if (req.param('diabetico') == 'on') {
      diabetes = 1;
    }
    else {
      diabetes = 0;
    }
    if (req.param('intervenido') == 'on') {
      intervenido = 1;
    }
    else {
      intervenido = 0;
    }
    if (req.param('hipertenso') == 'on') {
      hipertenso = 1;
    }
    else {
      hipertenso = 0;
    }
    Historia.update(req.param('id'), {
      fechaHist: req.param('fechaHist'),
      sintomas: req.param('sintomas'),
      peso: req.param('peso'),
      estatura: req.param('estatura'),
      notas: req.param('notas'),
      diagnostico: req.param('diagnostico'),
      referidoPor: '10000',
      diabetes: diabetes,
      intervenido: intervenido,
      hipertenso: hipertenso,
      fumador: fumador
    }, function(err){
      if (err) sails.log(err);
      res.redirect('back');
    });
  },

  bye: function(req, res) {
    Tiene.find(req.param('id')).exec(function(err, tiene){
      if (err) sails.log(err);
      if (tiene) {
        Tiene.destroy({historia: req.param('id')}).exec(function(err, tiene2){
          if (err) sails.log(err);
        });
        Describe.find({historia: req.param('id')}).exec(function(err, describe){
          if (err) sails.log(err);
          if (describe) {
            Describe.destroy({historia: req.param('id')}).exec(function(err, describe2){
              if (err) sails.log(err);
            });
          }
          Historia.destroy(req.param('id')).exec(function(err, historia){
            if (err) sails.log(err);
            res.redirect('back');
          });
        });
      }
      else {
        res.redirect('/500');
      }
    });
  },

informe: function(req, res) {
  Historia.find({id: req.param('id')}).exec(function(err, historia){
    if (err) sails.log(err);
    if (historia) {
      if (JSON.stringify(historia).length <= 2 ) {
        res.redirect('/500');
      }
      else {
        Tiene.find({historia: historia[0].id}).exec(function(err, tiene){
          if (err) sails.log(err);
          if (tiene) {
            if (JSON.stringify(tiene).length <= 2) {
              res.redirect('/500');
            }
            else {
              Medico.find({id: tiene[0].medico}).exec(function(err, medico){
                if (err) sails.log(err);
                if (medico) {
                  if (JSON.stringify(medico).length <= 2) {
                    res.redirect('/500');
                  }
                  else {
                    Especialidades.find({medico: medico[0].id}).exec(function(err,espec){
                      if (err) sails.log(err);
                      if (espec) {
                        if (JSON.stringify(espec).length <= 2) {
                          res.redirect('/500');
                        }
                        else {
                          Paciente.find({id: tiene[0].paciente}).exec(function(err, paciente){
                            if (err) sails.log(err);
                            if (paciente) {
                              if (JSON.stringify(paciente).length <= 2) {
                                res.redirect('/500');
                              }
                              else {
                                var sexo;
                                if (paciente[0].sexo == "M") {
                                  sexo = "masculino"
                                }
                                else {
                                  sexo = "femenino";
                                }
                                var fumador;
                                var diabetes;
                                var intervenido;
                                var hipertenso;
                                if (historia[0].fumador) {
                                  fumador = "sí";
                                }
                                else {
                                  fumador = "no";
                                }
                                if (historia[0].diabetes) {
                                  diabetes = "sí";
                                }
                                else {
                                  diabetes = "no";
                                }
                                if (historia[0].intervenido) {
                                  intervenido = "sí";
                                }
                                else {
                                  intervenido = "no";
                                }
                                if (historia[0].hipertenso) {
                                  hipertenso = "sí";
                                }
                                else {
                                  hipertenso = "no";
                                }
                                var especial;
                                var item1;
                                var punto1;
                                var item2;
                                var punto2;
                                var item3;
                                var punto3;
                                if (espec[0].especialidad == 1) {
                                  especial = "pediatra";
                                  item1 = "Ancho de la Cabeza";
                                  item2 = "Diámetro de los brazos";
                                  item3 = "Crecimiento";
                                  HPediatria.find({historia: historia[0].id}).exec(function(err,informe){
                                    if (err) sails.log(err);
                                    if (informe) {
                                      if (JSON.stringify(informe).length <= 2) {
                                        punto1 = "Sin datos";
                                        punto2 = "Sin datos";
                                        punto3 = "Sin datos";
                                      }
                                      else {
                                        punto1 = informe[0].anchoCabeza;
                                        punto2 = informe[0].diametroBrazo;
                                        punto3 = informe[0].crecimiento;
                                      }
                                    }
                                    else {
                                      punto1 = "Sin datos";
                                      punto2 = "Sin datos";
                                      punto3 = "Sin datos";
                                    }
                                    res.view({
                                      paciente: paciente,
                                      historia: historia,
                                      sexo: sexo,
                                      fumador: fumador,
                                      diabetes: diabetes,
                                      intervenido: intervenido,
                                      hipertenso: hipertenso,
                                      especialidad: especial,
                                      item1: item1,
                                      item2: item2,
                                      item3: item3,
                                      punto1: punto1,
                                      punto2: punto2,
                                      punto3: punto3
                                    });
                                  });
                                }
                                else if (espec[0].especialidad == 2) {
                                  especial = "oftalmólogo";
                                  item1 = "Fórmula";
                                  item2 = "Refracción";
                                  item3 = "No aplica";
                                  HOftalmologia.find({historia: historia[0].id}).exec(function(err,informe){
                                    if (err) sails.log(err);
                                    if (informe) {
                                      if (JSON.stringify(informe).length <= 2) {
                                        punto1 = "Sin datos";
                                        punto2 = "Sin datos";
                                        punto3 = "Sin datos";
                                      }
                                      else {
                                        punto1 = informe[0].formula;
                                        punto2 = informe[0].refraccion;
                                        punto3 = "No aplica";
                                      }
                                    }
                                    else {
                                      punto1 = "Sin datos";
                                      punto2 = "Sin datos";
                                      punto3 = "Sin datos";
                                    }
                                    res.view({
                                      paciente: paciente,
                                      historia: historia,
                                      sexo: sexo,
                                      fumador: fumador,
                                      diabetes: diabetes,
                                      intervenido: intervenido,
                                      hipertenso: hipertenso,
                                      especialidad: especial,
                                      item1: item1,
                                      item2: item2,
                                      item3: item3,
                                      punto1: punto1,
                                      punto2: punto2,
                                      punto3: punto3
                                    });
                                  });
                                }
                                else {
                                  especial = "oncólogo";
                                  item1 = "Metástasis";
                                  item2 = "Estado del cáncer";
                                  item3 = "Vida Restante";
                                  HOncologia.find({historia: historia[0].id}).exec(function(err,informe){
                                    if (err) sails.log(err);
                                    if (informe) {
                                      if (JSON.stringify(informe).length <= 2) {
                                        punto1 = "Sin datos";
                                        punto2 = "Sin datos";
                                        punto3 = "Sin datos";
                                      }
                                      else {
                                        punto1 = informe[0].metastasis;
                                        punto2 = informe[0].estadoCancer;
                                        punto3 = informe[0].vidaRestante;
                                      }
                                    }
                                    else {
                                      punto1 = "Sin datos";
                                      punto2 = "Sin datos";
                                      punto3 = "Sin datos";
                                    }
                                    res.view({
                                      paciente: paciente,
                                      historia: historia,
                                      sexo: sexo,
                                      fumador: fumador,
                                      diabetes: diabetes,
                                      intervenido: intervenido,
                                      hipertenso: hipertenso,
                                      especialidad: especial,
                                      item1: item1,
                                      item2: item2,
                                      item3: item3,
                                      punto1: punto1,
                                      punto2: punto2,
                                      punto3: punto3
                                    });
                                  });
                                }
                              }
                            }
                            else {
                              res.redirect('404');
                            }
                          });
                        }
                      }
                      else {
                        res.redirect('/404')
                      }
                    });
                  }
                }
                else {
                  res.redirect('/404');
                }
              });
            }
          }
          else {
            sails.log('/404');
          }
        });
      }
    }
    else {
      res.redirect('/404');
    }
  });
},

};
