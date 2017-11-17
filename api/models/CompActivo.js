/**
 * CompActivo.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  connection: 'myDataBase',
  tableName: 'compactivos',
  autoPK: false,
  autoCreatedAt: false,
  autoUpdatedAt: false,

  attributes: {

    compActivo:{
      type: 'string',
      size: 100,
      required: true,
      columnName: 'CompActivos'
    },

    medicamento:{
      type: 'integer',
      required: true,
      columnName: 'Medicamento_idMedicamento'
    }

  }
};
