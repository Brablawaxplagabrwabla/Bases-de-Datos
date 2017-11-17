/**
 * MedicoController
 *
 * @description :: Server-side logic for managing Medicoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  mostrarPacientes: function (req, res) {
    var licencia = req.param('licencia');
    Medico.find({Licencia: licencia}).exec( function(err, medico) {
        var query = Paciente.query('SELECT * FROM paciente '+
                               'INNER JOIN tiene ON tiene.Paciente_idPaciente = paciente.idPaciente '
                               + 'INNER JOIN medico ON  tiene.Medico_idMedico = medico.idMedico '+
                               ' where medico.Licencia = ' + licencia + ';', function(err, paciente) {
          var aux = JSON.parse(JSON.stringify(paciente));
          res.view({
            paciente: aux,
            medico: medico
          })
        })
      }
    );
  },

};

