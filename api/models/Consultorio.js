/**
 * Consultorio.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  connection: 'myDataBase',
  tableName: 'consultorio',
  autoPK: false,
  autoCreatedAt: false,
  autoUpdatedAt: false,

  attributes: {
    consultorio:{
      type: 'string',
      size: 100,
      required: true,
      columnName: 'Consultorio'
    },

    medico:{
      type: 'integer',
      required: true,
      columnName: 'Medico_idMedico'
    }
  }
};
