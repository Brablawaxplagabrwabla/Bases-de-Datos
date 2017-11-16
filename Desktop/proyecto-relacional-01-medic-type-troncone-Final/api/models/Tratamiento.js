/**
 * Tratamiento.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  connection: 'myDataBase',
  tableName: 'tratamiento',
  autoPK: false,
  autoCreatedAt: false,
  autoUpdatedAt: false,

  attributes: {

    historia:{
      type: 'integer',
      primaryKey: true,
      required: true,
      columnName: 'Historia_idHistoria'
    },

    medicamento:{
      type: 'integer',
      primaryKey: true,
      required: true,
      columnName: 'Medicamento_idMedicamento'

    },

    posologia:{
      type: 'string',
      size: 45,
      required: true,
      columnName: 'Posologia'
    }

  }
};
