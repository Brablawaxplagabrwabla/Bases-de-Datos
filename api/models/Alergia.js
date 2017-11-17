/**
 * Alergia.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  connection: 'myDataBase',
  tableName: 'alergias',
  autoPK: false,
  autoCreatedAt: false,
  autoUpdatedAt: false,

  attributes: {

    alergia: {
      type: 'string',
      required: true,
      size: 45,
      columnName: 'Alergia'
    },

    afectado: {
      type: 'integer',
      required: true,
      columnName: 'Paciente_idPaciente'
    }

  }
};
