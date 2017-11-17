/**
 * Tiene.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  connection: 'myDataBase',
  tableName: 'tiene',
  autoPK: false,
  autoCreatedAt: false,
  autoUpdatedAt: false,

  attributes: {

    paciente: {
      type: 'integer',
      primaryKey: true,
      columnName: 'Paciente_idPaciente'
    },

    medico: {
      type: 'integer',
      columnName: 'Medico_idMedico'
    },

    historia: {
      type: 'integer',
      primaryKey: true,
      columnName: 'Historia_idHistoria'
    }

  }
};

