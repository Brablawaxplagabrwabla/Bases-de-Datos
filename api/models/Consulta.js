/**
 * Consulta.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  connection: 'myDataBase',
  tableName: 'consulta',
  autoPK: false,
  autoCreatedAt: false,
  autoUpdatedAt: false,

  attributes: {
    paciente:{
      type: 'integer',
      primaryKey: true,
      required: true,
      columnName: 'Paciente_idPaciente'
    },

    medico:{
      type: 'integer',
      primaryKey: true,
      required: true,
      columnName: 'Medico_idMedico'
    },

    motivo:{
      type: 'string',
      size: 100,
      required: true,
      columnName: 'Motivo'
    },

    fechaConsul:{
      type: 'date',
      required: true,
      columnName: 'FechaCon'
    }
      }
};
