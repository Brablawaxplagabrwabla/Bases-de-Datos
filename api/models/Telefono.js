/**
 * Telefono.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  connection: 'myDataBase',
  tableName: 'telefonos',
  autoPK: false,
  autoCreatedAt: false,
  autoUpdatedAt: false,

  attributes: {

    telefono: {
      type: 'string',
      required: true,
      size: 20,
      columnName: 'Telefono'
    },

    persona: {
      type: 'integer',
      required: true,
      primaryKey: true,
      columnName: 'Paciente_idPaciente'
    }
  }
};

