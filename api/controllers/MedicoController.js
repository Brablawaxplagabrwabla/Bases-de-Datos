
/**
 * MedicoController
 *
 * @description :: Server-side logic for managing Medicoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  mostrarPacientes: function (req, res) {
    var licencia = req.param('licencia');
    var pacientes = "";
    var historias = "";
    Medico.find({
      licencia: licencia
    }).exec(function(err, medico){
      if (err) sails.log(err);
      if (medico[0]) {
        Tiene.find({
          medico: medico[0].id
        }).exec(function(err, tiene){
          var aux;
          var aux2;
          var count = 0;
          if (err) sails.log(err);
          if (tiene) {
            if (JSON.stringify(tiene).length > 2 ) {
              for (var i = 0; i < tiene.length; i++) {
                aux2 = JSON.stringify(tiene[i].historia);
                aux2 += ",";
                historias = aux2.concat(historias);
                Paciente.findOne(tiene[i].paciente).exec(function (err, paciente) {
                  if (JSON.stringify(paciente).length <= 2) {
                    res.redirect('404');
                  }
                  aux = JSON.stringify(paciente.id);
                  count++;
                  aux += ",";
                  pacientes = aux.concat(pacientes);
                  if (count > tiene.length - 1) {
                    Paciente.query("select * from paciente where idPaciente in (" + pacientes + "0)", function (err, respuestPac) {
                      if (err) sails.log(err);
                      res.view({
                        paciente: JSON.parse(JSON.stringify(respuestPac)),
                        medico: medico
                      })
                    });
                  }
                });
              }
            }
            else {
              res.view({
                paciente: null,
                medico: medico
              });
            }
          }
          else {
            res.redirect('404');
          }
        });
      }
      else {
        res.redirect('404');
      }
    });

  },

  topMedicos: function(req, res){
    var query = Medico.query('Select CONCAT(medico.Nombre, " ", medico.Apellido) AS NombreCompleto, '+
     'especialidad.Especialidad, COUNT(consulta.Medico_idMedico) As Consultas From medico '+
      'INNER JOIN consulta on medico.idMedico = consulta.Medico_idMedico ' +
      'INNER JOIN especialidades ON medico.idMedico = especialidades.Medico_idMedico ' +
      'INNER JOIN especialidad ON especialidades.Especialidad_idEspecialidad = especialidad.idEspecialidad ' +
      'GROUP BY consulta.Medico_idMedico '+
      'ORDER BY Consultas;', function(err, result){
        sails.log(result);
        res.view({
          matriz : result,
        });
      });

  },

  listaMedicos: function(req, res){
    var idEspec = req.param('idEspecialidad');
    if(idEspec == 0){
    var query = Medico.query('Select medico.*, especialidad.Especialidad from medico '+
      'INNER JOIN especialidades ON medico.idMedico = especialidades.Medico_idMedico '+
      'INNER JOIN especialidad ON especialidades.Especialidad_idEspecialidad = especialidad.idEspecialidad;', function(err, result){
       if(err) sails.log(err);
        res.view({
          matriz: result,
          tipo: "todos los campos",
        });
      });
  }else{
    var idEspec = req.param('idEspecialidad');
    var query = Medico.query('Select medico.*, especialidad.Especialidad from medico '+
      'INNER JOIN especialidades ON medico.idMedico = especialidades.Medico_idMedico '+
      'INNER JOIN especialidad ON especialidades.Especialidad_idEspecialidad = especialidad.idEspecialidad '+
      'WHERE especialidad.idEspecialidad = '+idEspec+';', function(err, result){
       if(err) sails.log(err);
        res.view({
          matriz: result,
          tipo: result[0].Especialidad,
        });
      });
    }
  },

  solicitudConsulta: function(req, res){


  },

};
